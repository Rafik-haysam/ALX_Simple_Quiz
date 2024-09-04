// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If the answer is correct
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // If the answer is incorrect
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
