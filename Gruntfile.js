module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        options:{
          style: 'expanded'
        },
        files: {
          'assets/bootstrap/css/bootstrap.css': 'assets/bootstrap/bootstrap.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['sass']);
}
