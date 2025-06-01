document.addEventListener("DOMContentLoaded", function () {
    book = Math.random() < 0.5 ? "The Great Gatsby" : "The Crucible"; // Randomly choose a book

    startingQ = "Is your character from the" + book; // Default guestion, will narrow the search down to one book

    if (book === "The Great Gatsby") {
        question1 = "Is your character from The Great Gatsby?";
        question2 = "Is your character involved in the extravagant parties?";
        //keep adding questions for The Great Gatsby
    } else {
        question1 = "Is your character one of the accussed?";
        question2 = "Is your character involved in the witch trials?";
        //keep adding questions for The Crucible
    }
    // Here I listed the characters from both books with their points initialized to 0
    const Gatsbycharacters = [
        { name: "Jay Gatsby", points: 0 },
        { name: "Nick Carraway", points: 0 },
        { name: "Daisy Buchanan", points: 0 },
        { name: "Tom Buchanan", points: 0 },
        { name: "Jordan Baker", points: 0 },
        { name: "Myrtle Wilson", points: 0 },
        { name: "George Wilson", points: 0 },
        { name: "Meyer Wolfsheim", points: 0 },
        { name: "Owl Eyes", points: 0 },
        { name: "Henry Gatz", points: 0 }
    ];
    const crucibleCharacters = [
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
    const people = book === "The Great Gatsby" ? Gatsbycharacters : crucibleCharacters; // Choose the correct array based on the book    
    
    console.log(people); // Displays the full array
    console.log(people[1].name + " - " + people[1].points); // Output: "Bob - 202"
    
    const questions = [
        {question},
        { question: "Is the character involved in witch trials?", yes: "Abigail Williams", no: "gatsby" },
        { question: "Does the character throw extravagant parties?", yes: "Jay Gatsby", no: "crucible" },
        { question: "Is the character deeply in love with someone?", yes: "John Proctor", no: "Nick Carraway" },
    ];
    

    let questionIndex = 0;
    let currentGuess = "Unknown Character"; // Default guess

    // **HTML Elements brought in**
    const questionText = document.getElementById("question");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const startBtn = document.getElementById("start-btn");
    const resultText = document.getElementById("result");
    const progressBar = document.getElementById("progress-bar");
    const title = document.getElementById("title");
    
    function generateRandomArray(size) {
        let randomNumbers = [];
        for (let i = 0; i < size; i++) {
            randomNumbers.push(Math.floor(Math.random() * 20) + 1);
        }
        return randomNumbers;
    }
    
    const randomArray = generateRandomArray(2); // Creates an array with 2 random numbers
    
    //fade in effect
    function fadeIn(element) {
        element.style.opacity = "0";
        element.style.display = "inline-block";
        setTimeout(() => { element.style.opacity = "1"; }, 200);
    }
    
    //progress bar
    function updateProgress() {
        let percent = ((questionIndex / questions.length) * 100) + "%";
        progress.style.width = percent;
    }
    // creates the flow of questions
    function askNextQuestion() {
        if (questionIndex < questions.length) {
            questionText.textContent = questions[questionIndex].question;
            updateProgress();
        } else {
            // **Hide Everything Except the Result**
            questionText.style.display = "none";
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
            title.style.display = "none";
    
            // **Style the Final Guess**
            resultText.textContent = "I think your character is: " + currentGuess;
            resultText.style.fontSize = "36px";
            resultText.style.color = "#f1c40f";
            resultText.style.fontWeight = "bold";
            resultText.style.textAlign = "center";
            updateProgress();
        }
    }
    // Begginning message, after click, the game starts
    startBtn.addEventListener("click", function () {
        startBtn.style.display = "none";
        fadeIn(yesBtn);
        fadeIn(noBtn);
        fadeIn(questionText);
    });
    // **Event Listeners for Yes and No Buttons**
    yesBtn.addEventListener("click", function () {
        
        questionIndex++; //next question
        askNextQuestion();
    });

    noBtn.addEventListener("click", function () {
        
        questionIndex++; //next question
        askNextQuestion();
    });
});