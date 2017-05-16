'use strict'

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.initConfig({
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '**',
            dest: 'lib/',
            filter: function (filepath) {
              return (filepath.substr(filepath.length - 3) === 'css' || filepath.substr(filepath.length - 4) === 'scss' || filepath.substr(filepath.length - 4) === 'less')
            }
          }
        ]
      }
    }
  })

  grunt.registerTask('default', [
    'copy'
  ])
}
