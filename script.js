document.addEventListener("DOMContentLoaded", function () {
    // Start Button
    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("startSection").style.display = "none";
        document.getElementById("selectionSection").style.display = "block";
    });
});

// Proceed to Betting Site Selection
function goToBettingSiteSelection() {
    let language = document.getElementById("languageSelect").value;
    let country = document.getElementById("countrySelect").value;

    if (language && country) {
        document.getElementById("selectionSection").style.display = "none";
        document.getElementById("bettingSiteSelection").style.display = "block";
    } else {
        alert("Please select both language and country.");
    }
}

// Betting Site Selection
function bettingSiteSelected(site) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").innerText = site;
}

// Submit Betting Site ID
function submitBettingSiteID() {
    let bettingID = document.getElementById("bettingSiteIDInput").value;

    if (bettingID) {
        document.getElementById("bettingSiteIDSection").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    } else {
        alert("Please enter your Betting Site ID.");
    }
}

// Validate Activation Code
function validateActivationCode() {
    let activationCode = document.getElementById("activationCodeInput").value;

    if (activationCode === "GRN250") {
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        alert("Invalid Activation Code. Try again.");
    }
}

// GET SIGNAL Button Click
function getLiveSignal() {
    document.getElementById("activationCodeSection").style.display = "none";

    // Open new window for 2.4X Button
    let xButtonWindow = window.open("", "_blank", "width=400,height=200");
    xButtonWindow.document.write(`
        <html>
        <head>
            <title>2.4X Predictor</title>
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
            <h2>🚀 2.4X Signal Ready!</h2>
            <button class="x-btn">1.3X</button>
        </body>
        </html>
    `);

    // Close 2.4X window after 10 seconds and open hacker screen
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

        // Show URGENT UPGRADE WARNING after 5 seconds
        setTimeout(() => {
            let warningWindow = window.open("", "_blank", "width=1000,height=600");
            warningWindow.document.write(`
                <html>
                <head>
                    <title>🚨 UPGRADE REQUIRED 🚨</title>
                    <style>
                        body { 
                            background-color: black; 
                            color: red; 
                            font-family: 'Arial', sans-serif; 
                            text-align: center; 
                            padding: 50px; 
                        }
                        h1 { 
                            font-size: 50px; 
                            animation: pulse 1s infinite; 
                        }
                        p {
                            font-size: 24px;
                            margin-top: 20px;
                        }
                        .contact-btn {
                            background: red;
                            color: white;
                            padding: 15px 30px;
                            font-size: 22px;
                            font-weight: bold;
                            border: none;
                            cursor: pointer;
                            border-radius: 10px;
                            margin-top: 20px;
                        }
                        @keyframes pulse { 
                            0% { transform: scale(1); } 
                            50% { transform: scale(1.1); } 
                            100% { transform: scale(1); } 
                        }
                    </style>
                </head>
                <body>
                    <h1>🚨 URGENT: IMMEDIATE UPGRADE REQUIRED! 🚨</h1>
                    <p>Your system cannot process signals with the current package.</p>
                    <p>Contact support now to upgrade and continue using the software.</p>
                    <button class="contact-btn" onclick="window.open('https://t.me/zayd0011', '_blank')">🔧 Contact Support</button>
                </body>
                </html>
            `);
        }, 5000);
    }, 10000);
}

// Contact Support
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}
