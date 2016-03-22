module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      map: ['assets/bootstrap/**/*.map','assets/js/**/*.map'],
      css: ['assets/bootstrap/css/*.css'],
      js: ['assets/js/dest/*.js']
    },
    jshint: {
      all: ['assets/js/class/*.js']
    },
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
    concat: {
      options: {
        //separator: ';',
        banner: '/* <%=pkg.name%> - v<%=pkg.version%> - <%=grunt.template.today("yyyy-mm-dd")%> */\n'
      },
      dist: {
        src: ['assets/js/class/reservation.js','assets/js/class/creater.js','assets/js/class/message.js'],
        dest: 'assets/js/dest/<%=pkg.name%>.js',
      },
    },
    uglify: {
      dist: {
        options: {
          mangle: true,
          preserveComments: 'some',
          banner: '/* <%=pkg.name%> - v<%=pkg.version%> - <%=grunt.template.today("yyyy-mm-dd")%> */\n'
        },
        files: {
          'assets/js/dest/<%=pkg.name%>.min.js': ['assets/js/dest/<%=pkg.name%>.js'],
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['clean','jshint','sass','concat','uglify']);
  grunt.registerTask('build-css',['sass']);
  grunt.registerTask('build-js',['jshint','concat','uglify']);
}
