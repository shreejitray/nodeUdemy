/**
 * Created by schaud3 on 11/11/17.
 */

const express = require("express");
const trail = require('./routes/trail');
const index = require('./routes/index');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const staticPath = path.resolve(__dirname, 'public');
const http = require('http');
const webpack = require("webpack");
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

hbs.registerHelper('toJSON', object => (new hbs.SafeString(object)));

app.use((req,res,next)=>{
    // if(!req.headers['validity']){
    //     req.headers['validity']=true;
    //     res.redirect('/component/home');
    // }
    console.log("intercepting"+req.originalUrl);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(staticPath));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.set('app',path.join(__dirname,'piblic,main.js'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
const compiler = webpack(webpackConfig);
//webpackDevMiddleware(compiler,{});
app.use(webpackDevMiddleware(compiler,{}));
app.use(webpackHotMiddleware(compiler));
app.use("/trail1", trail);
app.use("/component/*",index);

app.use("*",(req,res) => {
    console.log("no listener found for ",req.baseUrl);
    res.send(`no registered listner for ${req.baseUrl}`);
});

app.set('httpPort', '3000');
const httpServer = http.createServer(app);
httpServer.listen('3000');
console.log('server has started');
