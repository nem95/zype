angular.module('starter.controllers', [])

.controller('homeConttroller', function($scope, $stateParams) {

  $scope.programme = function(data){
    console.log($stateParams.categorie);

    $scope.categorie = $stateParams.categorie;

    $scope.programme = [
      jour1 = [
          0 =[
            chaine = "tf1",
            titre = "bbb",
            heure = "20H45",
            durée = "bb",
            categorie = "science-fiction"
          ],
          1 = [
            chaine = "tf1",
            titre = "bb",
            heure = "20H45",
            durée = "bb",
            categorie = "bb"
          ],
          2 =[
            chaine = "tf1",
            titre = "bb",
            heure = "20H45",
            durée = "bb",
            categorie = "sf"
          ],
          3 = [
            chaine = "tf1",
            titre = "bb",
            heure = "20H45",
            durée = "bbb",
            categorie = "action"
          ],
          4 = [
            chaine = "france 2",
            titre = "bbb",
            heure = "20H45",
            durée = "bbb",
            categorie = "science-fiction"
          ],
          5 = [
            chaine = "tf1",
            titre = "bbb",
            heure = "20H45",
            durée = "bb",
            categorie = "action"
          ]
        ]
    ];
     console.log($scope.programme);



  }
});
