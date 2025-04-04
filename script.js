document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startButton").addEventListener("click", startProcess);
});

function startProcess() {
    document.getElementById("startSection").style.display = "none";
    document.getElementById("selectionSection").style.display = "block";
}

// Betting Site Selection
function bettingSiteSelected(siteName) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").textContent = siteName;
}

function submitBettingSiteID() {
    document.getElementById("bettingSiteIDSection").style.display = "none";
    document.getElementById("activationCodeSection").style.display = "block";
}

// Activation Code Validation
function validateActivationCode() {
    let code = document.getElementById("activationCodeInput").value.trim();
    if (code === "GRN250") {
        document.getElementById("activationCodeSection").style.display = "none";
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        showErrorScreen();
    }
}

// Show Error Screen
function showErrorScreen() {
    document.body.style.backgroundColor = "#000"; // Black background for hacker theme
    let errorScreen = document.getElementById("errorScreen");
    errorScreen.style.display = "block";
    errorScreen.classList.add("error-animation"); // Add animation

    setTimeout(showUrgentWarning, 5000); // Show urgent warning after 5 sec
}

// Show Urgent Warning After 5 Sec
function showUrgentWarning() {
    let warning = document.getElementById("newCodeError");
    warning.style.display = "block";
    warning.classList.add("warning-flash"); // Add red flashing effect
}

// Get Live Signal Button
function getLiveSignal() {
    let getSignalButton = document.getElementById("getSignalButton");
    getSignalButton.innerHTML = "Processing...";
    
    setTimeout(() => {
        getSignalButton.innerHTML = "GET SIGNAL";
        openPowerShellScreen();
    }, 3000);
}

// Fake PowerShell Screen (New Window)
function openPowerShellScreen() {
    let powerShellWindow = window.open("", "", "width=500,height=300");
    powerShellWindow.document.body.style.backgroundColor = "#000";
    powerShellWindow.document.body.style.color = "#0f0"; // Green text for hacker effect
    powerShellWindow.document.body.style.fontFamily = "Courier New";
    powerShellWindow.document.body.innerHTML = `
        <pre>
        Microsoft Windows [Version 10.0.22000.795]
        (c) Microsoft Corporation. All rights reserved.

        C:\Users\Public> _Analyzing_Device_ID...
        C:\Users\Public> _VPN/Proxy_Detected!
        C:\Users\Public> _Transaction_ID_Error: 675
        C:\Users\Public> _Initiating_Emergency_Security_Protocol...
        </pre>
    `;

    setTimeout(showUrgentWarning, 5000); // Show urgent warning after 5 sec
}

// Contact Support Function
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}
