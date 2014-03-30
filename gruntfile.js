module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-compass');
   grunt.initConfig({
      compass: {
         dev: {
            options: {
               config: 'config.rb'
            } //options
         } //dev
      }, //compass
      watch: {
         options: { livereload: true },
         sass: {
            files: ['todo/static/components/sass/*.scss'],
            tasks: ['compass:dev']
         }, //sass
         html: {
            files: ['todo/templates/todo/*.html']
         }
      } //watch
   }); //initConig
   grunt.registerTask('default', 'watch');
} // exports
