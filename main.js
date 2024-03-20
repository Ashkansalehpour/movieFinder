// Importing searchMovies function from the API module
import { searchMovies } from "./modules/api.js";

// Importing display functions from the display module
import {
  displayMovieDetails,
  displayNoResults,
  displayError,
} from "./modules/display.js";

// Initializing current page and total pages variables
let currentPage = 1;
let totalPages = 1;

// Function to search and display movies based on user input
async function searchAndDisplayMovies() {
  // Getting search query from input field
  const query = document.getElementById("searchInput").value;
  try {
    // Fetching movie data from the API
    const { totalResults, results } = await searchMovies(query, currentPage);
    // Calculating total pages based on total results and results per page
    totalPages = Math.ceil(totalResults / results.length);
    // Displaying no results if total results are 0
    if (totalResults === 0) {
      displayNoResults();
    } else {
      // Displaying details of the first movie from the results
      displayMovieDetails(results[0]);
    }
  } catch (error) {
    // Displaying error message if an error occurs
    displayError(error.message);
  }
}

// Adding event listener to search button for initiating search
document
  .getElementById("searchButton")
  .addEventListener("click", searchAndDisplayMovies);

// Adding event listener to next button for navigating to next page
document.getElementById("nextButton").addEventListener("click", function () {
  if (currentPage < totalPages) {
    // Incrementing current page and triggering search
    currentPage++;
    searchAndDisplayMovies();
  }
});

// Adding event listener to previous button for navigating to previous page
document.getElementById("prevButton").addEventListener("click", function () {
  if (currentPage > 1) {
    // Decrementing current page and triggering search
    currentPage--;
    searchAndDisplayMovies();
  }
});
