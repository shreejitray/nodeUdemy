/**
 * Created by schaud3 on 11/11/17.
 */
import template from './index.html';

function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: template,
            controller: 'loginController',
            controllerAs: 'login'
        });
}

routes.$inject = ['$stateProvider'];

export default routes;