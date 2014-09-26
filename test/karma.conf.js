module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    
    files: [
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app-components/**/*.js',
      'test/unit/**/*.js',
      'app/app-components/**/*.html',
    ],

    
    preprocessors: {
      'app/app-components/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'app/'

    },

    singleRun: true,

    browsers: ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
    ] 
  });
};
