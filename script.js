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

    // Open fake Windows PowerShell screen in a new window
    let hackerWindow = window.open("", "_blank", "width=800,height=600");
    hackerWindow.document.write(`
        <style>
            body { background-color: black; color: lime; font-family: monospace; padding: 20px; }
            .cmd-line { animation: blinkText 0.8s infinite; }
            @keyframes blinkText { 50% { opacity: 0; } }
        </style>
        <h2>Windows PowerShell</h2>
        <p>C:\\Users\\Admin> Connecting to server...</p>
        <p>C:\\Users\\Admin> Deciphering betting signals...</p>
        <p class="cmd-line">Processing transaction... ██████</p>
    `);

    // Show URGENT WARNING after 5 seconds
    setTimeout(function () {
        let warningWindow = window.open("", "_blank", "width=1000,height=600");
        warningWindow.document.write(`
            <style>
                body { background-color: black; color: red; font-family: 'Arial', sans-serif; text-align: center; padding: 50px; }
                h1 { font-size: 50px; animation: pulse 1s infinite; }
                @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
            </style>
            <h1>🚨 URGENT: ENTER NEW CODE IMMEDIATELY! 🚨</h1>
        `);
    }, 5000);
}

// Contact Support
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}
