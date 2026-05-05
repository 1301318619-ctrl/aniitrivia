console.log("Script started");

// All quiz data organized by anime
let quizData = {
    // SHONEN
    "naruto": [
        {q: "What is Naruto's signature jutsu?\nA) Shadow Clone\nB) Rasengan", a: "A"},
        {q: "What is the fox's name?\nA) Kurama\nB) Shukaku", a: "A"},
        {q: "What village is Naruto from?\nA) Sand Village\nB) Leaf Village", a: "B"}
    ],
    "one-piece": [
        {q: "What is Luffy's dream?\nA) Be strongest\nB) Become Pirate King", a: "B"},
        {q: "What is Luffy's power?\nA) Fire\nB) Rubber", a: "B"},
        {q: "Who is Luffy's first mate?\nA) Sanji\nB) Zoro", a: "B"}
    ],
    "demon-slayer": [
        {q: "What breathing does Tanjiro use?\nA) Thunder Breathing\nB) Water Breathing", a: "B"},
        {q: "What is Tanjiro's sister's name?\nA) Nezuko\nB) Kanao", a: "A"},
        {q: "What happened to Nezuko?\nA) She became a demon\nB) She ran away", a: "A"}
    ],
    "attack-titan": [
        {q: "What is Eren's titan called?\nA) Attack Titan\nB) Colossal Titan", a: "A"},
        {q: "What are the walls made of?\nA) Stone\nB) Titans", a: "B"},
        {q: "Who is Eren's best friend?\nA) Armin\nB) Jean", a: "A"}
    ],
    "dragon-ball": [
        {q: "What is Goku's signature attack?\nA) Kamehameha\nB) Final Flash", a: "A"},
        {q: "What planet is Goku from?\nA) Earth\nB) Planet Vegeta", a: "B"},
        {q: "How many Dragon Balls are there?\nA) 5\nB) 7", a: "B"}
    ],
    "bleach": [
        {q: "What is Ichigo's sword called?\nA) Zangetsu\nB) Senbonzakura", a: "A"},
        {q: "What are soul reapers called?\nA) Quincy\nB) Shinigami", a: "B"},
        {q: "What is Ichigo's hair color?\nA) Orange\nB) Black", a: "A"}
    ],
    "my-hero": [
        {q: "What is Deku's real name?\nA) Izuku Midoriya\nB) Katsuki Bakugo", a: "A"},
        {q: "What is Deku's quirk called?\nA) Explosion\nB) One For All", a: "B"},
        {q: "Who is the Symbol of Peace?\nA) Endeavor\nB) All Might", a: "B"}
    ],
    "jujutsu-kaisen": [
        {q: "What is Yuji's cursed technique?\nA) He has none naturally\nB) Shadow Clone", a: "A"},
        {q: "Who is the King of Curses?\nA) Sukuna\nB) Gojo", a: "A"},
        {q: "What does Yuji eat?\nA) Sukuna's fingers\nB) Cursed rice balls", a: "A"}
    ],
    "hunter-x-hunter": [
        {q: "What is Gon looking for?\nA) His father\nB) Treasure", a: "A"},
        {q: "What is Killua's family known for?\nA) Cooking\nB) Assassination", a: "B"},
        {q: "What is Nen?\nA) Life energy\nB) Magic spells", a: "A"}
    ],
    "fullmetal": [
        {q: "What are Edward and Alphonse?\nA) Alchemists\nB) Wizards", a: "A"},
        {q: "What is Edward's nickname?\nA) Fullmetal\nB) Flame", a: "A"},
        {q: "What happened to Alphonse's body?\nA) Lost in alchemy\nB) Burned in fire", a: "A"}
    ],
    "black-clover": [
        {q: "What is Asta's power?\nA) No magic\nB) Fire magic", a: "A"},
        {q: "What does Asta want to become?\nA) Wizard King\nB) Royal Knight", a: "A"},
        {q: "What is Yuno's magic?\nA) Wind\nB) Water", a: "A"}
    ],
    "fairy-tail": [
        {q: "What is Natsu's magic?\nA) Fire Dragon Slayer\nB) Ice Magic", a: "A"},
        {q: "What guild is Natsu in?\nA) Fairy Tail\nB) Phantom Lord", a: "A"},
        {q: "What is Happy?\nA) A cat\nB) A dog", a: "A"}
    ]
};

// GENRE SWITCHING FUNCTIONS
function switchGenre(genreName) {
    // Hide all anime categories
    let allCategories = document.querySelectorAll('.anime-category');
    allCategories.forEach(function(category) {
        category.style.display = 'none';
    });
    
    // Show the selected category
    let selectedCategory = document.querySelector(`[data-category="${genreName}"]`);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
    
    // Update button styling
    let allButtons = document.querySelectorAll('.genre-btn');
    allButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    let activeButton = document.querySelector(`[data-genre="${genreName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// ANIME SELECTION FUNCTIONS
function selectAnime(selectedCard) {
    // Remove 'selected' class from all cards
    let allCards = document.querySelectorAll('.anime-card');
    allCards.forEach(function(card) {
        card.classList.remove('selected');
    });
    
    // Add 'selected' class to clicked card
    selectedCard.classList.add('selected');
    
    // Get the anime name and show start button
    let animeName = selectedCard.getAttribute('data-anime');
    console.log('Selected anime:', animeName);
    showStartQuizButton(animeName);
}

function showStartQuizButton(animeName) {
    // Remove existing button if there is one
    let existingButton = document.getElementById('start-quiz-btn');
    if (existingButton) {
        existingButton.remove();
    }
    
    // Create new start quiz button
    let startButton = document.createElement('button');
    startButton.id = 'start-quiz-btn';
    startButton.innerText = `Start ${animeName} Quiz!`;
    startButton.style.padding = '1rem 2rem';
    startButton.style.fontSize = '1.2rem';
    startButton.style.backgroundColor = '#4CAF50';
    startButton.style.color = 'white';
    startButton.style.border = 'none';
    startButton.style.borderRadius = '25px';
    startButton.style.cursor = 'pointer';
    startButton.style.margin = '2rem auto';
    startButton.style.display = 'block';
    
    // Add click event to start quiz
    startButton.addEventListener('click', function() {
        startQuiz(animeName);
    });
    
    // Add button to the page
    document.querySelector('.anime-selector').appendChild(startButton);
}

// QUIZ FUNCTION
function startQuiz(animeName) {
    if (quizData[animeName]) {
        let questions = quizData[animeName];
        let score = 0;
        
        // Ask all 3 questions
        for (let i = 0; i < questions.length; i++) {
            let userAnswer = prompt(questions[i].q);
            if (userAnswer === questions[i].a) {
                score++;
            }
        }
        
        alert("You got " + score + " out of " + questions.length + " correct!");
    } else {
        alert("Quiz coming soon for " + animeName + "!");
    }
}

// SETUP WHEN PAGE LOADS
document.addEventListener('DOMContentLoaded', function() {
    // Setup genre buttons
    let genreButtons = document.querySelectorAll('.genre-btn');
    genreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let selectedGenre = button.getAttribute('data-genre');
            switchGenre(selectedGenre);
        });
    });
    
    // Setup anime card selection
    let animeCards = document.querySelectorAll('.anime-card');
    animeCards.forEach(function(card) {
        card.addEventListener('click', function() {
            selectAnime(card);
        });
    });
});