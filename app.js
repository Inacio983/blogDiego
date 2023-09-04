angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens').
      success(function(data) {
        data.forEach(data => {
          console.log(data.title);
        });
        console.log(data[0]);
          $scope.publicacoes = data;
      }
  );
});


angular.module('blog').controller('Posta', function ($scope, ){

  function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
    }
    var imagem = getParameter('imagem');
    console.log(imagem);
    var titulo = getParameter('titulo');
    console.log(titulo);
    var descricao = getParameter('descricao');
    console.log(descricao);
    let postagem = new Object();
    postagem.image = imagem;
    postagem.title = titulo;
    postagem.description = descricao;
  
          $scope.postagem = postagem;
});