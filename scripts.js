document.addEventListener("DOMContentLoaded", function() {
    const issueSelect = document.getElementById("issueSelect");
    const techniqueSelect = document.getElementById("techniqueSelect");
    const resultDiv = document.getElementById("result");

    // Techniques data with explanations
    const techniques = {
        anxiety: {
            "Deep Breathing": "MHP explained deep breathing exercises to help reduce anxiety symptoms by promoting relaxation and reducing stress levels.",
            "Progressive Muscle Relaxation": "MHP demonstrated progressive muscle relaxation techniques to help alleviate muscle tension and promote overall relaxation, which can reduce anxiety.",
            "Mindfulness Meditation": "MHP introduced mindfulness meditation as a technique to increase present-moment awareness and reduce anxious thoughts and feelings.",
            "Exposure Therapy": "MHP utilized exposure therapy techniques to gradually expose the client to anxiety-provoking situations, helping them learn to cope with and overcome their fears.",
            "Grounding Techniques": "MHP taught grounding techniques such as focusing on the senses or repeating calming phrases to help the client stay present and reduce feelings of dissociation during anxiety attacks.",
            // Add more anxiety techniques here
        },
        depression: {
            "Cognitive Behavioral Therapy": "MHP discussed cognitive-behavioral therapy (CBT) techniques to challenge negative thought patterns and behaviors commonly associated with depression, aiming to improve mood and functioning.",
            "Interpersonal Therapy": "MHP explored interpersonal therapy (IPT) strategies to address relationship issues and improve communication skills, which can alleviate depressive symptoms by enhancing social support.",
            "Behavioral Activation": "MHP introduced behavioral activation techniques to encourage engagement in meaningful activities and social interactions, aiming to counteract feelings of lethargy and withdrawal often experienced with depression.",
            "Problem-Solving Therapy": "MHP worked with the client to identify and address specific problems contributing to their depression, helping them develop effective problem-solving skills and regain a sense of control.",
            "Expressive Arts Therapy": "MHP utilized expressive arts therapy techniques such as drawing, painting, or writing to help the client explore and express their emotions in a safe and creative way, promoting emotional healing and self-discovery.",
            // Add more depression techniques here
        },
        stress: {
            "Stress Diary": "MHP recommended keeping a stress diary to track stress triggers and patterns, helping to identify effective coping strategies.",
            "Relaxation Techniques": "MHP taught relaxation techniques such as deep breathing and progressive muscle relaxation to reduce stress levels and promote relaxation.",
            "Time Management Skills": "MHP worked with the client to develop time management skills, such as prioritizing tasks and setting realistic goals, to reduce feelings of overwhelm and increase productivity.",
            "Physical Activity": "MHP encouraged regular physical activity as a stress management technique, as exercise has been shown to reduce stress hormones and improve mood.",
            "Social Support": "MHP emphasized the importance of social support networks and encouraged the client to seek support from friends, family, or support groups during times of stress.",
            // Add more stress techniques here
        },
        // Add more techniques for each issue as needed
    };

    // Function to populate technique options based on selected issue
    function populateTechniques(issue) {
        techniqueSelect.innerHTML = ""; // Clear previous options

        Object.keys(techniques[issue]).forEach(function(technique) {
            const option = document.createElement("option");
            option.textContent = technique;
            techniqueSelect.appendChild(option);
        });
    }

    // Populate technique options based on selected issue on page load
    populateTechniques(issueSelect.value);

    // Populate technique options based on selected issue when issue changes
    issueSelect.addEventListener("change", function() {
        const selectedIssue = issueSelect.value;
        populateTechniques(selectedIssue);
    });

    // Form submission
    document.getElementById("techniquesForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const selectedIssue = issueSelect.value;
        const selectedTechnique = techniqueSelect.value;
        const techniqueExplanation = techniques[selectedIssue][selectedTechnique];
        const paragraph = document.createElement("p");
        paragraph.textContent = `MHP went to client's house and worked on ${selectedIssue}, focusing on these ${selectedTechnique} techniques. ${techniqueExplanation}`;
        resultDiv.innerHTML = ""; // Clear previous result
        resultDiv.appendChild(paragraph);
    });
});
