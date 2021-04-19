angular.module('ifsp', ['ngRoute'])

angular.module('ifsp', ['ngRoute']).config(function($routeProvider){
  $routeProvider.when('#/cursos', {
    templateUrl: 'partials/cursos.html',
    controller: 'CursosController'
  });
  
  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  });

  
  $routeProvider.when('/contatos/:contatoId', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatoController'
  });

  $routeProvider.otherwise({ redirectTo: '/contatos'});
});