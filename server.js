const express = require('express');
const app = express();
const port = 3333;

let isAuth = true;
const checkForAuth = function (req, res, next) {
    console.log('checkForAuth')
    if (isAuth)
        next();
    else
        res.send("Нет доступа");
};
app.use(express.static("web"));
app.get('/project',function (req, res) {
    res.send(req.query.id)
})
app.listen(3333);