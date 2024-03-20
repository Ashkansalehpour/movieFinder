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
}  