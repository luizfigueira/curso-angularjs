(function () {
    'use strict';
    angular.module('mwa').controller('ProdutoConsultaCtrl', ProdutoConsultaCtrl);

    ProdutoConsultaCtrl.$inject = ['$rootScope'];

    function ProdutoConsultaCtrl($rootScope) {
        var vm = this;
        vm.produtos = [];

        activate();

        function activate() {
            listarProdutos();
        }

        function listarProdutos() {

            vm.produtos = [];
            vm.produtos = $rootScope.produtos;

        }
    };
})();