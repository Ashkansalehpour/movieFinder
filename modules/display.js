// Function to display details of a movie
function displayMovieDetails(movie) {
    // Constructing image URL for the movie poster
    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    
    // Constructing IMDb URL for the movie
    const imdbUrl = `https://www.imdb.com/title/${movie.imdb_id}`;
    
    // Parsing IMDb rating to two decimal places
    const imdbRating = parseFloat(movie.vote_average).toFixed(2);
    
    // Generating HTML markup for displaying movie information
    const movieInfo = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.release_date}</p>
        <p>Overview: ${movie.overview}</p>
        <p>IMDb Rating: <a href="${imdbUrl}" target="_blank">${imdbRating}</a></p>
    `;
    
    // Updating movie poster in the HTML
    document.getElementById("moviePoster").innerHTML = `<img src="${imageUrl}" alt="${movie.title} Poster" />`;
    
    // Updating movie information in the HTML
    document.getElementById("movieInfo").innerHTML = movieInfo;
    
    // Removing 'hidden' class to display movie details section
    document.getElementById("movieDetails").classList.remove("hidden");
    
    // Adding 'hidden' class to hide 'no results' message
    document.getElementById("noResultsMessage").classList.add("hidden");
  }