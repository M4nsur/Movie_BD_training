const numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm_1 = prompt("Последний просмотренный фильм ?");
const lastFilm_1_rating = prompt("На сколько оцените его ?");

const lastFilm_2 = prompt("Последний просмотренный фильм ?");
const lastFilm_2_rating = prompt("На сколько оцените его ?");

personalMovieDB.movies[lastFilm_1] = lastFilm_1_rating;
personalMovieDB.movies[lastFilm_2] = lastFilm_2_rating;
console.log(personalMovieDB);
