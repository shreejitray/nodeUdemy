/**
 * Created by schaud3 on 11/11/17.
 */

export default class HomeController {
    constructor ($rootScope,$scope,$state,$resource) {
        this.rootscope = $rootScope;
        this.scope = $scope;
        this.state = $state;
        this.resource = $resource;
        this.name = 'home controller'

        console.log('home controller initiated');
    }
}

HomeController.$inject = ['$rootScope','$scope','$state','$resource'];
