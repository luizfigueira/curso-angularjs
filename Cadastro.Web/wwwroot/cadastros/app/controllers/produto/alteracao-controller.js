(function () {
    'use strict';
    angular.module('mwa').controller('ProdutoAlteracaoCtrl', ProdutoAlteracaoCtrl);

    ProdutoAlteracaoCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function ProdutoAlteracaoCtrl($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        vm.produto = {};

        vm.salvar = salvar;

        activate();

        function activate() {
            listarProduto();
        }

        function listarProduto() {
            angular.forEach($rootScope.produtos, function (value, key) {
                if (value.id == id) 
                {
                    vm.produto = value;
                }
            });
        }

        function salvar() {
            angular.forEach($rootScope.produtos, function (value, key) {
                if (value.id == id) {
                    $rootScope.produtos[key] = value;                    
                }
            });
            toastr.success('Produto <strong>' + vm.produto.nome + '</strong> atualizado com sucesso', 'Produto Atualizado');
            localStorage.removeItem(SETTINGS.PRODUTOS);
            localStorage.setItem(SETTINGS.PRODUTOS, angular.toJson($rootScope.produtos));
            $location.path('/produtos');
        }
    };
})();