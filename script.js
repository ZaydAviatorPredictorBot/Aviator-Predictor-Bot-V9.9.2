document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startButton").addEventListener("click", () => {
        document.getElementById("startSection").style.display = "none";
        document.getElementById("selectionSection").style.display = "block";
    });
});

// Move to betting site selection
function goToBettingSiteSelection() {
    document.getElementById("selectionSection").style.display = "none";
    document.getElementById("bettingSiteSelection").style.display = "block";
}

// When a betting site is selected
function bettingSiteSelected(siteName) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").innerText = siteName;
}

// Submitting betting site ID moves to activation
function submitBettingSiteID() {
    const bettingSiteID = document.getElementById("bettingSiteIDInput").value.trim();
    if (bettingSiteID) {
        document.getElementById("bettingSiteIDSection").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    } else {
        alert("Please enter your Betting Site ID");
    }
}

// Activation Code Validation
function validateActivationCode() {
    const inputCode = document.getElementById("activationCodeInput").value.trim();
    const correctCode = "GLA642";

    if (inputCode === correctCode) {
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        alert("Invalid Activation Code. Please try again.");
    }
}

// Contact Support
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}

// Get Live Signal with Animation
function getLiveSignal() {
    const newWindow = window.open("", "_blank", "width=500,height=500");
    newWindow.document.write(`
        <style>
            body { text-align: center; font-family: Arial, sans-serif; padding: 20px; background: #333; color: white; }
            .aviator-animation { width: 100px; height: 100px; margin: 20px auto; animation: fly 2s infinite alternate; }
            @keyframes fly { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
            .notification { color: lightgreen; font-weight: bold; font-size: 18px; margin-top: 20px; }
            .details { color: white; font-size: 16px; text-align: left; margin-top: 15px; padding: 10px; border: 1px solid green; display: inline-block; }
        </style>
    `);

    newWindow.document.write(`<img class="aviator-animation" src="https://via.placeholder.com/100" alt="Aviator Jet">`);
    newWindow.document.write(`<p>Please wait as your bot analyzes the betting site patterns...</p>`);

    setTimeout(() => {
        newWindow.document.write(`
            <p class="notification">[SYSTEM NOTIFICATION]</p>
            <div class="details">
                <p>> Decryption Complete.</p>
                <p>Status: All algorithmic parameters successfully deciphered.</p>
                <p><b>Analysis Summary:</b></p>
                <ul>
                    <li>✅ RNG Protocols: Decrypted</li>
                    <li>✅ Provably Fair System: Bypassed</li>
                    <li>✅ Multiplier Patterns: Extracted</li>
                    <li>✅ Seed Manipulation Mechanism: Unlocked</li>
                    <li>✅ Casino Algorithm Adjustments: Identified</li>
                    <li>✅ Exploit Feasibility: Confirmed</li>
                </ul>
                <p><b>> Next Steps:</b></p>
                <ul>
                    <li>➡ Deploy predictive model for multiplier tracking</li>
                    <li>➡ Execute latency-based withdrawal exploit</li>
                    <li>➡ Monitor algorithmic shifts for anomaly detection</li>
                </ul>
                <p><b>> Warning:</b> System security countermeasures detected. Proceed with stealth mode enabled.</p>
            </div>
        `);

        // 1. Show "1.3X" button popup for 0.5 seconds
        setTimeout(() => {
            const popupWindow = window.open("", "_blank", "width=300,height=200");
            popupWindow.document.write(`
                <style>
                    body { display: flex; justify-content: center; align-items: center; height: 100vh; background: black; color: white; }
                    button { font-size: 24px; padding: 10px 20px; background: gold; border: none; cursor: pointer; }
                </style>
                <button>1.3X</button>
            `);
            setTimeout(() => {
                popupWindow.close();
                
                // 2. Show PowerShell error screen
                const errorWindow = window.open("", "_blank", "width=600,height=400");
                errorWindow.document.write(`
                    <style>
                        body { background: black; color: limegreen; font-family: Consolas, monospace; padding: 20px; }
                        .error-message { color: red; font-size: 18px; font-weight: bold; margin-top: 20px; }
                    </style>
                    <p>Microsoft Windows [Version 10.0.19044.1288]</p>
                    <p>(c) Microsoft Corporation. All rights reserved.</p>
                    <p><span style="color: cyan;">C:\\Users\\System\\</span> <span style="color: yellow;">server_scan.exe</span></p>
                    <p>Scanning server connection...</p>
                    <p class="error-message">⚠️ Server error 996: Server Package too weak for Indian Decipher</p>
                    <p class="error-message">⚠️ Contact support immediately for assistance.</p>
                    <p><b>Status:</b> Your bot is fully linked to your betting site.</p>
                `);

                setTimeout(() => {
                    errorWindow.close();

                    // 3. Full-screen animated error message
                    const warningWindow = window.open("", "_blank", "fullscreen=yes");
                    warningWindow.document.write(`
                        <style>
                            body { background: red; color: white; text-align: center; font-size: 24px; font-weight: bold; padding-top: 20%; }
                            .blinking { animation: blink 1s infinite; }
                            @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
                        </style>
                        <p class="blinking">⚠️ ERROR: ENTER NEW ACTIVATION CODE IMMEDIATELY ⚠️</p>
                        <p class="blinking">⚠️ SYSTEM COMPROMISED ⚠️</p>
                    `);
                }, 4000); // Error appears after PowerShell screen closes

            }, 500);
        }, 500);

    }, 3000);
}
