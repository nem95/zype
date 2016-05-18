angular.module('starter.controllers', [])

    .controller('ListsConttroller', function ($scope, $stateParams, $ionicModal, $http) {

        getProgram($stateParams.categorie);
        function getProgram() {
            $http.post("http://localhost/zype/www/script/getprogram.php?categorie=" + $stateParams.categorie).success(function (data) {
                $scope.programs = data;
            });
        };

    })

    .controller('InfoConttroller', function ($scope, $stateParams, $ionicModal, $http) {
        
        getInfo($stateParams.title);
        function getInfo() {
            $http.post("http://localhost/zype/www/script/getinfo.php?title=" + $stateParams.title).success(function (data) {
                $scope.info = data;
            });
        };

    });
