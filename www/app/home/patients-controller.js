(function () {
  'use strict';

  angular.module('patientPing').controller('PatientsCtrl', ['$scope', '$state', '$ionicHistory', 'PatientItemsService', PatientsCtrl]);

  function PatientsCtrl($scope, $state, $ionicHistory, PatientItemsService) {
    var vm = this;

    // for now not sure if we want the details view to be in history after changing to new or settings. This can be handled better.
    if($ionicHistory.currentStateName() === 'home.new' || $ionicHistory.currentStateName() === 'home.settings') {
      $ionicHistory.clearHistory();
    }

    vm.items = PatientItemsService;

    // add new patient
    vm.addPatient = function() {
     /* var name = prompt("What do you need to buy?");
      if (name) {
        $scope.items.$add({
          "name": name
        });
      }*/
    };

    // navigate to details view
    vm.itemDetail = function(item){
      $state.go('home.patient-detail', { id: item.$id })
    }

  };
})();
