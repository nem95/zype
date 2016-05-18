angular.module('starter.controllers', [])

<<<<<<< HEAD
.controller('homeConttroller', function($scope) {
    /*Category
    * FILMS:
    * Téléfilm
    * Documentaire
    * Drame
    * Société
    * Policier
    * Suspense
    * Action
    * 
    * 
    * SERIES TV:
    * Drame TV
    * Policier TV
    * Suspense TV
    * Action TV
    * 
    * */

  $scope.programme = {
    jour1: {
        0 : {
          chaine : "tf1",
          titre : "Grey's Anatomy",
          heure : "20H55",
          duree : "300min",
          categorie : "Drame TV"
        },
        1 :{
          chaine : "fr2",
          titre : "La smala s'en mele",
          heure : "20H45",
          duree : "120min",
          categorie : "Téléfilm"
        },
        2 :{
          chaine : "fr3",
          titre : "Des racines et des ailes",
          heure : "21H",
          duree : "110min",
          categorie : "Documentaire"
        },
        3 :{
          chaine : "canal+",
          titre : "Trois souvenirs de ma jeuness",
          heure : "21H",
          duree : "120min",
          categorie : "Drame"
        },
        4 :{
          chaine : "fr5",
          titre : "Toutankhamon, l'enquête",
          heure : "20H45",
          duree : "120min",
          categorie : "Documentaire"
        },
        5 :{
          chaine : "m6",
          titre : "Maison à vendre",
          heure : "20H45",
          duree : "120min",
          categorie : "Société"
        }
      }
      ,jour2: {
        0 : {
          chaine : "tf1",
          titre : "Alice Nevers, le juge est une femme",
          heure : "20H55",
          duree : "65min",
          categorie : "Policier TV"
        },
        1 :{
          chaine : "fr2",
          titre : "La smala s'en mele",
          heure : "20H45",
          duree : "120min",
          categorie : "Téléfilm"
        },
        2 :{
          chaine : "fr3",
          titre : "Amour",
          heure : "20H55",
          duree : "125min",
          categorie : "Drame"
        },
        3 :{
          chaine : "canal+",
          titre : "The Five",
          heure : "21H",
          duree : "45min",
          categorie : "Suspense TV"
        },
        4 :{
          chaine : "fr5",
          titre : "La grande libraire",
          heure : "20H45",
          duree : "95min",
          categorie : "Litteraire"
        },
        5 :{
          chaine : "m6",
          titre : "Scorpion",
          heure : "20H55",
          duree : "55min",
          categorie : "Action TV"
        }
      },
    jour3: {
        0 : {
          chaine : "tf1",
          titre : "bbb",
          heure : "20H45",
          duree : "120min",
          categorie : ""
        },
        1 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          duree : "120min",
          categorie : "bb"
        },
        2 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          duree : "120min",
          categorie : "bb"
        },
        3 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          duree : "120min",
          categorie : "bbb"
        },
        4 :{
          chaine : "france 2",
          titre : "bbb",
          heure : "20H45",
          duree : "120min",
          categorie : "bb"
        },
        5 :{
          chaine : "tf1",
          titre : "bbb",
          heure : "20H45",
          duree : "120min",
          categorie : "bbb"
        }
      }
  }
console.log($scope.programme.jour1[4]);
  $scope.programme = function(){
    console.log('hello');
  }
});
=======
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
>>>>>>> 84fe0bf8b8419b8450811b5c109cc5187e19f4f8
