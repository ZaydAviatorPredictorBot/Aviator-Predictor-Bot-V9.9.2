// Start Button Click Handler
document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("startSection").style.display = "none";
    document.getElementById("selectionSection").style.display = "flex";
});

// Navigate to Betting Site Selection
function goToBettingSiteSelection() {
    document.getElementById("selectionSection").style.display = "none";
    document.getElementById("bettingSiteSelection").style.display = "flex";
}

// Betting Site Selection Handler
function bettingSiteSelected(siteName) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "flex";
    document.getElementById("selectedSiteName").textContent = siteName;
}

// Submit Betting Site ID
function submitBettingSiteID() {
    document.getElementById("bettingSiteIDSection").style.display = "none";
    document.getElementById("activationCodeSection").style.display = "flex";
}

// Validate Activation Code
function validateActivationCode() {
    const enteredCode = document.getElementById("activationCodeInput").value.trim();
    if (enteredCode === "GRN250") {
        document.getElementById("getSignalButton").style.display = "block"; // Show GET SIGNAL Button
    } else {
        alert("❌ Invalid Activation Code! Please try again.");
    }
}

// Contact Support
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}

// Get Live Signal Handler
function getLiveSignal() {
    // Open new window for 1.3X Button
    let xButtonWindow = window.open("", "_blank", "width=400,height=200");
    xButtonWindow.document.write(`
        <html>
        <head>
            <title>1.3X Predictor</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    background: black;
                    color: lime;
                    text-align: center;
                    padding: 50px;
                }
                .x-btn {
                    font-size: 24px;
                    font-weight: bold;
                    padding: 15px 30px;
                    background: red;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <h2>🚀 1.3X Signal Ready!</h2>
            <button class="x-btn">1.3X</button>
        </body>
        </html>
    `);

    // Close 1.3X window after 10 seconds and open hacker screen
    setTimeout(() => {
        xButtonWindow.close();

        // Open new Fake PowerShell Hacker Screen
        let hackerWindow = window.open("", "_blank", "width=600,height=400");
        hackerWindow.document.write(`
            <html>
            <head>
                <title>PowerShell Terminal</title>
                <style>
                    body {
                        font-family: 'Courier New', monospace;
                        background: black;
                        color: limegreen;
                        padding: 20px;
                    }
                    .log {
                        font-size: 16px;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <h3>Windows PowerShell</h3>
                <p class="log">PS C:\\Users\\Admin> Initiating signal injection...</p>
                <p class="log">PS C:\\Users\\Admin> Connecting to Aviator AI Core...</p>
                <p class="log">PS C:\\Users\\Admin> Data linked successfully.</p>
                <p class="log">PS C:\\Users\\Admin> Authenticating...</p>
                <p class="log">PS C:\\Users\\Admin> Signal injected ✅</p>
                <p class="log">PS C:\\Users\\Admin> Exit</p>
            </body>
            </html>
        `);
    }, 10000);
}
