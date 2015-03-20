module.exports = function(grunt){
	
	// Load Grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		watch: {
			karma: {
				files: ['angular-glossary.js', 'test/{,**/}*.js'],
				tasks: ['karma:unit']
			},
			js: {
				files: ['angular-glossary.js', 'test/{,**/}*.js', '*.css'],
				tasks: ['build']
			}
		},

		bump: {
			options: {
				commitMessage: 'chore: release v%VERSION%',
				commitFiles: ['package.json', 'bower.json', 'angular-glossary.min.js'],
				files: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			},
		},

		jshint: {
			all: ['Gruntfile.js', 'angular-glossary.js', 'test/angular-glossary.spec.js']
		},

		ngmin: {
			dist: {
				files: {
					'angular-glossary.min.js': ['angular-glossary.js']
					
				}
			}
		},

		'npm-contributors': {
			options: {
				commitMessage: 'chore: update contributors'
			}
		},

		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'angular-glossary.min.js': ['angular-glossary.min.js'],
					'angular-glossary.min.css': ['angular-glossary.min.css']
				}
			}
		},
		
		copy: {
			example: {
				expand:true,
				src: [
					'angular-glossary.js', 
					'angular-glossary.css', 
					'bower_components/angular-starts-with-filter/angular-starts-with-filter.js',
					'bower_components/angular/angular.min.js'
				],
				dest: 'example/',
				flatten: true,
				rename: function(dest, src){
					console.log(src);
					return dest + src;
				}
			}
		}
		
	});
	
	grunt.registerTask('test', [
		'jshint:all',
		'karma:unit'
	]);
	
	grunt.registerTask('build', [
		'jshint:all',
		'ngmin',
		'uglify',
		'copy:example'
	]);
	
	// Default task
	grunt.registerTask('default', ['watch']);
};