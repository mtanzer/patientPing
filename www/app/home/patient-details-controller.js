(function () {
  'use strict';

  angular.module('patientPing').controller('PatientDetailsCtrl', ['$scope', '$state', '$stateParams', '$ionicHistory', 'PatientItemsService', PatientDetailsCtrl]);

  function PatientDetailsCtrl($scope, $state, $stateParams, $ionicHistory, PatientItemsService) {
    var vm = this;
    console.log($state)
    console.log($stateParams.id)
    console.log(PatientItemsService.$getRecord($stateParams.id))
    //console.log(PatientItemsService.child('items').child($stateParams.id))
  };
})();
