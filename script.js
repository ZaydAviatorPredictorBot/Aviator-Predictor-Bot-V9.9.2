// Function to show the Language and Country Selection screen
function startApp() {
    document.getElementById("startSection").style.display = "none"; // Hide the start section
    document.getElementById("selectionSection").style.display = "block"; // Show the language and country selection section
}

// Function to move from the Language and Country Selection to the Betting Site Selection
function goToBettingSiteSelection() {
    const language = document.getElementById("languageSelect").value;
    const country = document.getElementById("countrySelect").value;

    if (!language || !country) {
        alert("Please select both language and country.");
        return;
    }

    document.getElementById("selectionSection").style.display = "none"; // Hide language and country selection
    document.getElementById("bettingSiteSelection").style.display = "block"; // Show the betting site selection section
}

// Function to show the Activation Code section after the user enters their Betting Site ID
function submitBettingSiteID() {
    const bettingSiteID = document.getElementById("bettingSiteIDInput").value.trim();
    
    if (bettingSiteID) {
        document.getElementById("bettingSiteSelection").style.display = "none"; // Hide betting site selection
        document.getElementById("activationCodeSection").style.display = "block"; // Show the activation code section
    } else {
        alert("Please enter your Betting Site ID.");
    }
}

// Function to validate activation code
function validateActivationCode() {
    const inputCode = document.getElementById("activationCodeInput").value.trim();
    const correctCode = "GRN250";

    if (inputCode === correctCode) {
        // Show the "GET SIGNAL" button if the code is correct
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        // Alert the user if the code is incorrect
        alert("Invalid Activation Code. Please try again.");
    }
}

// Function to open the support link
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}

// Function to display the live signal and simulate animation/error messages
function getLiveSignal() {
    // Open a new window for the animation and error messages
    const newWindow = window.open("", "_blank", "width=500,height=500");

    // Add styles for animation
    newWindow.document.write(`
        <style>
            body { text-align: center; font-family: Arial, sans-serif; padding: 20px; }
            .aviator-animation { width: 100px; height: 100px; margin: 20px auto; animation: fly 2s infinite alternate; }
            @keyframes fly { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
            .error { color: red; font-weight: bold; font-size: 18px; margin-top: 20px; }
            .warning { color: orange; font-size: 16px; }
        </style>
    `);

    // Add animated jet graphic
    newWindow.document.write(`<img class="aviator-animation" src="https://via.placeholder.com/100" alt="Aviator Jet">`);
    newWindow.document.write(`<p>Please wait as your bot is analyzing your betting site plane patterns to decipher the next plane crash digit...</p>`);

    // Display error messages after 3 seconds
    setTimeout(() => {
        newWindow.document.write(`<p class="error">⚠️ Server error 675, transaction ID mismatch with device IP address configuration.</p>`);
        newWindow.document.write(`<p class="warning">⚠️ Use your local device to do all your transactions.</p>`);
        newWindow.document.write(`<p class="warning">⚠️ VPN/Proxy detected.</p>`);
        newWindow.document.write(`<p class="warning">⚠️ Upgrade your package/contact admin.</p>`);
    }, 3000);
}
