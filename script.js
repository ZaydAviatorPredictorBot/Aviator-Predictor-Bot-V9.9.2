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

// Get Live Signal with Animation and Error Screens
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
    }, 3000);

    // Show 1.3X Button for 0.5 Seconds
    setTimeout(() => {
        let button = document.createElement("button");
        button.innerText = "1.3X";
        button.style.position = "fixed";
        button.style.top = "50%";
        button.style.left = "50%";
        button.style.transform = "translate(-50%, -50%)";
        button.style.fontSize = "24px";
        button.style.padding = "20px";
        button.style.background = "green";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.zIndex = "9999";
        
        document.body.appendChild(button);

        setTimeout(() => {
            button.remove();

            // Display Fake PowerShell Hacker Screen
            let errorScreen = document.createElement("div");
            errorScreen.className = "error-screen";
            errorScreen.innerHTML = `
                <h2>⚠️ SERVER ERROR 996</h2>
                <p>Server Package too weak for Indian Decipher;</p>
                <p>Contact support immediately for assistance.</p>
                <p>Your bot is fully linked to your betting site.</p>
            `;
            document.body.appendChild(errorScreen);
            
            // After 3 seconds, show huge warning everywhere
            setTimeout(() => {
                let hugeWarning = document.createElement("div");
                hugeWarning.className = "huge-warning";
                hugeWarning.innerText = "⚠️ ENTER NEW CODE IMMEDIATELY! ⚠️";
                document.body.appendChild(hugeWarning);

                // Keep showing the error message repeatedly
                let warningInterval = setInterval(() => {
                    hugeWarning.style.display = (hugeWarning.style.display === "none") ? "flex" : "none";
                }, 800);
            }, 3000);
        }, 500);
    }, 6000);
}
