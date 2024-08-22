document.addEventListener("DOMContentLoaded", function() {
    const issueSelect = document.getElementById("issueSelect");
    const techniqueSelect = document.getElementById("techniqueSelect");
    const resultDiv = document.getElementById("result");

    // Function to fetch techniques based on the selected issue
    async function fetchTechniques(issue) {
        try {
            // Replace with your actual logic for fetching techniques
            const techniques = [
                "Cognitive Behavioral Therapy",
                "Mindfulness Meditation",
                "Progressive Muscle Relaxation"
            ];
            return techniques;
        } catch (error) {
            console.error('Error fetching techniques:', error);
            return []; // Return an empty array or handle the error according to your application's logic
        }
    }

    // Function to populate technique options based on selected issue
    async function populateTechniques(issue) {
        try {
            const techniques = await fetchTechniques(issue);
            techniqueSelect.innerHTML = ""; // Clear previous options
            techniques.forEach(function(technique) {
                const option = document.createElement("option");
                option.textContent = technique;
                option.value = technique; // Ensure value is set
                techniqueSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error populating techniques:', error);
            // Handle errors here, such as displaying an error message to the user
        }
    }

    // Populate technique options based on selected issue on page load
    populateTechniques(issueSelect.value);

    // Populate technique options based on selected issue when the issue changes
    issueSelect.addEventListener("change", function() {
        const selectedIssue = issueSelect.value;
        populateTechniques(selectedIssue);
    });

    // Form submission
    document.getElementById("techniquesForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission
        const selectedIssue = issueSelect.value;
        const selectedTechnique = techniqueSelect.value;

        if (!selectedIssue || !selectedTechnique) {
            console.error('Issue or technique is missing');
            resultDiv.textContent = 'Please select both an issue and a technique.';
            return;
        }

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ issue: selectedIssue, technique: selectedTechnique })
            });

            const data = await response.json();

            // Display the generated paragraph in the result area
            const paragraph = document.createElement("p");
            paragraph.textContent = data.paragraph || 'No scenario generated';
            resultDiv.innerHTML = ""; // Clear previous result
            resultDiv.appendChild(paragraph);
        } catch (error) {
            console.error('Error generating scenario:', error);
            resultDiv.textContent = 'Error generating scenario';
        }
    });
});
