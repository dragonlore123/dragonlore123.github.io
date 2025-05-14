let scoreD = 0;
let scoreI = 0;
let scoreS = 0;
let scoreC = 0;
let scoreDLeast = 0;
let scoreILeast = 0;
let scoreSLeast = 0;
let scoreCLeast = 0;

let currentQuestionIndex = 0;
const userAnswers = []; // To store "most" and "least" choices for each question

const questions = [
    {
        options: ["Enthusiastic", "Daring", "Diplomatic", "Satisfied"]
    },
    {
        options: ["Cautious", "Determined", "Convincing", "Good-natured"]
    },
    {
        options: ["Friendly", "Accurate", "Outspoken", "Calm"]
    },
    {
        options: ["Talkative", "Controlled", "Conventional", "Decisive"]
    },
    {
        options: ["Adventurous", "Insightful", "Outgoing", "Moderate"]
    },
    {
        options: ["Gentle", "Persuasive", "Humble", "Original"]
    },
    {
        options: ["Expressive", "Conscientious", "Dominant", "Responsive"]
    },
    {
        options: ["Poised", "Observant", "Modest", "Impatient"]
    },
    {
        options: ["Tactful", "Agreeable", "Magnetic", "Insistent"]
    },
    {
        options: ["Brave", "Inspiring", "Submissive", "Timid"]
    },
    {
        options: ["Reserved", "Obliging", "Strong-willed", "Cheerful"]
    },
    {
        options: ["Stimulating", "Kind", "Perceptive", "Independent"]
    },
    {
        options: ["Competitive", "Considerate", "Joyful", "Private"]
    },
    {
        options: ["Fussy", "Obedient", "Firm", "Playful"]
    },
    {
        options: ["Attractive", "Introspection", "Stubborn", "Predictable"]
    },
    {
        options: ["Logical", "Bold", "Loyal", "Charming"]
    },
    {
        options: ["Sociable", "Patient", "Self-Reliant", "Soft-spoken"]
    },
    {
        options: ["Willing", "Eager", "Thorough", "High-spirited"]
    },
    {
        options: ["Aggressive", "Extroverted", "Amiable", "Fearful"]
    },
    {
        options: ["Confident", "Sympathetic", "Impartial", "Assertive"]
    },
    {
        options: ["Well-Disciplined", "Generous", "Animated", "Persistent"]
    },
    {
        options: ["Impulsive", "Introverted", "Forceful", "Easy-going"]
    },
    {
        options: ["Good-Mixer", "Refined", "Vigorous", "Lenient"]
    },
    {
        options: ["Captivating", "Contented", "Demanding", "Compliant"]
    },
    {
        options: ["Argumentative", "Systematic", "Cooperative", "Light-hearted"]
    },
    {
        options: ["Jovial", "Precise", "Direct", "Even-tempered"]
    },
    {
        options: ["Restless", "Neighborly", "Appealing", "Careful"]
    },
    {
        options: ["Respectful", "Pioneering", "Optimistic", "Helpful"]
    },
];

// Map each word to its corresponding score variable
const wordToScore = {
    Enthusiastic: "scoreI",
    Daring: "scoreD",
    Diplomatic: "scoreC",
    Satisfied: "scoreS",
    Cautious: "scoreC",
    Determined: "scoreD",
    Convincing: "scoreI",
    "Good-natured": "scoreS",
    Friendly: "scoreI",
    Accurate: "scoreC",
    Outspoken: "scoreD",
    Calm: "scoreS",
    Talkative: "scoreI",
    Controlled: "scoreC",
    Conventional: "scoreS",
    Decisive: "scoreD",
    Adventurous: "scoreD",
    Insightful: "scoreC",
    Outgoing: "scoreI",
    Moderate: "scoreS",
    Gentle: "scoreS",
    Persuasive: "scoreI",
    Humble: "scoreC",
    Original: "scoreD",
    Expressive: "scoreI",
    Conscientious: "scoreC",
    Dominant: "scoreD",
    Responsive: "scoreS",
    Poised: "scoreI",
    Observant: "scoreC",
    Modest: "scoreS",
    Impatient: "scoreD",
    Tactful: "scoreC",
    Agreeable: "scoreS",
    Magnetic: "scoreI",
    Insistent: "scoreD",
    Brave: "scoreD",
    Inspiring: "scoreI",
    Submissive: "scoreS",
    Timid: "scoreC",
    Reserved: "scoreC",
    Obliging: "scoreS",
    "Strong-willed": "scoreD",
    Cheerful: "scoreI",
    Stimulating: "scoreI",
    Kind: "scoreS",
    Perceptive: "scoreC",
    Independent: "scoreD",
    Competitive: "scoreD",
    Considerate: "scoreS",
    Joyful: "scoreI",
    Private: "scoreC",
    Fussy: "scoreC",
    Obedient: "scoreS",
    Firm: "scoreD",
    Playful: "scoreI",
    Attractive: "scoreI",
    Introspection: "scoreC",
    Stubborn: "scoreD",
    Predictable: "scoreS",
    Logical: "scoreC",
    Bold: "scoreD",
    Loyal: "scoreS",
    Charming: "scoreI",
    Sociable: "scoreI",
    Patient: "scoreS",
    "Self-Reliant": "scoreD",
    "Soft-spoken": "scoreC",
    Willing: "scoreS",
    Eager: "scoreI",
    Thorough: "scoreC",
    "High-spirited": "scoreD",
    Aggressive: "scoreD",
    Extroverted: "scoreI",
    Amiable: "scoreS",
    Fearful: "scoreC",
    Confident: "scoreI",
    Sympathetic: "scoreS",
    Impartial: "scoreC",
    Assertive: "scoreD",
    "Well-Disciplined": "scoreC",
    Generous: "scoreS",
    Animated: "scoreI",
    Persistent: "scoreD",
    Impulsive: "scoreI",
    Introverted: "scoreC",
    Forceful: "scoreD",
    "Easy-going": "scoreS",
    "Good-Mixer": "scoreI",
    Refined: "scoreC",
    Vigorous: "scoreD",
    Lenient: "scoreS",
    Captivating: "scoreI",
    Contented: "scoreS",
    Demanding: "scoreD",
    Compliant: "scoreC",
    Argumentative: "scoreD",
    Systematic: "scoreC",
    Cooperative: "scoreS",
    "Light-hearted": "scoreI",
    Jovial: "scoreI",
    Precise: "scoreC",
    Direct: "scoreD",
    "Even-tempered": "scoreS",
    Restless: "scoreD",
    Neighborly: "scoreS",
    Appealing: "scoreI",
    Careful: "scoreC",
    Respectful: "scoreC",
    Pioneering: "scoreD",
    Optimistic: "scoreI",
    Helpful: "scoreS",
};
// Check if all words in questions are mapped to a score 
questions.forEach((question, index) => {
    question.options.forEach((word) => {
        if (!wordToScore[word]) {
            console.error(`Word "${word}" in question ${index + 1} is not mapped to a score.`);
        }
    });
});

