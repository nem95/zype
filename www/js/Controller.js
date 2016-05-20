angular.module('starter.controllers', ['ngStorage',])

    .controller('ListsConttroller', function ($scope, $stateParams, $ionicModal, $http, $state, $localStorage) {

      $scope.$storage = $localStorage.$default({
          liste:'',
          currentCategorie:'',
        });

        $scope.categorie = ["film-policier"];
        $scope.program = [];
        /*$scope.addCategory = function(data){
          $scope.categorie.push(data);
          console.log($scope.categorie);
        }*/
        $scope.addCategory = function(data){


          console.log(data);

          angular.forEach($scope.categorie, function(value, key) {

            console.log(data);
            console.log(key);
            console.log(value);

            if (data == value) {
              console.log('hello');
              $scope.categorie.splice(key, 1);
            }else {
              $scope.categorie.push(data);

            }

            console.log($scope.categorie);

          });

        }

        $scope.getCategory = function(data){
          console.log(data);
          if (data != 0) {
            $state.transitionTo("lists");
          }
          //on reset le localstorage a chaque nouvel selection
          $localStorage.$reset();

          $scope.listCategory = data; // $scope.listCategory = array []

          //on boucle sur le tableau $scope.listCategory
          angular.forEach($scope.listCategory, function(value, key){

            //console.log(value);
            // on fait la requete au serveur pour chaque valeur du tableau
            $http.post("http://timothee-dorand.fr/zype/www/script/getprogram.php?categorie=" + value).then(function (res) {
              var data = res.data;
              //on ajouter les resultats de la requete au tableau program déclarer tout en haut
              $scope.program.push(data);

              // on dit que $scope.programs est egale au tableau program
              $scope.programs = $scope.program;


              console.log($scope.programs[0]);
              // on ajoute le tout au localstorage
              $scope.$storage.currentCategorie = $scope.programs;
              console.log($scope.$storage.currentCategorie);

            });
          });
        }
        console.log($scope.$storage.currentCategorie);

    })

    .controller('InfoConttroller', function ($scope, $stateParams, $ionicModal, $http) {

        getInfo($stateParams.title);
        function getInfo() {
            $http.post("http://timothee-dorand.fr/zype/www/script/getinfo.php?title=" + $stateParams.title).success(function (data) {
                $scope.info = data;
            });
        };

    });

/*
    .controller('SimpleController',function ($scope,$http){

        $scope.chooseProgramForm = function (add) {
            var data= {
                comedie:$scope.newChoice.comedie,
                policier:$scope.newChoice.policier,
                drame:$scope.newChoice.drame
            }
            $http.post("http://localhost:8888/zype/www/script/chooseProgramForm.php",
                {
                    'comedie': $scope.newChoice.comedie,
                    'policier': $scope.newChoice.policier,
                    'drame': $scope.newChoice.drame
                })
                .success(function (data, status, headers, config) {
                    console.log("inserted Successfully");
                });
            $scope.choixprogramme.push(data);
            $scope.newChoice = {
                comedie:"",
                policier:"",
                drame:""
            };
        };

    })*/

/*

    .controller('myController', ['$scope', 'PhpService',
        function ($scope, PhpService) {
            $scope.usuario = {};
            $scope.enviar = function () {
                var enviar = {};
                enviar = $.param({"enviado": JSON.stringify($scope.usuario)}); //convertimos a url string todos los parametros para enviarlos como tipo 'form'
                PhpService.enviar(enviar);
            };
        }]);*/
