(function () {
    'use strict';
    angular.module('mwa').controller('ProdutoExclusaoCtrl', ProdutoExclusaoCtrl);

    ProdutoExclusaoCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function ProdutoExclusaoCtrl($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        activate();

        function activate() {
            excluirProduto();
        }

        function excluirProduto() {
            angular.forEach($rootScope.produtos, function (value, key) {
                if (value.id == id) {
                    toastr.success('Produto <strong>' + value.nome + '</strong> deletado com sucesso', 'Produto Deletado');
                    $rootScope.produtos.splice(key, 1);
                }
            });
            localStorage.removeItem(SETTINGS.PRODUTOS);
            localStorage.setItem(SETTINGS.PRODUTOS, angular.toJson($rootScope.produtos));
            $location.path('/produtos');

        }
    };
})();