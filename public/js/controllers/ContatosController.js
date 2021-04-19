angular.module('ifsp').controller('ContatosController', 
function($scope){
  $scope.qual_lista = 'contatos'
  $scope.total = 0;
  $scope.incrementa = ()=>{
    $scope.total++;
  }

  $scope.contatos = [
    {"_id": 1, "nome": "Jonas Beto", "email": "exemplo@email.com"},
    {"_id": 2, "nome": "Roberto Baggio", "email": "craque_de_bola@email.com"},
    {"_id": 3, "nome": "Rogério Ceni", "email": "m1to@email.com"},
  ];

  $scope.filtro = '';
})