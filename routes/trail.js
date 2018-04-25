/**
 * Created by schaud3 on 11/12/17.
 */
const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    console.log("server pinged for ",req.baseUrl);
    next();
});

router.get("/",(req,res,next) => {
    res.send("response from trail 1");
});

router.post("/",(req,res) => {
    res.send("response from trail1 post");
});

module.exports = router;