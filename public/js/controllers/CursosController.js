angular.module('ifsp').controller('CursosController', 
function($scope){
  $scope.qual_lista = 'cursos'
  $scope.total = 0;
  $scope.incrementa = ()=>{
    $scope.total++;
  }
  $scope.cursos = [
    {"_id": 1, "curso": "Engenharia de Produção", "coordenador": "prof_de_engenharia@email.com"},
    {"_id": 1, "curso": "Psicologia", "coordenador": "prof_de_psicologia@email.com"},
    {"_id": 1, "curso": "Direito", "coordenador": "prof_de_direito@email.com"}
  ];

  $scope.filtro = '';
})