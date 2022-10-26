var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/campaigns', function(req, res, next) {
//   res.render('campaigns', { title: 'Express' });
// });

router.get('/campaigns', function(req, res, next) {
    fetch("https://www.googleapis.com/analytics/v3/management/accounts/accountId/webproperties/webPropertyId/profiles")
    .then(response => response.json())
    .then(data => console.log(data));
    //res.send();
});

module.exports = router;
