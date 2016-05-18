angular.module('starter.controllers', [])

.controller('homeConttroller', function($scope, $stateParams, $ionicModal, $http) {

    getProgram($stateParams.categorie);
    function getProgram() {
        $http.post("http://localhost/zype/www/script/getprogram.php?categorie=" + $stateParams.categorie).success(function (data) {
            $scope.programs = data;
        });
    };

});
