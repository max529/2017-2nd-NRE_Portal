var express = require('express');
var router = express.Router();
var fs = require('fs');
var uniqid = require('uniqid');


/* GET home page. */
router.get('/', function (req, res, next) {
    var tabPath = [
        {name: "Home", path: "/"}];
    res.render('index', {title: 'Express', path: tabPath});
});
router.get('/installation', function (req, res, next) {
    var tabPath = [
        {name: "Home", path: "/"},
        {name: "Installation", path: "/Installation"}];
    res.render('installation', {title: 'Express', path: tabPath});
})


router.post('/save', function (req, res, next) {
    var obj = req.body;
    var cont = fs.readFileSync('./save.json', 'utf8');
    obj.id = uniqid();
    if (cont != "") {
        cont = JSON.parse(cont);
    } else {
        cont = [];
    }
    cont.push(obj);
    fs.writeFileSync('./save.json', JSON.stringify(cont));
    res.send(obj.id);
})

module.exports = router;
