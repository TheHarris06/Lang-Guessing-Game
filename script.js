document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let submitButton = document.getElementById("submitGuess");
    let feedback = document.getElementById("feedback");

    submitButton.addEventListener("click", function () {
        let userGuess = document.getElementById("guess").value;

        if (userGuess == randomNumber) {
            feedback.textContent = "Congratulations! You guessed the right number!";
        } else if (userGuess < randomNumber) {
            feedback.textContent = "Too low! Try again.";
        } else {
            feedback.textContent = "Too high! Try again.";
        }
    });
});