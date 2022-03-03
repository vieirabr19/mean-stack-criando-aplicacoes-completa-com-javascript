angular.module('alurapic')
  .factory('tokenInterceptor', function ($window, $q, $location){
    var interceptor = {};

    interceptor.response = function(response) {
      var token = response.headers('x-access-token');
      if(token) {
        console.log('Token armazenado no navegador');
        $window.sessionStorage.token = token;
      }
      return response;
    }

    interceptor.request = function(config) {
      // enviar o token na requisição
      config.headers = config.headers || {};
      if($window.sessionStorage.token) {
        console.log('Enviando token já obtido em cada requisição');
        config.headers['x-access-token'] = $window.sessionStorage.token;
        console.log('Adicionando token no header da requisição para ser enviado ao servidor');
      }
      return config;
    }

    interceptor.responseError = function(rejection) {
      if(rejection != null && rejection.status === 401){
        console.log('Removendo token da sessão');
        delete $window.sessionStorage.token;
        $location.path('/login');
      }
      return $q.reject(rejection);
    }

    return interceptor;
  });