// Initialize arrays to store scores for each style
var rolliKaitumine = [
    {Dominance: 0},
    {Influence: 0},
    {Steadiness: 0},
    {Conscientiousness: 0},
];
var isiklikStiil = [
    {Dominance: 0},
    {Influence: 0},
    {Steadiness: 0},
    {Conscientiousness: 0},
];
var kaitumisStiil = [
    {Dominance: 0},
    {Influence: 0},
    {Steadiness: 0},
    {Conscientiousness: 0},
];

var testResults = {
    rolliKaitumine: [
        { Dominance: 0 },
        { Influence: 0 },
        { Steadiness: 0 },
        { Conscientiousness: 0 },
    ],
    isiklikStiil: [
        { Dominance: 0 },
        { Influence: 0 },
        { Steadiness: 0 },
        { Conscientiousness: 0 },
    ],
    kaitumisStiil: [
        { Dominance: 0 },
        { Influence: 0 },
        { Steadiness: 0 },
        { Conscientiousness: 0 },
    ],
};

function calculateScore(scoreD, scoreI, scoreS, scoreC, scoreDLeast, scoreILeast, scoreSLeast, scoreCLeast) {
    // Update rolliKaitumine
    testResults.rolliKaitumine[0].Dominance = scoreD;
    testResults.rolliKaitumine[1].Influence = scoreI;
    testResults.rolliKaitumine[2].Steadiness = scoreS;
    testResults.rolliKaitumine[3].Conscientiousness = scoreC;

    // Update isiklikStiil
    testResults.isiklikStiil[0].Dominance = scoreDLeast;
    testResults.isiklikStiil[1].Influence = scoreILeast;
    testResults.isiklikStiil[2].Steadiness = scoreSLeast;
    testResults.isiklikStiil[3].Conscientiousness = scoreCLeast;

    // Update kaitumisStiil
    testResults.kaitumisStiil[0].Dominance = scoreD - scoreDLeast;
    testResults.kaitumisStiil[1].Influence = scoreI - scoreILeast;
    testResults.kaitumisStiil[2].Steadiness = scoreS - scoreSLeast;
    testResults.kaitumisStiil[3].Conscientiousness = scoreC - scoreCLeast;
};
/*
// Function to update scores
function updateScore(word, type) {
    const scoreVariable = wordToScore[word];
    if (scoreVariable) {
        if (type === "most") {
            if (typeof window[scoreVariable] === "number") {
                window[scoreVariable]++;
                console.log(`Incremented ${scoreVariable}:`, window[scoreVariable]);
            } else {
                console.error(`Score variable "${scoreVariable}" is not initialized.`);
            }
        } else if (type === "least") {
            const leastVariable = `${scoreVariable}Least`;
            if (typeof window[leastVariable] === "number") {
                window[leastVariable]++;
                console.log(`Incremented ${leastVariable}:`, window[leastVariable]);
            } else {
                console.error(`Score variable "${leastVariable}" is not initialized.`);
            }
        }
    } else {
        console.error(`Word "${word}" not found in wordToScore mapping.`);
    }
}
*/
// Function to update scores
function updateScore(word, type) {
    const scoreVariable = wordToScore[word];
    if (scoreVariable) {
        if (type === "most") {
            // Increment the corresponding "Most" score
            if (scoreVariable === "scoreD") scoreD++;
            if (scoreVariable === "scoreI") scoreI++;
            if (scoreVariable === "scoreS") scoreS++;
            if (scoreVariable === "scoreC") scoreC++;
            console.log(`Incremented ${scoreVariable}:`, eval(scoreVariable));
        } else if (type === "least") {
            // Increment the corresponding "Least" score
            if (scoreVariable === "scoreD") scoreDLeast++;
            if (scoreVariable === "scoreI") scoreILeast++;
            if (scoreVariable === "scoreS") scoreSLeast++;
            if (scoreVariable === "scoreC") scoreCLeast++;
            console.log(`Incremented ${scoreVariable}Least:`, eval(`${scoreVariable}Least`));
        }
    } else {
        console.error(`Word "${word}" not found in wordToScore mapping.`);
    }
}

