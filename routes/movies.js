var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/:movie_id/reviews', function (req, res, next) {
  res.render('movies/reviews/show');
})

router.get('/:movie_id/reviews/new', function (req, res, next) {
  res.render('movies/reviews/new');
})

router.post('/:movie_id/reviews', function (req, res, next) {
  res.redirect('/movies/:movies_id/reviews');
})

router.get('/:movie_id/reviews/:id', function (req, res, next) {
  res.render('movies/reviews/show');
})

router.get('/:movie_id/reviews/:id/edit', function (req, res, next) {
  res.render('movies/reviews/edit');
})

router.post('/:movie_id/reviews/:id', function (req, res, next) {
  res.redirect('/movies/:movie_id/reviews');
})

router.post('/:movie_id/reviews/:id/delete', function (req, res, next) {
  res.redirect('/movies/:movie_id/reviews');
})

router.get('/new', function (req, res, next) {
  res.render('movies/new');
})

router.post('/', function (req, res, next) {
  res.redirect('/movies');
})

router.get('/:id', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:id/edit', function (req, res, next) {
  res.render('movies/edit');
})

router.post('/:id', function (req, res, next) {
  res.redirect('/movies');
})

router.post('/:id/delete', function (req, res, next) {
  res.redirect('/movies');
})

module.exports = router;
