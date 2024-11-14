let isSelectingLanguage = false;

const languages = {};

async function loadLanguages() {
    try {
        const langFiles = ['en', 'jp', 'tw', 'vi', 'ko', 'ru'];  // List of language files
        for (let lang of langFiles) {
            const response = await fetch(`languages/${lang}.json`);
            const data = await response.json();
            languages[lang] = data;  // Dynamically adding properties to the `languages` object
        }

    } catch (error) {
        debugLog("Error loading language files:", error);
    }
}

// Function to set the language
async function setLanguage(language) {
    document.querySelector('#language_selected_flag').src = "images/flags/"+ language +".png";
    document.querySelector('#title').textContent = languages[language].appName;

    document.querySelector('label[for="accountName"]').textContent = languages[language].accountName;
    document.querySelector('label[for="uid"]').textContent = languages[language].uid;

    document.querySelector('label[for="genshin"]').textContent = languages[language].genshin;
    document.querySelector('label[for="honkai_star_rail"]').textContent = languages[language].honkaiStarRail;
    document.querySelector('label[for="honkai_3"]').textContent = languages[language].honkai3;
    document.querySelector('label[for="tears_of_themis"]').textContent = languages[language].tearsOfThemis;
    document.querySelector('label[for="zenless_zone_zero"]').textContent = languages[language].zenlessZoneZero;

    document.querySelector('label[for="giftcode"]').textContent = languages[language].giftcode;

    document.querySelector('#server_select_title').textContent = languages[language].server_select;

    document.querySelector('#Notification_title').textContent = languages[language].notificationTitle;
    document.querySelector('label[for="discordName"]').textContent = languages[language].discordName;
    document.querySelector('label[for="notification"]').textContent = languages[language].discordNotifications;
    document.querySelector('#notificationText').textContent = languages[language].notificationText;
    document.querySelector('#discordSignIn').textContent = languages[language].signInWithDiscord;
    document.querySelector('#discordInvite').textContent = languages[language].discordInvite;

    document.querySelector('#loadingMessage').textContent = languages[language].loadingMessage;
    document.querySelector('#successMessage').textContent = languages[language].successMessage;
    document.querySelector('#errorMessage').textContent = languages[language].errorMessage;
    document.querySelector('#errorMessage_login').textContent = languages[language].errorMessage_login;
    document.querySelector('#errorMessage_version').textContent = languages[language].errorMessage_version;

    document.querySelector('#submit').textContent = languages[language].submit;

    document.querySelector('#toggleDebug').textContent = languages[language].toggleDebug;

    document.querySelector('#redirectButton').textContent = languages[language].redirectButton;
    document.querySelector('#errorMessage_redirect').textContent = languages[language].errorMessage_redirect;

    document.querySelector('#version_text').textContent = languages[language].version_text;
}

// Event listener for language flag clicks
document.querySelectorAll('.language-flag').forEach(flag => {
    flag.addEventListener('click', function() {
        const language = this.getAttribute('data-language');
        setLanguage(language);
        localStorage.language = language;
        console.log(localStorage.language);

        //const language_selection = document.getElementById('language_selection');
        isSelectingLanguage = !isSelectingLanguage;
        language_selection.style.display = 'none';
    });
});

