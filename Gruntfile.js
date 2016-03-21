module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist_expanded: {
        options:{
          style: 'expanded'
        },
        files: {
          'assets/bootstrap/css/bootstrap.css': 'assets/bootstrap/bootstrap.scss'
        }
      },
      dist_compressed: {
        options:{
          style: 'compressed'
        },
        files: {
          'assets/bootstrap/css/bootstrap.min.css': 'assets/bootstrap/bootstrap.scss'
        }
      }
    },
    uglify: {
	  dist_dialog: {
	    files: {
	      'assets/js/dialog.min.js': ['assets/js/dialog.js'],
  	    },
	  }
	}
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['sass','uglify']);
}
