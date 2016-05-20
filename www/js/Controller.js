angular.module('starter.controllers', [])

    .controller('ListsConttroller', function ($scope, $stateParams, $ionicModal, $http) {
        getProgram($stateParams.categorie);
        function getProgram() {
            $http.post("http://timothee-dorand.fr/zype/www/script/getprogram.php?categorie=" + $stateParams.categorie).success(function (data) {
                $scope.programs = data;
            });
        };

        $scope.addCategory = function(data){
          console.log(data);
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
