const languages = {
    en: {
        appName: "Mihoyo Check-in Bot",

        accountName: "Account Name:",
        uid: "UID:",

        genshin: "Genshin Impact",
        honkaiStarRail: "Honkai Star Rail",
        honkai3: "Honkai 3",
        tearsOfThemis: "Tears of Themis",
        zenlessZoneZero: "Zenless Zone Zero",

        giftcode: "Auto claim new public giftcode",

        server_select: "Select Server",

        discordName: "Discord Name:",
        discordNotifications: "Discord Notifications",
        notificationText: "(Sign-In with Discord to enable notification)",
        signInWithDiscord: "Sign in with Discord",
        discordInvite: "Join Discord Channel for Logs and Notifications",

        loadingMessage: "Loading...",
        successMessage: "Submission Successful!",
        errorMessage: "Submission Failed. Try again or contact support on discord.",
        errorMessage_login: "Please log in to HoYoLAB to continue.",
        errorMessage_version: "Please update the extension to continue: https://chromewebstore.google.com/detail/mihoyo-check-in-bot/mnnmhmmlombkjacdckobhfcmjomfiaeg.",

        submit: "Submit",

        toggleDebug: "Enable developer mode",
        untoggleDebug: "Disable developer mode",

        redirectButton: "Go to Hoyolab",
        errorMessage_redirect: "You are not on https://www.hoyolab.com/. Please visit the correct site.",
    },
    jp: {
        appName: "ミホヨ チェックイン ボット",

        accountName: "アカウント名:",
        uid: "UID:",

        genshin: "原神",
        honkaiStarRail: "崩壊：星穹鉄道",
        honkai3: "崩壊3rd",
        tearsOfThemis: "テイアーズ・オブ・テミス",
        zenlessZoneZero: "ゼンレスゾーンゼロ",

        giftcode: "新しい公共ギフトコードを自動的に請求",

        server_select: "サーバー選択",

        discordName: "ディスコード名:",
        discordNotifications: "ディスコード通知",
        notificationText: "(通知を有効にするには Discord でサインインしてください)",
        signInWithDiscord: "Discordでサインイン",
        discordInvite: "Discord チャンネルに参加してログと通知を取得する",

        loadingMessage: "読み込み中...",
        successMessage: "送信に成功しました!",
        errorMessage: "送信に失敗しました。もう一度試すか、Discord のサポートにお問い合わせください。",
        errorMessage_login: "続行するにはHoYoLABにログインしてください。",
        errorMessage_version: "拡張機能を更新して続行してください: https://chromewebstore.google.com/detail/mihoyo-check-in-bot/mnnmhmmlombkjacdckobhfcmjomfiaeg",

        submit: "送信",

        toggleDebug: "開発者モードを有効にする",
        untoggleDebug: "開発者モードを無効にする",

        redirectButton: "ホヨラボに行く",
        errorMessage_redirect: "https://www.hoyolab.com/ にアクセスしていません。正しいサイトにアクセスしてください。",
    },
    tw: {
        appName: "米哈遊簽到機器人",

        accountName: "帳號名稱:",
        uid: "UID:",

        genshin: "原神",
        honkaiStarRail: "崩壞：星穹鐵道",
        honkai3: "崩壞3rd",
        tearsOfThemis: "命運之眼",
        zenlessZoneZero: "無盡之地",

        giftcode: "自動領取最新的公開禮品碼",

        server_select: "選擇伺服器",

        discordName: "Discord 名稱:",
        discordNotifications: "Discord 通知",
        notificationText: "（使用 Discord 登入以啟用通知）",
        signInWithDiscord: "使用 Discord 登入",
        discordInvite: "有關日誌和通知，請參加 Discord 頻道",

        loadingMessage: "載入中...",
        successMessage: "提交成功！",
        errorMessage: "提交失敗。請重試或聯絡支援人員以解決不和諧問題。",
        errorMessage_login: "請登入HoYoLAB以繼續。",
        errorMessage_version: "請更新擴充功能以繼續使用：https://chromewebstore.google.com/detail/mihoyo-check-in-bot/mnnmhmmlombkjacdckobhfcmjomfiaeg。",

        submit: "提交",

        toggleDebug: "啟用開發者模式",
        untoggleDebug: "禁用開發者模式",

        redirectButton: "前往 Hoyolab",
        errorMessage_redirect: "您不在 https://www.hoyolab.com/ 上。請造訪正確的網站。",
    },
    vi: {
        appName: "Bot Check-in Mihoyo",

        accountName: "Tên tài khoản:",
        uid: "UID:",

        genshin: "Genshin Impact",
        honkaiStarRail: "Honkai Star Rail",
        honkai3: "Honkai 3",
        tearsOfThemis: "Tears of Themis",
        zenlessZoneZero: "Zenless Zone Zero",

        giftcode: "Tự động nhận Giftcode công khai",

        server_select: "Chọn Máy Chủ",

        discordName: "Tên Discord:",
        discordNotifications: "Thông báo Discord",
        notificationText: "(Đăng nhập bằng Discord để bật thông báo)",
        signInWithDiscord: "Đăng nhập với Discord",
        discordInvite: "Tham gia kênh Discord để nhận nhật ký và thông báo",

        loadingMessage: "Đang tải...",
        successMessage: "Gửi thành công!",
        errorMessage: "Gửi không thành công. Hãy thử lại hoặc liên hệ với bộ phận hỗ trợ trên discord.",
        errorMessage_login: "Vui lòng đăng nhập vào HoYoLAB để tiếp tục.",
        errorMessage_version: "Vui lòng cập nhật tiện ích mở rộng để tiếp tục: https://chromewebstore.google.com/detail/mihoyo-check-in-bot/mnnmhmmlombkjacdckobhfcmjomfiaeg.",

        submit: "Gửi",

        toggleDebug: "Bật chế độ nhà phát triển",
        untoggleDebug: "Tắt chế độ nhà phát triển",

        redirectButton: "Đi tới Hoyolab",
        errorMessage_redirect: "Bạn không ở trang https://www.hoyolab.com/. Vui lòng truy cập đúng trang web.",
    },
    ko:{
        appName: "미호요 체크인 봇",
    
        accountName: "계정 이름:",
        uid: "UID:",
    
        genshin: "원신",
        honkaiStarRail: "붕괴: 스타레일",
        honkai3: "붕괴3rd",
        tearsOfThemis: "테오 티미스",
        zenlessZoneZero: "젠레스 존 제로",
    
        giftcode: "새로운 공개 기프트코드 자동 클레임",

        server_select: "서버 선택",
    
        discordName: "디스코드 이름:",
        discordNotifications: "디스코드 알림",
        notificationText: "(알림을 활성화하려면 디스코드로 로그인하세요)",
        signInWithDiscord: "디스코드로 로그인",
        discordInvite: "로그 및 알림을 받으려면 디스코드 채널에 참여하세요",
    
        loadingMessage: "로딩 중...",
        successMessage: "제출 성공!",
        errorMessage: "제출 실패. 다시 시도하거나 디스코드에서 지원 팀에 문의하세요.",
        errorMessage_login: "계속하려면 HoYoLAB에 로그인하세요.",
        errorMessage_version: "계속하려면 확장 프로그램을 업데이트해 주세요: https://chromewebstore.google.com/detail/mihoyo-check-in-bot/mnnmhmmlombkjacdckobhfcmjomfiaeg.",
    
        submit: "제출",
    
        toggleDebug: "개발자 모드 활성화",
        untoggleDebug: "개발자 모드 비활성화",
    
        redirectButton: "Hoyolab으로 이동",
        errorMessage_redirect: "https://www.hoyolab.com/ 에 있지 않습니다. 올바른 사이트를 방문하세요."
    }
};

