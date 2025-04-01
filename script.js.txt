// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // Elements
    const startButton = document.getElementById("startButton");
    const continueButton = document.getElementById("continueButton");
    const selectionSection = document.getElementById("selectionSection");
    const welcomeSection = document.getElementById("welcomeSection");
    const bettingSiteSelection = document.getElementById("bettingSiteSelection");
    const bettingSiteIDSection = document.getElementById("bettingSiteIDSection");
    const activationCodeSection = document.getElementById("activationCodeSection");
    const getSignalSection = document.getElementById("getSignalSection");
    const selectedSiteName = document.getElementById("selectedSiteName");

    // Start Button Click
    startButton.addEventListener("click", function () {
        console.log("Start button clicked");
        startSection.style.display = "none";
        welcomeSection.style.display = "block";
    });

    // Continue Button Click
    continueButton.addEventListener("click", function () {
        console.log("Continue button clicked");
        welcomeSection.style.display = "none";
        selectionSection.style.display = "block";
    });

    // Proceed to Betting Site Selection
    window.goToBettingSiteSelection = function () {
        console.log("Proceeding to betting site selection...");
        selectionSection.style.display = "none";
        bettingSiteSelection.style.display = "block";
    };

    // Select a Betting Site
    window.bettingSiteSelected = function (site) {
        console.log("Betting site selected:", site);
        bettingSiteSelection.style.display = "none";
        bettingSiteIDSection.style.display = "block";
        selectedSiteName.textContent = site;
    };

    // Submit Betting Site ID
    window.submitBettingSiteID = function () {
        console.log("Betting site ID submitted");
        bettingSiteIDSection.style.display = "none";
        activationCodeSection.style.display = "block";
    };

    // Validate Activation Code
    window.validateActivationCode = function () {
        const activationCodeInput = document.getElementById("activationCodeInput").value;
        
        if (activationCodeInput.trim() === "12345") { // Example activation code
            console.log("Activation successful!");
            activationCodeSection.style.display = "none";
            getSignalSection.style.display = "block";
        } else {
            alert("Invalid Activation Code. Please try again.");
        }
    };

    // Get Live Signal (Placeholder Function)
    window.getLiveSignal = function () {
        console.log("Fetching live signal...");
        alert("Live signal received!");
    };

    // Contact Support
    window.contactSupport = function () {
        alert("Contact support at: support@example.com");
    };
});
