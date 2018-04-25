/**
 * Created by schaud3 on 11/11/17.
 */

import route from './routes';
import loginController from './ctl';
import ngResource from 'angular-resource';
import bootstrap from 'angular-ui-bootstrap';
import angular from 'angular';
import uiroute from 'angular-ui-router';

export default angular.module('app.login',[uiroute,ngResource,bootstrap])
    .controller('loginController',loginController)
    .config(route)
    .service('login')
    .name;
