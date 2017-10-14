/**
 * Created by schaud3 on 10/12/17.
 */
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', (req, res, next) => {
    res.send({hi:'there Shreejit'});
});

app.use('/', router);
try {
    const PORT = process.env.PORT;
    app.listen(PORT);
} catch (error) {
    console.log(error);
}