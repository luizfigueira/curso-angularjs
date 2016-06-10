(function () {
    'use strict';
    angular.module('mwa').controller('ProdutoInclusaoCtrl', ProdutoInclusaoCtrl);

    ProdutoInclusaoCtrl.$inject = ['$rootScope', '$location', 'SETTINGS'];

    function ProdutoInclusaoCtrl($rootScope, $location, SETTINGS) {
        var vm = this;
        var proximoId = 1;

        if ($rootScope.produtos.length > 0) {
            proximoId = $rootScope.produtos[$rootScope.produtos.length - 1].id + 1;
        }

        vm.produto = {
            id: proximoId,
            nome: '',
            unidadeMedida: '',
            fornecedor: '',
            preco: 0            
        };
        vm.salvar = salvar;

        activate();

        function activate() {
            
        }

   
        function salvar() {
            toastr.success('Produto <strong>' + vm.produto.nome + '</strong> cadastrado com sucesso', 'Produto Cadastrado');
            $rootScope.produtos.push(vm.produto);
            localStorage.removeItem(SETTINGS.PRODUTOS);
            localStorage.setItem(SETTINGS.PRODUTOS, angular.toJson($rootScope.produtos));
            $location.path('/produtos');            
        }        
    };
})();