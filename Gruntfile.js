'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    ts: {
      default : {
        src: ['scripts/**/*.ts', '!node_modules/**/*.ts'],
        options: {
          module: 'commonjs',
          comments: true
        }        
      }
    },

  });

  grunt.loadNpmTasks('grunt-ts');
  
  grunt.registerTask('build', [
    'ts'    
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
