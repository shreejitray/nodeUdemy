/**
 * Created by schaud3 on 11/11/17.
 */
import template from './index.html';

function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/component/home',
            templateUrl: template,
            controller: 'homeController',
            controllerAs: 'home'
        });
}

routes.$inject = ['$stateProvider'];

export default routes;