function nextQuestion() {
    const mostSelected = document.querySelector('input[name="most"]:checked');
    const leastSelected = document.querySelector('input[name="least"]:checked');

    // Ensure both "most" and "least" are selected before proceeding
    if (!mostSelected || !leastSelected) {
        alert("Please select both 'most' and 'least' options before proceeding.");
        return;
    }

    // Update scores based on user selections
    const mostWord = questions[currentQuestionIndex].options[mostSelected.value];
    const leastWord = questions[currentQuestionIndex].options[leastSelected.value];
    updateScore(mostWord, "most");
    updateScore(leastWord, "least");

    // Save the answers
    userAnswers[currentQuestionIndex] = {
        most: mostWord,
        least: leastWord,
    };

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishTest();
    }
}



// Initialize variables to track counts for each row

function loadQuestion() {
    const answerForm = document.getElementById("answer-form");
    const nextButton = document.getElementById("next-button");

    // Clear previous options
    answerForm.innerHTML = "";

    // Load current question
    const currentQuestion = questions[currentQuestionIndex];

    // Add "Most" and "Least" labels above the radio buttons
    const labelsRow = document.createElement("div");
    labelsRow.classList.add("labels-row");

    const mostLabel = document.createElement("span");
    mostLabel.textContent = "Most";
    mostLabel.classList.add("label");

    const leastLabel = document.createElement("span");
    leastLabel.textContent = "Least";
    leastLabel.classList.add("label");

    labelsRow.appendChild(mostLabel);
    labelsRow.appendChild(leastLabel);
    answerForm.appendChild(labelsRow);

    // Add options with radio buttons
    currentQuestion.options.forEach((option, index) => {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("option-container");

        // "Most" radio button
        const mostRadio = document.createElement("input");
        mostRadio.type = "radio";
        mostRadio.name = "most";
        mostRadio.value = index;
        mostRadio.id = `most-${index}`;

        // "Least" radio button
        const leastRadio = document.createElement("input");
        leastRadio.type = "radio";
        leastRadio.name = "least";
        leastRadio.value = index;
        leastRadio.id = `least-${index}`;

        // Add event listeners to ensure "Most" and "Least" cannot be the same
        mostRadio.addEventListener("change", () => {
            if (mostRadio.checked) {
                leastRadio.disabled = true; // Disable the corresponding "Least" radio button
            }
            // Enable all other "Least" radio buttons
            document.querySelectorAll('input[name="least"]').forEach((radio) => {
                if (radio !== leastRadio) {
                    radio.disabled = false;
                }
            });
        });

        leastRadio.addEventListener("change", () => {
            if (leastRadio.checked) {
                mostRadio.disabled = true; // Disable the corresponding "Most" radio button
            }
            // Enable all other "Most" radio buttons
            document.querySelectorAll('input[name="most"]').forEach((radio) => {
                if (radio !== mostRadio) {
                    radio.disabled = false;
                }
            });
        });

        // Option text
        const optionText = document.createElement("label");
        optionText.textContent = option;
        optionText.htmlFor = `most-${index}`; // Associate with "Most" radio button

        // Append elements to the option container
        optionContainer.appendChild(mostRadio);
        optionContainer.appendChild(optionText);
        optionContainer.appendChild(leastRadio);

        // Add the option container to the form
        answerForm.appendChild(optionContainer);
    });

    // Update the "Next" button text to "Finish" if it's the last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next";
    }
}


function finishTest() {
    localStorage.setItem("discTestAnswers", JSON.stringify(userAnswers));

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "<h2>Test Finished!</h2>";
    calculateScore(scoreD, scoreI, scoreS, scoreC, scoreDLeast, scoreILeast, scoreSLeast, scoreCLeast);
    console.log("Test Results:", JSON.stringify(testResults, null, 2));
    // Display results

    setTimeout(() => {
        window.location.href = "results.html";
    }, 5000);
    
    // Save results to localStorage
    localStorage.setItem('testResults', JSON.stringify(testResults));
}

// Load the first question on page load
loadQuestion();