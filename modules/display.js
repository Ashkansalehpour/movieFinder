// Functions for displaying movie details, handling no results, and errors
function displayMovieDetails(movie) {
  // Extracting necessary data from the movie object
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const imdbUrl = `https://www.imdb.com/title/${movie.imdb_id}`;
  // Generating HTML markup for displaying movie information
  const movieInfo = `
            <h2>${movie.title}</h2>
            <p>Release Date: ${movie.release_date}</p>
            <p>Overview: ${movie.overview}</p>
            <p>IMDb Rating: <a href="${imdbUrl}" target="_blank">${movie.vote_average.toFixed(
    2
  )}</a></p>
        `;
  // Updating movie poster in the HTML
  document.getElementById(
    "moviePoster"
  ).innerHTML = `<img src="${imageUrl}" alt="${movie.title} Poster" />`;
  // Updating movie information in the HTML
  document.getElementById("movieInfo").innerHTML = movieInfo;
  // Displaying movie details section
  document.getElementById("movieDetails").classList.remove("hidden");
  // Hiding 'no results' message
  document.getElementById("noResultsMessage").classList.add("hidden");
}

// Function to display 'no results' message
function displayNoResults() {
  // Hiding movie details section
  document.getElementById("movieDetails").classList.add("hidden");
  // Clearing movie poster
  document.getElementById("moviePoster").innerHTML = "";
  // Clearing movie information
  document.getElementById("movieInfo").innerHTML = "";
  // Displaying 'no results' message
  document.getElementById("noResultsMessage").classList.remove("hidden");
}

// Function to display error message
function displayError(message) {
  // Setting error message in the HTML
  document.getElementById("error").textContent = message;
  // Displaying error message
  document.getElementById("error").classList.remove("hidden");
}

// Creating HTML elements dynamically
const container = document.createElement("div");
container.classList.add("container");

// Creating and appending heading element
const h1 = document.createElement("h1");
h1.textContent = "Movie Search";
container.appendChild(h1);

// Creating search container and its child elements
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "searchInput");
searchInput.setAttribute("placeholder", "Search for a movie...");
searchContainer.appendChild(searchInput);

const searchButton = document.createElement("button");
searchButton.setAttribute("id", "searchButton");
searchButton.textContent = "Search";
searchContainer.appendChild(searchButton);

container.appendChild(searchContainer);

// Creating movie details section and its child elements
const movieDetails = document.createElement("div");
movieDetails.setAttribute("id", "movieDetails");
movieDetails.classList.add("hidden");

const moviePoster = document.createElement("div");
moviePoster.setAttribute("id", "moviePoster");
movieDetails.appendChild(moviePoster);

const movieInfo = document.createElement("div");
movieInfo.setAttribute("id", "movieInfo");
movieDetails.appendChild(movieInfo);

container.appendChild(movieDetails);

// Creating 'no results' message element
const noResultsMessage = document.createElement("div");
noResultsMessage.setAttribute("id", "noResultsMessage");
noResultsMessage.classList.add("hidden");
noResultsMessage.textContent = "No movie found!";
container.appendChild(noResultsMessage);

// Creating error message element
const error = document.createElement("div");
error.setAttribute("id", "error");
error.classList.add("hidden");
container.appendChild(error);

// Creating pagination section and its child elements
const pagination = document.createElement("div");
pagination.setAttribute("id", "pagination");

const prevButton = document.createElement("button");
prevButton.setAttribute("id", "prevButton");
prevButton.classList.add("hidden");
prevButton.textContent = "Previous";
pagination.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.setAttribute("id", "nextButton");
nextButton.classList.add("hidden");
nextButton.textContent = "Next";
pagination.appendChild(nextButton);

container.appendChild(pagination);

// Appending container to body
document.body.appendChild(container);

// Exporting functions for external use
export { displayMovieDetails, displayNoResults, displayError };
