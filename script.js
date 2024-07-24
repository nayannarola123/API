
function fetchSlok() {
    fetch('https://vedicscriptures.github.io/slok/1/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displaySlok(data);
        })
        .catch(error => {
            console.error('Error fetching slok:', error);
            alert('Failed to fetch sloka. Please try again later.');
        });
}

function displaySlok(data) {
    const slokElement = document.getElementById('slok');
    slokElement.innerHTML = `
                <p><strong>Sloka:</strong> ${data.slok}</p>
                <p><strong>Reference:</strong> ${data.transliteration}</p>
            `;
}

