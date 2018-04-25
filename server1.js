/**
 * Created by schaud3 on 10/12/17.
 */
const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
var router = express.Router();
var app = express();

passport.use(new googleStrategy())
router.get('/', (req, res, next) => {
    res.send({hi:'there Shreejit ray chaudhury'});
});

app.use('/', router);
try {
    const PORT = process.env.PORT;
    app.listen(PORT);
} catch (error) {
    console.log(error);
}