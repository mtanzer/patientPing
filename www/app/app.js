// Ionic Starter App
angular.module('patientPing', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
      abstract: false,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.patients', {
      url: '/patients',
      views: {
        'tab-patients': {
          templateUrl: 'app/home/patients.html'
        }
      }
    })

    .state('home.patient-detail', {
      url: '/patients/detail/:id',
      views: {
        'tab-patients': {
          templateUrl: 'app/home/patient-detail.html',
        }
      }
    })

    .state('home.new', {
      url: '/new',
      views: {
        'tab-new': {
          templateUrl: 'app/home/patient-new.html'
        }
      }
    })

    .state('home.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'app/home/settings.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/home');
  $ionicConfigProvider.views.maxCache(0);
  //$ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
});
