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
		}



	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['jshint', 'karma']);

};