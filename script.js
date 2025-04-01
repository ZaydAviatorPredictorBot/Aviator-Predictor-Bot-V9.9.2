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
