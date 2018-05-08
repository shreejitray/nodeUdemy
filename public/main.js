/**
 * Created by schaud3 on 11/11/17.
 */
'use strict';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import bootstrap from 'angular-ui-bootstrap';
import home from './pages/home/index';
import login from './pages/login/index';

const routes = [uirouter,home,bootstrap,login];

console.log("point1");
var app = angular.module('app',routes)
    .factory('httpRequestInterceptor',()=>{
        console.log('angular interceptor function');
        return {
            request: function (config) {
                config.headers['validity'] = true;
                console.log('angular interceptor');
                return config
            }
        }
    })
    .config(($urlRouterProvider,$locationProvider,$httpProvider) => {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/component/home');
        $httpProvider.interceptors.push('httpRequestInterceptor');
    })
    .run(($state)=>{
        console.log('inside run function');
        //$state.go("home");
    });
console.log("point2");
export default app;

