/**
 * Created by schaud3 on 11/11/17.
 */

export default class LoginController {
    constructor ($rootScope,$scope,$state,$resource) {
        this.rootscope = $rootScope;
        this.scope = $scope;
        this.state = $state;
        this.resource = $resource;
        this.name = 'login controller'
        console.log('login controller initiated');
    }
}

LoginController.$inject = ['$rootScope','$scope','$state','$resource'];
