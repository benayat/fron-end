//! Structure of an API call

//! The endpoint(or route)
//* root-enpoint
//https://api.themoviedb.org/3
//https://swapi.dev/api/

//! API Path
//* look at the  documentation of the api on what paths are available
//https://api.themoviedb.org/3/movie/
//https://api.themoviedb.org/3/genre
//! API Query parameters
//* gives you an option to modify your request with key-value pairs
//* first query starts with a "?"
//* next queries start with a "&"
//* ?key=value&key=value&key=value
//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
// const API_KEY = "e3at4y433yergergerte4";
// const pagination ="2";

// const x = fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=${pagination}`)

//! API key
//* most api's require an API key, ususally you can put it anywhere in your request but its best pratice to put it at the beginning of a request
