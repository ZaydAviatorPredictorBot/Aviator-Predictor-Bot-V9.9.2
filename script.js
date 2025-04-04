document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startButton").addEventListener("click", startBot);
});

function startBot() {
    document.getElementById("startSection").style.display = "none";
    document.getElementById("selectionSection").style.display = "block";
}

function goToBettingSiteSelection() {
    document.getElementById("selectionSection").style.display = "none";
    document.getElementById("bettingSiteSelection").style.display = "block";
}

function bettingSiteSelected(site) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").innerText = site;
}

function submitBettingSiteID() {
    document.getElementById("bettingSiteIDSection").style.display = "none";
    document.getElementById("activationCodeSection").style.display = "block";
}

function validateActivationCode() {
    let code = document.getElementById("activationCodeInput").value;
    if (code === "GRN250") {
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        alert("Invalid Activation Code!");
    }
}

function getLiveSignal() {
    document.getElementById("activationCodeSection").style.display = "none";

    // Fake Windows PowerShell screen
    let powershellWindow = window.open("", "", "width=600,height=400");
    powershellWindow.document.write(`
        <html>
        <head><title>Windows PowerShell</title></head>
        <body style="background:black; color:lime; font-family:monospace; padding:20px;">
            <h3>Microsoft Windows [Version 10.0.19044.2006]</h3>
            <p>C:\\Users\\Admin> Connecting to server...</p>
            <p>C:\\Users\\Admin> Decoding Signal Data...</p>
            <p>C:\\Users\\Admin> Fetching Transaction ID...</p>
            <p style="color:red;">ERROR: VPN/Proxy detected</p>
            <p>C:\\Users\\Admin> Please wait...</p>
        </body>
        </html>
    `);

    // After 5 seconds, show the urgent warning in a new window
    setTimeout(function () {
        let warningWindow = window.open("", "", "width=600,height=400");
        warningWindow.document.write(`
            <html>
            <head><title>URGENT WARNING</title></head>
            <body style="background:black; color:red; text-align:center; font-family:Arial, sans-serif; padding:20px;">
                <h1>🚨 URGENT: ENTER NEW CODE IMMEDIATELY! 🚨</h1>
                <p>System detected an issue. Re-enter activation code.</p>
            </body>
            </html>
        `);
    }, 5000); // 5 seconds delay for warning window
}
