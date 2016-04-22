var loja = angular.module('loja', ['ngResource']);

loja.factory('Produto', function($resource) {
  return $resource('/produtos/:produtoId', {produtoId: '@_id'}, {update: {method: 'PUT'}});
});

loja.controller('lojaCtrl', function ($scope, Produto) {
  $scope.produtos = [];
  $scope.produto  = {};

  var carregaProdutos = function() {
    Produto.query(function(response) {
      $scope.produtos = response;
    });
  };

  carregaProdutos();

  $scope.cadastrarProduto = function() {
    var produto = new Produto($scope.produto);
    produto.$save();
    $scope.produto = {};
    carregaProdutos();
  }

  $scope.editar = function(p) {
    Produto.get({produtoId: p._id}, function(produto) {
      $scope.produto = produto;
    });
  }

  $scope.novo = function() {
    $scope.produto = {};
  }

  $scope.atualizar = function() {
    Produto.update(
     {produtoId: $scope.produto._id}, 
     $scope.produto, 
     function(produto) {
      $scope.produto = {};
      carregaProdutos();
    });
  }
});