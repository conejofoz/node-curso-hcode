var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
  res.send('Acessando usuarios via post \n' + corpo);
});


module.exports = router;
