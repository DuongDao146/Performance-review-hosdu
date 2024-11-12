document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step-image");
    const progressContainer = document.querySelector(".progress-container");

    // Define custom positions for the pulsing circle on each step, now using percentages
    const circlePositions = [
        { top: "11%", left: "83%" },  // Position for Step 1
        { top: "18%", left: "83%" },  // Position for Step 2
        { top: "26%", left: "87%" },  // Position for Step 3
        { top: "88%", left: "35%" },  // Position for Step 4
        { top: "38%", left: "18%" },  // Position for Step 5
        { top: "27.3%", left: "37%" },  // Position for Step 6
        { top: "47%", left: "16%" },  // Position for Step 7
        { top: "27.3%", left: "47%" },  // Position for Step 8
        { top: "27.3%", left: "65%" },  // Position for Step 9
        { top: "43%", left: "85%" },  // Position for Step 10
        { top: "75.5%", left: "43%" },  // Position for Step 11
        { top: "75.5%", left: "43%" },  // Position for Step 12
        { top: "60%", left: "94.5%" },  // Position for Step 13
        { top: "27.3%", left: "85%" },  // Position for Step 14
        { top: "47%", left: "90%" },  // Position for Step 15
        { top: "49.5%", left: "39%" },  // Position for Step 16
        { top: "43%", left: "85%" },  // Position for Step 17
        { top: "38.5%", left: "39%" },  // Position for Step 18
        { top: "59.5%", left: "60.5%" },  // Position for Step 19
        { top: "90%", left: "63%" },  // Position for Step 20
        { top: "59.5%", left: "93%" },  // Position for Step 21
        { top: "18%", left: "38.5%" },  // Position for Step 22
        { top: "32%", left: "34%" },  // Position for Step 23
        { top: "45%", left: "58%" },  // Position for Step 24
        { top: "45%", left: "58%" },  // Position for Step 25
        { top: "65.5%", left: "39%" },  // Position for Step 26
        { top: "60%", left: "77%" },  // Position for Step 27
        { top: "31.5%", left: "93%" },  // Position for Step 28
        { top: "38.5%", left: "83%" },  // Position for Step 29
        { top: "30%", left: "77%" },  // Position for Step 30
        { top: "40%", left: "77%" },  // Position for Step 31
        { top: "46%", left: "77%" },  // Position for Step 32
        { top: "55%", left: "77%" },  // Position for Step 33
        { top: "71%", left: "77%" },  // Position for Step 34
        { top: "93.5%", left: "25%" },  // Position for Step 35
        { top: "38%", left: "35%" },  // Position for Step 36
        // Add more positions for additional steps here
    ];

    let currentStep = 0;

    // Dynamically generate step indicators
    steps.forEach((step, index) => {
        const stepIndicator = document.createElement("div");
        stepIndicator.classList.add("step-indicator");
        stepIndicator.addEventListener("click", () => goToStep(index));
        progressContainer.appendChild(stepIndicator);
    });

    // Create pulsing circle once
    const pulsingCircle = document.createElement("div");
    pulsingCircle.classList.add("pulsing-circle");
    document.querySelector(".image-container").appendChild(pulsingCircle);

    // Add event listener to go to the next step when clicking the pulsing circle
    pulsingCircle.addEventListener("click", () => {
        if (currentStep + 1 < steps.length) {
            goToStep(currentStep + 1);
        }
    });

    // Show the initial step with the pulsing circle
    showStep(currentStep);

    function showStep(stepIndex) {
        // Display the appropriate step image
        steps.forEach((img, index) => {
            img.style.display = index === stepIndex ? "block" : "none";
        });

        // Update step indicators to show progress
        const stepIndicators = document.querySelectorAll(".step-indicator");
        stepIndicators.forEach((indicator, index) => {
            if (index <= stepIndex) {
                indicator.classList.add("filled");
            } else {
                indicator.classList.remove("filled");
            }
        });

        // Position the pulsing circle using percentage values for responsive behavior
        pulsingCircle.style.top = circlePositions[stepIndex].top;
        pulsingCircle.style.left = circlePositions[stepIndex].left;
    }

    // Function to navigate to a specific step
    function goToStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < steps.length) {
            currentStep = stepIndex;
            showStep(currentStep);
        }
    }

    // Event listener for arrow key navigation
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            // Go to the next step if the right arrow is pressed
            if (currentStep + 1 < steps.length) {
                goToStep(currentStep + 1);
            }
        } else if (event.key === "ArrowLeft") {
            // Go to the previous step if the left arrow is pressed
            if (currentStep - 1 >= 0) {
                goToStep(currentStep - 1);
            }
        }
    });
});
