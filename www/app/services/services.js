angular.module('patientPing').factory('PatientItemsService', function($firebaseArray) {
  var itemsRef = new Firebase("https://mark-firebase-test.firebaseio.com/items");
  return $firebaseArray(itemsRef);
});
