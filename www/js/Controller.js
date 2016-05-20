angular.module('starter.controllers', [])

    .controller('ListsConttroller', function ($scope, $stateParams, $ionicModal, $http, $state) {


        $scope.categorie = [];
        $scope.programs = [];

        $scope.addCategory = function(data){
          $scope.categorie.push(data);
          console.log($scope.categorie);

          /*angular.forEach($scope.categorie, function(value, key) {

            var i = key + 1;
            console.log(data);
            console.log(value);

            if (data == value) {
              console.log('hello');
              $scope.categorie.splice(key );
            }

            i++;
            console.log(i);

          });*/


          //return  $scope.categorie;

        }

        $scope.getCategory = function(data){
          console.log(data);
          $scope.listCategory = data;
          angular.forEach($scope.listCategory, function(value, key){
            console.log(value);
            //value = "fiction" = []
            $http.post("http://timothee-dorand.fr/zype/www/script/getprogram.php?categorie=" + value).success(function (data) {
              $scope.program = data;
              $scope.programs.push($scope.program);

              console.log($scope.programs);
            });
          });

          $state.transitionTo("lists");

        }







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
