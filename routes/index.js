const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((allmoviesDB) => {
        res.render("movies", {movies: allmoviesDB});
    })
    .catch((err) => {
       res.render('error', { err });
    })
});

//This is a route that recieves a route param
router.get('/movies/:movieId', (req, res) => {
    let bookId = req.params.bookId;
    //Get book using the id that is on the route
    //Find book on MongoDB using the book id
    Movie.findById(movieId)
      .then((theMovieFound) => {
        res.render('movie-details', { movie: theMovieFound});
      })
      .catch((err) => {
        res.render('error', { err });
      })
  });
  

module.exports = router;