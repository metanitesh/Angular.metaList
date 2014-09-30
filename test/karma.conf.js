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
      'app/app-components/app.js',
      'app/app-components/storage/*.js',
      'app/app-components/common/services/*.js',

      'app/app-components/list/**/*.js',
      'app/app-components/task/**/*.js',

      'test/unit/storage/*.js',
      'test/unit/common/*.js',

      'test/unit/list/*.js',
      // 'test/unit/task/*.js',

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
