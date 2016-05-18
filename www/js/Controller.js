angular.module('starter.controllers', [])

.controller('homeConttroller', function($scope) {

  $scope.programme = {
    jour1: {
        0 : {
          chaine : "tf1",
          titre : "bbb",
          heure : "20H45",
          durée : "bb",
          categorie : ""
        },
        1 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          durée : "bb",
          categorie : "bb"
        },
        2 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          durée : "bb",
          categorie : "bb"
        },
        3 :{
          chaine : "tf1",
          titre : "bb",
          heure : "20H45",
          durée : "bbb",
          categorie : "bbb"
        },
        4 :{
          chaine : "france 2",
          titre : "bbb",
          heure : "20H45",
          durée : "bbb",
          categorie : "bb"
        },
        5 :{
          chaine : "tf1",
          titre : "bbb",
          heure : "20H45",
          durée : "bb",
          categorie : "bbb"
        }
      }
  }
console.log($scope.programme.jour1[4]);
  $scope.programme = function(){
    console.log('hello');
  }
});
