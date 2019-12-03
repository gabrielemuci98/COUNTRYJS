var createError = require('http-errors');
var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');

router.get('/info/:state/', function(req, res, next){ //Rendiamo lo stato un parametro
 res.send(country.info(req.params.state));
})
router.get('/info2', function(req, res, next){ //Rendiamo lo stato un parametro
 res.send(country.info(req.query.state));
})
module.exports = router; //esporta il modulo per poterlo usare in app.js