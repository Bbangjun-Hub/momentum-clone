const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

function performSearch() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.location.href = googleSearchUrl;
  }
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
