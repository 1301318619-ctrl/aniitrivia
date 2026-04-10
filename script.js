console.log("Script started");

// Get all the genre buttons
let genreButtons = document.querySelectorAll('.genre-btn');

// Add click listeners to each button
genreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get which genre was clicked
        let selectedGenre = button.getAttribute('data-genre');
        
        // Call our switching function
        switchGenre(selectedGenre);
    });
});

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all genre buttons
    let genreButtons = document.querySelectorAll('.genre-btn');
    
    // Add click event to each button
    genreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let selectedGenre = button.getAttribute('data-genre');
            switchGenre(selectedGenre);
        });
    });
    
});

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
// Add this to your script.js file, after your existing code

function setupAnimeSelection() {
    // Get all anime cards
    let animeCards = document.querySelectorAll('.anime-card');
    
    // Add click event to each card
    animeCards.forEach(function(card) {
        card.addEventListener('click', function() {
            selectAnime(card);
        });
    });
}

function selectAnime(selectedCard) {
    // Remove 'selected' class from all cards
    let allCards = document.querySelectorAll('.anime-card');
    allCards.forEach(function(card) {
        card.classList.remove('selected');
    });
    
    // Add 'selected' class to clicked card
    selectedCard.classList.add('selected');
    
    // Get the anime name
    let animeName = selectedCard.getAttribute('data-anime');
    
    // Show which anime was selected (for testing)
    console.log('Selected anime:', animeName);
}

// Call this function when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Your existing genre switching code...
    
    // Add anime selection functionality
    setupAnimeSelection();
});
function selectAnime(selectedCard) {
    // Remove 'selected' class from all cards
    let allCards = document.querySelectorAll('.anime-card');
    allCards.forEach(function(card) {
        card.classList.remove('selected');
    });
    
    // Add 'selected' class to clicked card
    selectedCard.classList.add('selected');
    
    // Get the anime name
    let animeName = selectedCard.getAttribute('data-anime');
    
    // Show which anime was selected
    console.log('Selected anime:', animeName);
    
    // Show start quiz button
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

function startQuiz(animeName) {
    alert(`Starting quiz for ${animeName}! (Quiz questions coming next!)`);
}
