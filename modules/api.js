// API key for The Movie Database (IMDb) API
const API_KEY = "f91dc35848427d835b75e7daf042c468"; // Replace with your IMDb API key

// Function to search movies using IMDb API
async function searchMovies(query, page = 1) {
  // Constructing the URL for the API request
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  
  // Fetching data from the API
  const response = await fetch(url);
  
  // Parsing the response as JSON
  const data = await response.json();
  
  // Checking if the response is successful
  if (response.ok) {
    // Returning relevant movie data if successful
    return {
      totalResults: data.total_results,
      totalPages: data.total_pages,
      results: data.results,
    };
  } else {
    // Throwing an error if fetching data fails
    throw new Error(data.status_message || "Failed to fetch data");
  }
}

// Exporting the searchMovies function for external use
export { searchMovies };