// Initial language setting
document.addEventListener('DOMContentLoaded', async function() {

    //loadlanguages
    await loadLanguages();

    // Set default language to English
    const defaultLanguage = localStorage.language || 'en';
    setLanguage(defaultLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleLanguageSelection = document.getElementById('language_selected_flag')
    const language_selection = document.getElementById('language_selection');

    const accountNameInput = document.getElementById('accountName');
    const uidInput = document.getElementById('uid');

    const genshinInput = document.getElementById('game_genshin');
    const honkaiStarRailInput = document.getElementById('game_honkai_star_rail');
    const honkai3Input = document.getElementById('game_honkai_3');
    const tearsOfThemisInput = document.getElementById('game_tears_of_themis');
    const zenlessZoneZeroInput = document.getElementById('game_zenless_zone_zero');

    const giftcodeInput = document.getElementById('feature_giftcode');

    const server_America = document.getElementById('server_America');
    const server_Asia = document.getElementById('server_Asia');
    const server_TW_HK_CN = document.getElementById('server_TW_HK_CN');
    const server_Europe = document.getElementById('server_Europe');

    const notificationInput = document.getElementById('feature_notification');
    const notificationText = document.getElementById('notificationText');
    const submitButton = document.getElementById('submit');
    const discordSignInButton = document.getElementById('discordSignIn');
    const discordNameInput = document.getElementById('discordName');    
    const discordInvite = document.getElementById('discordInvite');

    const loadingMessage = document.getElementById('loadingMessage');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessage_login = document.getElementById('errorMessage_login');
    const errorMessage_version = document.getElementById('errorMessage_version');

    const current_version = document.getElementById('current_version');

    const toggleDebugButton = document.getElementById('toggleDebug');
    const debugDisplay = document.getElementById('debug');

    const redirectButton = document.getElementById('redirectButton');
    const errorMessage_redirect = document.getElementById('errorMessage_redirect');
    const targetURL = "https://www.hoyolab.com/";

    let latest_version = null;

    let ltuid_v2 = null;
    let ltoken_v2 = null;

    let discordUserID = null;

    

    let isDebugMode = false;

    const DISCORD_CLIENT_ID = '1267008645074260009'; // Replace with your Discord Client ID
    const DISCORD_REDIRECT_URI = `https://${chrome.runtime.id}.chromiumapp.org/`; // Correct OAuth2 redirect URI

    // Function to show a notification message
    function showMessage(messageElement) {
        loadingMessage.style.display = 'none';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        errorMessage_login.style.display = 'none';
        errorMessage_redirect.style.display = 'none';
        errorMessage_version.style.display = 'none';
        
        messageElement.style.display = 'block';
    }

    // Toggle Language Selection
    toggleLanguageSelection.addEventListener('click', () => {
    isSelectingLanguage = !isSelectingLanguage;  // Toggle debug mode
    language_selection.style.display = isSelectingLanguage ? 'block' : 'none'; // Show/hide debug console
    });

    // Toggle Developer Mode
    toggleDebugButton.addEventListener('click', () => {
        isDebugMode = !isDebugMode;  // Toggle debug mode
        debugDisplay.style.display = isDebugMode ? 'block' : 'none'; // Show/hide debug console
        toggleDebugButton.textContent = isDebugMode ? languages[localStorage.language].untoggleDebug : languages[localStorage.language].toggleDebug; // Update button text
    });

    // Hide all fields and debug display
    function hideFields() {
        const userSpace = document.getElementById('userSpace');
        userSpace.style.display = 'none';  // Properly hide the user space
    }

    // Show only message and redirect button
    function showRedirectMessage() {
        hideFields();  // Hide the form fields
        redirectButton.style.display = 'block';
        showMessage(errorMessage_redirect);
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
                debugLog("Token and UID not detected. Please sign in to Hoyolab proceed.");

                showMessage(errorMessage_login);
            }
        });
    }

    // Function to load user data
    async function loadUserData(ltuid_v2) {
        try {
            debugLog("Fetching user data from the API...");  // Debug message
            const response = await fetch(`https://script.google.com/macros/s/AKfycbwGBOE6WS6GWyDu2hfR4xQXHJTtlEFGxGTcK8RFV5CIUFnkJ1MK76EtCIcEkchr9392/exec?uid=${ltuid_v2}`);
            const data = await response.json();
            debugLog("User data received from the API");  // Debug message
            debugLog(JSON.stringify(data));  // Debug response data

            const manifest = chrome.runtime.getManifest();
            current_version.textContent = manifest.version;

            // Populate the fields with user data
            latest_version = data.latest_version;

            accountNameInput.value = data.accountName || ltuid_v2;  // Default to UID if no account name
            uidInput.value = ltuid_v2;

            genshinInput.checked = data.genshin;
            honkaiStarRailInput.checked = data.honkai_star_rail;
            honkai3Input.checked = data.honkai_3;
            tearsOfThemisInput.checked = data.tears_of_themis;
            zenlessZoneZeroInput.checked = data.zenless_zone_zero;

            giftcodeInput.checked = data.giftcode;
            
            const server = data.server;
            server_America.checked = (["os_usa"].every(subServer => server.includes(subServer)));
            server_Asia.checked = (["os_asia"].every(subServer => server.includes(subServer)));
            server_TW_HK_CN.checked = (["os_cht"].every(subServer => server.includes(subServer)));
            server_Europe.checked = (["os_euro"].every(subServer => server.includes(subServer)));


            notificationInput.checked = data.notification;
            discordUserID = data.discordName;
            discordNameInput.value = data.accountName;

            if (compareVersions(current_version.textContent, latest_version)) {
                debugLog("Version mismatch. Please update the extension.");

                showMessage(errorMessage_version);
            }

            // Enable notificationInput
            if (discordUserID != '') {
                notificationInput.disabled = false;
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
        const genshin = genshinInput.checked;
        const honkaiStarRail = honkaiStarRailInput.checked;
        const honkai3 = honkai3Input.checked;
        const tearsOfThemis = tearsOfThemisInput.checked;
        const zenlessZoneZero = zenlessZoneZeroInput.checked;

        const giftcode = giftcodeInput.checked;

        let server = "";
        if (server_America.checked) {server += "os_usa "}
        if (server_Asia.checked) {server += "os_asia "}
        if (server_TW_HK_CN.checked) {server += "os_cht "}
        if (server_Europe.checked) {server += "os_euro "}

        const notification = notificationInput.checked;
        const accountName = accountNameInput.value;
        const discordName = discordUserID;


        const requestData = {
            current_version: current_version.textContent,
            token: ltoken_v2,
            uid: ltuid_v2,
            genshin,
            honkai_star_rail: honkaiStarRail,
            honkai_3: honkai3,
            tears_of_themis: tearsOfThemis,
            zenless_zone_zero: zenlessZoneZero,
            giftcode,
            server,
            notification,
            accountName,
            discordName,
        };

        debugLog('Submitting form data: ' + JSON.stringify(requestData));  // Debug form data

        if (ltuid_v2 = "") {
            debugLog("Token and UID not detected. Please sign in to Hoyolab proceed.");

            showMessage(errorMessage_login);
        } else if (compareVersions(current_version.textContent, latest_version)) {
            debugLog("Version mismatch. Please update the extension.");

            showMessage(errorMessage_version);
        } else {
            try {
                showMessage(loadingMessage);
                const response = await fetch(`https://script.google.com/macros/s/AKfycbwGBOE6WS6GWyDu2hfR4xQXHJTtlEFGxGTcK8RFV5CIUFnkJ1MK76EtCIcEkchr9392/exec`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });
                const result = await response.json();
                debugLog('Response from API: ' + JSON.stringify(result));  // Debug API response

                // Show success message if submission was successful
                if (result.status == "success") {
                    showMessage(successMessage);
                }

            } catch (error) {
                debugLog('Error submitting data: ' + error); // Debug error

                showMessage(errorMessage); // Show error message
            }
        }
    });

    // Discord OAuth2 Sign-In
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

                debugLog('Discord user: ' + discordNameInput.value);
            })
            .catch(error => {
                debugLog('Error fetching Discord user: ' + error);
            });
        });
    });

discordInvite.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default behavior immediately
    window.open("https://discord.gg/W8GF6XYzTC", "_blank"); // Opens the link in a new tab
    
    // Delay the default navigation to make sure it does not trigger
    setTimeout(() => { window.location.href = window.location.href; }, 1);
  });

    // Redirect button functionality
    redirectButton.addEventListener('click', () => {
        chrome.tabs.update({ url: targetURL }, () => {
            window.close();  // Close the popup before navigation
        });
    });
});

function compareVersions(version1, version2) {
    // Split the version strings by the dot (.)
    const v1Parts = version1.split('.').map(num => parseInt(num, 10));
    const v2Parts = version2.split('.').map(num => parseInt(num, 10));

    // Compare each part of the version
    const length = Math.max(v1Parts.length, v2Parts.length);
    
    for (let i = 0; i < length; i++) {
        // Get the current part, defaulting to 0 if the version is shorter
        const v1Part = v1Parts[i] || 0;
        const v2Part = v2Parts[i] || 0;

        if (v1Part < v2Part) {
            return true;  // version1 is smaller
        } else if (v1Part > v2Part) {
            return false; // version1 is greater
        }
    }
    
    return false;  // versions are equal
}