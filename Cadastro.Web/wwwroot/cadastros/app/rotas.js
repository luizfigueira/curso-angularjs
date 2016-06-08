(function () {
    'use strict';

    angular.module('mwa').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/home/index.html'
            })
            .when('/produtos', {
                controller: 'ProdutoConsultaCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/produto/consulta.html'
            })
            .when('/produtos/inclusao', {
                controller: 'ProdutoInclusaoCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/produto/inclusao.html'
            })
            .when('/produtos/alteracao/:id', {
                controller: 'ProdutoAlteracaoCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/produto/alteracao.html'
            })
            .when('/produtos/exclusao/:id', {
                controller: 'ProdutoExclusaoCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/produto/alteracao.html'
            });
    });
})();