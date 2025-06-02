document.addEventListener("DOMContentLoaded", function () {
    let book = Math.random() < 0.5 ? "The Great Gatsby" : "The Crucible"; // Randomly choose a book to be asked in the first question
    let gatz = 0; // Initialize gatz variable, 0 means no book selected yet, 1 means "The Great Gatsby", 2 means "The Crucible"
    
    let firstQuestion = "Is your character from the " + book; // First question, narrows down the book selection

    // **Global Variables**
    let characters = []; // Characters list
    let questions = []; // Questions list
    /*
    0
    0
    0
    0
    0
    0
    0
    This is what bryson needs to do
    add more questions and maybe characters( dont need to)
    make sure you change how many questions are going to be aksed
    also theres a bug where it repeats questions
    Im pretty sure its cuz i didnt make the random question function not have repeats, fix that

    */
    function updateGameVariables() { // this is where we define the characters and questions based on the book selected
        // so the way it works is I gave each name a certain points and the computer will add points based on the user input
        if (gatz === 1) { 
            characters = [
                { name: "Jay Gatsby", points: 0 },
                { name: "Nick Carraway", points: 0 },
                { name: "Daisy Buchanan", points: 0 },
                { name: "Tom Buchanan", points: 0 },
                { name: "Jordan Baker", points: 0 },
                { name: "Myrtle Wilson", points: 0 },
                { name: "George Wilson", points: 0 },
                { name: "Meyer Wolfsheim", points: 0 },
                { name: "Owl Eyes", points: 0 },
                { name: "Henry Gatz", points: 0 },
                { name: "Dan Cody", points: 0 }
            ];
            // try to think of like 25 questions pls
            questions = [
                { text: "Is the character wealthy?", yes: ["Jay Gatsby", "Jordan Baker", "Tom Buchanan", "Meyer Wolfsheim", "Dan Cody"] },
                { text: "Is the character a narrator?", yes: ["Nick Carraway", "Nick Carraway", "Nick Carraway"] },
                { text: "Is the character live in East Egg?", yes: ["Tom Buchanan", "Daisy Buchanan"] },
                { text: "Is the character a man?", yes: ["Jay Gatsby", "Owl Eyes", "Tom Buchanan", "Henry Gatz", "Nick Carraway", "George Wilson", "Dan Cody", 
                    "Jay Gatsby", "Owl Eyes", "Tom Buchanan", "Henry Gatz", "Nick Carraway", "George Wilson", "Dan Cody"
                ] },
                { text: "Is the character a mother?", yes: ["Daisy Buchanan"] },
                { text: "Is the character living in the Valley of Ashes", yes: ["Myrtle Wilson", "George Wilson"] },
                { text: "Is the character involved in an affair?", yes: ["Tom Buchanan", "Daisy Buchanan", "Jay Gatsby", "Myrtle Wilson"] },
                { text: "Does the character die?", yes: ["Jay Gatsby", "Myrtle Wilson", "George Wilson", "Dan Cody"] },
                { text: "Is the character an athlete?", yes: ["Jordan Baker", "Tom Buchanan"] },
                { text: "Is the character new money (west egg)", yes: ["Jay Gatsby", "Nick Carraway"] },
                { text: "Is the character a criminal?", yes: ["Tom Buchanan", "Meyer Wolfsheim", "Jay Gatsby", "Daisy Buchanan", "George Wilson"] },
                { text: "Is the character a love interest to a man?", yes: ["Daisy Buchanan", "Jordan Baker", "Myrtle Wilson"] },
                { text: "Is the character a known best as friend of Gatsby?", yes: ["Nick Carraway", "Jordan Baker", "Meyer Wolfsheim"] },
                { text: "Is the character a flapper?", yes: ["Daisy Buchanan", "Jordan Baker"] },
                { text: "Does the character have a mysterious past?", yes: ["Jay Gatsby", "Meyer Wolfsheim"] },
                { text: "Is the character a bootlegger?", yes: ["Meyer Wolfsheim", "Jay Gatsby"] },
                { text: "Is the character a gambler?", yes: ["Meyer Wolfsheim"] },
                { text: "Can the character be seen at the parties?", yes: ["Jay Gatsby", "Jordan Baker", "Daisy Buchanan", "Tom Buchanan", "Owl Eyes"]},
                { text: "Is the character a mentor to Gatz?", yes: ["Dan Cody"] },
                { text: "Is the character a car owner during the trip to town?", yes: ["Tom Buchanan", "Jay Gatsby",] },
                { text: "Is the character present at Gatsby's funeral", yes: ["Nick Carraway", "Owl Eyes"] }
                
            ];
        } else if (gatz === 2) {
            characters = [
                { name: "John Proctor", points: 0 },
                { name: "Elizabeth Proctor", points: 0 },
                { name: "Abigail Williams", points: 0 },
                { name: "Reverend Parris", points: 0 },
                { name: "Reverend Hale", points: 0 },
                { name: "Judge Danforth", points: 0 },
                { name: "Mary Warren", points: 0 },
                { name: "Tituba", points: 0 },
                { name: "Giles Corey", points: 0 },
                { name: "Rebecca Nurse", points: 0 },
                { name: "Thomas Putnam", points: 0 },
                { name: "Ann Putnam", points: 0 }
            ];
            // try to think of like 25 questions pls, can be some repeats from gastby
            questions = [
                { text: "Is the character a farmer?", yes: ["John Proctor", "Giles Corey", "Thomas Putnam"] },
                { text: "Is the character in a dispute?", yes: ["John Proctor", "Thomas Putnam", "Reverend Parris"] },
                { text: "Is the character a judge?", yes: ["Judge Danforth", "Judge Danforth", "Judge Danforth"] },
                { text: "Is the character married?", yes: ["John Proctor", "Elizabeth Proctor", "Rebecca Nurse", "Giles Corey", "Ann Putnam",
                    "John Proctor", "Elizabeth Proctor", "Mary Warren", "Rebecca Nurse", "Giles Corey", "Ann Putnam"
                ] },
                { text: "Is the character a woman ?", yes: ["Elizabeth Proctor", "Abigail Williams", "Mary Warren", "Tituba", "Rebecca Nurse", "Ann Putnam",
                    "Elizabeth Proctor", "Abigail Williams", "Mary Warren", "Tituba", "Rebecca Nurse", "Ann Putnam"
                ] },
                { text: "Is the character a Church leader", yes: ["Reverend Parris", "Reverend Hale"] },
                { text: "Is the character a main antagonist?", yes: ["Abigail Williams", "Thomas Putnam"] },
                { text: "Is the character a victim of the witch trials?", yes: ["John Proctor", "Giles Corey", "Rebecca Nurse", "Elizabeth Putnum",] },
                { text: "Is the character a servant?", yes: ["Mary Warren", "Tituba"] },
                { text: "Is the character a member of the court?", yes: ["Judge Danforth", "Reverend Hale"] },
                { text: "Is the character a main character?", yes: ["John Proctor", "Elizabeth Proctor", "Abigail Williams", "Reverend Parris", "Reverend Hale", "Judge Danforth"] },
                { text: "Is the character a member of the Putnam family?", yes: ["Thomas Putnam", "Ann Putnam"] },
                { text: "Is the character a main accuser of witchcraft?", yes: ["Abigail Williams", "Mary Warren"] },
                { text: "Is the character a supporter of the trials?", yes: ["Judge Danforth", "Abigail Williams", "Thomas Putnam"] },
                { text: "Is the character a mother?", yes: ["Rebecca Nurse", "Elizabeth Proctor", "Ann Putnam"] },
                { text: "Does the character present evidence to help their wife?", yes: ["Giles Corey", "John Proctor"] },
                { text: "Is the character executed?", yes: ["John Proctor", "Giles Corey", "Rebecca Nurse"] },
                {text: "Does the character pretend to see a bird?", yes: ["Mary Warren", "Abigail WIlliams"] }
               


            ];
        }
    }
    // this is what needs to be fixed. needs to not have repeats
    // I THINK I FIXED IT 
    function getRandomQuestion() {
        if (questions.length === 0) {
            return { text: "No more questions available.", yes: [], no: [] };
        }
        const index = Math.floor(Math.random() * questions.length);
        return questions.splice(index, 1)[0]; // Remove the question from the pool to avoid repeats
    }

    let questionIndex = 0; // Tracks question progress
    let firstQuestionAsked = false; // Ensures first question is asked

    let currentGuess = "Unknown Character"; // Default guess can delete prob

    // **HTML Elements**
    const questionText = document.getElementById("question");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const resultText = document.getElementById("result");
    
    const progressBar = document.getElementById("progress-bar");
    // updates the progress bar
    function updateProgress() {
        let percent = ((questionIndex / 10) * 100) + "%";
        progressBar.style.width = percent;
    }
    // computer tallies up the points and displays the final guess
    function displayFinalGuess() {
        let topCharacter = characters.reduce((max, character) => 
            max.points > character.points ? max : character
        );
        //final guess, hides everything but the result
        resultText.textContent = "I think your character is: " + topCharacter.name;
        resultText.style.fontSize = "36px";
        resultText.style.color = "#f1c40f";
        resultText.style.fontWeight = "bold";
        resultText.style.textAlign = "center";
        yesBtn.style.display = "none"; // Hide Yes button
        noBtn.style.display = "none"; // Hide No button
        // will restart game if wrong
        questionText.textContent = "Wrong character? Let me try again!";
        restartBtn.style.display = "block";// Show restart button to restart the game
    }
    // this is the bulk of the code, it asks the questions and handles the user input
    function askNextQuestion() {
        //This first part checks if the first question has been asked, if not it asks the first question
        if (!firstQuestionAsked) {
            questionText.textContent = firstQuestion;
            yesBtn.onclick = () => {
                gatz = book === "The Great Gatsby" ? 1 : 2; // this is pretyy cool, its a shorthand way to say if the book is "The Great Gatsby" then gatz is 1, otherwise its 2
                updateGameVariables(); // Update character/question set
                firstQuestionAsked = true; // Mark first question as asked
                askNextQuestion();
            };

            noBtn.onclick = () => { // same thing but if no is pressed
                gatz = book === "The Great Gatsby" ? 2 : 1; 
                updateGameVariables();
                firstQuestionAsked = true;
                askNextQuestion();
            };
        } else if (questionIndex < 13) { // this is what you need to change to add more questions, just change the number 2 to however many questions you want id reccommend 15-20
            let currentQuestion = getRandomQuestion(); // current question is what will be displayed
            questionText.textContent = currentQuestion.text;

            yesBtn.onclick = () => { // This is the coolest part, based on if the button is yes or no, it will find all the characters that match the criteria and add points to them
                if (currentQuestion.yes) {
                    currentQuestion.yes.forEach(character => {
                        let foundCharacter = characters.find(c => c.name === character);
                        if (foundCharacter) foundCharacter.points++;
                    });
                }
                questionIndex++;
                updateProgress(); // Update progress bar, doesnt work for some reason
                askNextQuestion();
            };

            noBtn.onclick = () => { // same thing but for no
                if (currentQuestion.no) {
                    currentQuestion.no.forEach(character => {
                        let foundCharacter = characters.find(c => c.name === character);
                        if (foundCharacter) foundCharacter.points++;
                    });
                }
                questionIndex++;
                updateProgress();
                askNextQuestion();
            };
        } else { // this is when questions run out, it will display the final guess
            displayFinalGuess();
            updateProgress();
        }
    }
    // this is what happens when the start button is pressed, it hides the start button and shows the yes and no buttons
    startBtn.addEventListener("click", function () {
        startBtn.style.display = "none"; // hides the start button
        yesBtn.style.display = "block";  // Make Yes button visible
        noBtn.style.display = "block";   // Make No button visible
        askNextQuestion(); // Game begins :)
    });
    document.getElementById("restart-btn").addEventListener("click", function () {
        location.reload(); // Reloads the page to start fresh
    });
});

/* Reminders
download extension "Live Server" for vscode
right click on index.html and select "Open with Live Server"
This will open the game in your browser
remember to commit
*/