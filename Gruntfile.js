module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
          sourceMap: true,
          outputStyle: 'compressed',
      },
      dist: {
          files: {
              'styles/main.css': 'styles/main.scss'
          }
      },
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'main.js'],
      options: {
        "esversion": 6
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');



  // Default task(s).
  grunt.registerTask('default', ['sass']);

};

//check out these javascript tasks:
//jshint
//concat(js)
//uglify
