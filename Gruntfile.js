module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({

		jshint: {
			all: ['app/js/**/*.js'],
			options: {
				bitwise: false,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				newcap: true,
				noarg: true,
				noempty: true,
				nonew: true,
				plusplus: false,
				quotmark: true,
				regexp: true,
				trailing: true,
				maxparams: false,
				maxdepth: false,
				maxstatements: 50,
				jshintrc: true
			}
		},

		karma: {
			unit: {
				configFile: 'test/karma.conf.js'
			}
		},

		explainjs: {
			dist: {
				options: {
					showFilename: true // default is false
				},
				files: [{
					src: ['./app/js/app.js'],
					dest: 'dist/explainjs/explain.html'
				}]
			},
		},



	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-explainjs');

	grunt.registerTask('doc', ['explainjs']);
	grunt.registerTask('default', ['karma', 'jshint']);

};