// Function to set the language
function setLanguage(language) {
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
}

// Event listener for language flag clicks
document.querySelectorAll('.language-flag').forEach(flag => {
    flag.addEventListener('click', function() {
        const language = this.getAttribute('data-language');
        setLanguage(language);
        localStorage.language = language;
        console.log(localStorage.language);
    });
});

// Initial language setting
document.addEventListener('DOMContentLoaded', function() {
    // Set default language to English
    const defaultLanguage = localStorage.language || 'en';
    setLanguage(defaultLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
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
    const latest_version = document.getElementById('latest_version');

    const toggleDebugButton = document.getElementById('toggleDebug');
    const debugDisplay = document.getElementById('debug');

    const redirectButton = document.getElementById('redirectButton');
    const errorMessage_redirect = document.getElementById('errorMessage_redirect');
    const targetURL = "https://www.hoyolab.com/";

    let ltuid_v2 = null;
    let ltoken_v2 = null;

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
                debugLog("Token and UID not detected. Please sign in to proceed.");

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
            latest_version.textContent = data.latest_version;

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

            if (current_version.textContent != latest_version.textContent) {
                debugLog("Version mismatch. Please update the extension.");

                showMessage(errorMessage_version);
            }

            // Enable notificationInput
            if (discordNameInput.value != '') {
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
            showMessage(errorMessage_login);
        } else if (current_version.textContent != latest_version.textContent) {
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