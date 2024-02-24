document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const spinner = document.getElementById('spinner');
    let progress = 0;

    startButton.addEventListener('click', function() {
        // Show spinner when the button is clicked
        spinner.style.display = 'inline-block';
        
        // Simulate progress increase every 1 second
        const interval = setInterval(function() {
            progress += 10;
            if (progress >= 100) {
                clearInterval(interval);
                // Redirect to shop.html after progress reaches 100%
                window.location.href = 'shop.html';
            }
        }, 200);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    var searchResultsContainer = document.getElementById('searchResults');
    var startButton = document.getElementById('startButton');
    var energeticSound = document.getElementById('energeticSound');
    var data = [
        { name: 'Red T-Shirt', image: 'red-tshirt.jpg' },
        { name: 'Blue Jeans', image: 'blue-jeans.jpg' },
        // Add more items as needed
    ];

    searchButton.addEventListener('click', function() {
        var searchQuery = searchInput.value.trim().toLowerCase();
        if (searchQuery !== '') {
            var results = searchItems(searchQuery);
            displaySearchResults(results);
            playEnergeticSound(); // Play energetic sound when searching
        } else {
            searchResultsContainer.innerHTML = 'Please enter a search query.';
        }
    });

    startButton.addEventListener('click', function() {
        playEnergeticSound(); // Play energetic sound when clicking "Get Started" button
    });

    function searchItems(query) {
        return data.filter(function(item) {
            return item.name.toLowerCase().includes(query);
        });
    }

    function displaySearchResults(results) {
        searchResultsContainer.innerHTML = ''; // Clear previous results
        if (results.length === 0) {
            searchResultsContainer.innerHTML = 'No results found.';
        } else {
            results.forEach(function(result) {
                var div = document.createElement('div');
                var img = document.createElement('img');
                img.src = result.image;
                img.alt = result.name;
                div.appendChild(img);
                var p = document.createElement('p');
                p.textContent = result.name;
                div.appendChild(p);
                searchResultsContainer.appendChild(div);
            });
        }
    }

    function playEnergeticSound() {
        // Check if audio is supported and the sound is not already playing
        if (energeticSound && !energeticSound.paused) {
            energeticSound.play();
        }
    }
});
