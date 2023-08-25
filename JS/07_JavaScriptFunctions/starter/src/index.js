const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// // Part 1 - Create a function to find a movie and output its detail
// function findMovie(movieTitle) {
//     for (let movie of movies) {
        
//         if (movieTitle === movie["title"]) {
//             console.log(movie.title, movie.director, movie.year);
//         }
//         console.log(movie);
//     }
// }       

// findMovie("Star Wars");
// var movie = "Thor: Ragnorok";
// console.log(movie);
// let check = findMovie(movie);
// console.log(check);        

// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
    for (let movie of movies) {
        if (movieTitle === movie["title"]) {
            return movie;
        }
        console.log(movie);
    }
    // console.log("Any text, any text at all.")
    return "Movie not found";
}

let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie)
console.log("My movie is called", myMovie.title, "directed by", myMovie.director, "in", myMovie.year);
let myOtherMovie = returnMovie("Thor: Ragnorok");
console.log(myOtherMovie);

function myMovieDetails(anyMovie) {
    if (typeof(anyMovie) == "object") {
        return "Movie exists";
    } else {
        return anyMovie;
    }
}

console.log(myMovieDetails(myOtherMovie));
console.log(myMovieDetails(returnMovie("Jaws")));
