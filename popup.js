document.addEventListener('DOMContentLoaded', () => {
    const accountNameInput = document.getElementById('accountName');
    const uidInput = document.getElementById('uid');

    const genshinInput = document.getElementById('genshin');
    const honkaiStarRailInput = document.getElementById('honkai_star_rail');
    const honkai3Input = document.getElementById('honkai_3');
    const tearsOfThemisInput = document.getElementById('tears_of_themis');
    const zenlessZoneZeroInput = document.getElementById('zenless_zone_zero');

    const giftcodeInput = document.getElementById('giftcode');

    const notificationInput = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    const submitButton = document.getElementById('submit');
    const discordSignInButton = document.getElementById('discordSignIn');
    const discordNameInput = document.getElementById('discordName');

    const debugDisplay = document.getElementById('debug');

    const redirectButton = document.getElementById('redirectButton');
    const targetURL = "https://www.hoyolab.com/";

    let ltuid_v2 = null;
    let ltoken_v2 = null;

    const DISCORD_CLIENT_ID = '1267008645074260009'; // Replace with your Discord Client ID
    const DISCORD_REDIRECT_URI = `https://${chrome.runtime.id}.chromiumapp.org/`; // Correct OAuth2 redirect URI

    // Hide all fields and debug display
    function hideFields() {
        const userSpace = document.getElementById('userSpace');
        userSpace.style.display = 'none';  // Properly hide the user space
    }

    // Show only message and redirect button
    function showRedirectMessage() {
        hideFields();  // Hide the form fields
        const message = document.createElement('p');  // Create message element
        message.textContent = `You are not on ${targetURL}. Please visit the correct site.`;
        document.body.appendChild(message);  // Add the message to the body
        redirectButton.style.display = 'block';  // Show the redirect button
    }

    // Function to display debug messages
    function debugLog(message) {
        const p = document.createElement('p');
        p.textContent = message;
        debugDisplay.appendChild(p);
    }

    // Function to retrieve cookies and check for tokens
    function fetchCookies() {
        chrome.cookies.getAll({ url: targetURL }, (cookies) => {
            debugLog("Fetching cookies...");  // Debug message
            const ltuidCookie = cookies.find(cookie => cookie.name === 'ltuid_v2');
            const ltokenCookie = cookies.find(cookie => cookie.name === 'ltoken_v2');

            if (ltuidCookie && ltokenCookie) {
                ltuid_v2 = ltuidCookie.value;
                ltoken_v2 = ltokenCookie.value;
                debugLog(`ltuid_v2: ${ltuid_v2}, ltoken_v2: ${ltoken_v2}`);  // Debug tokens
                loadUserData(ltuid_v2);  // Load user data with the tokens
            } else {
                debugLog("Token and UID not detected. Please sign in to proceed.");
            }
        });
    }

    // Function to load user data using the tokens from cookies
    async function loadUserData(ltuid_v2) {
        try {
            debugLog("Fetching user data from the API...");  // Debug message
            const response = await fetch(`https://script.google.com/macros/s/AKfycbwGBOE6WS6GWyDu2hfR4xQXHJTtlEFGxGTcK8RFV5CIUFnkJ1MK76EtCIcEkchr9392/exec?uid=${ltuid_v2}`);
            const data = await response.json();
            debugLog("User data received from the API");  // Debug message
            debugLog(JSON.stringify(data));  // Debug response data

            // Populate the fields with user data
            accountNameInput.value = data.accountName || ltuid_v2;  // Default to UID if no account name
            uidInput.value = ltuid_v2;

            genshinInput.checked = data.genshin;
            honkaiStarRailInput.checked = data.honkai_star_rail;
            honkai3Input.checked = data.honkai_3;
            tearsOfThemisInput.checked = data.tears_of_themis;
            zenlessZoneZeroInput.checked = data.zenless_zone_zero;

            giftcodeInput.checked = data.giftcode;

            notificationInput.checked = data.notification;
            discordUserID = data.discordName;
            discordNameInput.value = data.accountName

            // Enable notificationInput
            if (discordNameInput.value != '') {
                notificationInput.disabled = false;
                notificationText.textContent = 'Discord notification'
            }


        } catch (error) {
            debugLog('Error fetching user data: ' + error);  // Debug error
        }
    }

    // Check the active tab's URL and validate if user is on the target site
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;

        if (url.startsWith(targetURL)) {
            fetchCookies();  // Fetch cookies if user is on the correct site
        } else {
            showRedirectMessage();  // Show redirect message if not on the correct site
        }
    });

    // Submit the form data
    submitButton.addEventListener('click', async function () {
        const manifest = chrome.runtime.getManifest();
        const version = manifest.version;

        const genshin = genshinInput.checked;
        const honkaiStarRail = honkaiStarRailInput.checked;
        const honkai3 = honkai3Input.checked;
        const tearsOfThemis = tearsOfThemisInput.checked;
        const zenlessZoneZero = zenlessZoneZeroInput.checked;

        const giftcode = giftcodeInput.checked;

        const notification = notificationInput.checked;
        const accountName = accountNameInput.value;
        const discordName = discordUserID;


        const requestData = {
            version,
            token: ltoken_v2,
            uid: ltuid_v2,
            genshin,
            honkai_star_rail: honkaiStarRail,
            honkai_3: honkai3,
            tears_of_themis: tearsOfThemis,
            zenless_zone_zero: zenlessZoneZero,
            giftcode,
            notification,
            accountName,
            discordName,
        };

        debugLog('Submitting form data: ' + JSON.stringify(requestData));  // Debug form data

        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbwGBOE6WS6GWyDu2hfR4xQXHJTtlEFGxGTcK8RFV5CIUFnkJ1MK76EtCIcEkchr9392/exec`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            const result = await response.json();
            debugLog('Response from API: ' + JSON.stringify(result));  // Debug API response
        } catch (error) {
            debugLog('Error submitting data: ' + error);  // Debug error
        }
    });

    // Real Discord OAuth2 Sign-In
    discordSignInButton.addEventListener('click', function () {
        const authURL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=token&scope=identify`;

        chrome.identity.launchWebAuthFlow({
            url: authURL,
            interactive: true
        }, (redirectUrl) => {
            if (chrome.runtime.lastError || !redirectUrl) {
                debugLog('Discord sign-in failed.');
                return;
            }

            // Extract the access token from the redirect URL
            const token = new URL(redirectUrl).hash.match(/access_token=([^&]*)/)[1];
            debugLog('Discord token: ' + token);

            // Fetch Discord user data with the token
            fetch('https://discord.com/api/users/@me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => response.json())
            .then(data => {
                discordUserID = '<@'+ data.id +'>';

                accountNameInput.value = data.username;
                discordNameInput.value = data.username;

                notificationInput.disabled = false
                notificationText.textContent = 'Discord notification'

                debugLog('Discord user: ' + discordNameInput.value);
            })
            .catch(error => {
                debugLog('Error fetching Discord user: ' + error);
            });
        });
    });

    // Redirect button functionality
    redirectButton.addEventListener('click', () => {
        chrome.tabs.update({ url: targetURL }, () => {
            window.close();  // Close the popup before navigation
        });
    });
});