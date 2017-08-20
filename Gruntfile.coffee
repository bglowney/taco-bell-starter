module.exports = (grunt) ->
  config =
    pkg: grunt.file.readJSON 'package.json'
    clean: ['src/**/*.js', 'dist/**/*', 'tst/**/*.js']
    ts:
      client:
        src: ['src/client/**.ts']
        options:
          module: 'commonjs'
          sourceMap: false
          target: 'es6'
      server:
        src: ['src/*.ts','src/server/**.ts']
        options:
          module: 'commonjs'
          moduleResolution: 'Node'
          target: 'es6'
          sourceMap: false
      tst:
        src: ['tst/**.ts']
        options:
          module: 'commonjs'
          moduleResolution: 'Node'
          target: 'es6'
          sourceMap: false
    browserify:
      dist:
        files:
          'dist/web/app.bundled.js': ['src/client/main.js']
    copy:
      server:
        expand: true
        cwd: 'src/'
        src: ['server/**.js', '*.js']
        dest: 'dist/'
      static:
        expand: true
        cwd: 'src/static/'
        src: '**'
        dest: 'dist/web/'
    execute:
      server:
        src: ['dist/server/server.js']
        options:
          cwd: 'dist/web/'
    mochaTest:
      'end-to-end':
        src: 'tst/end-to-end.js'

  grunt.initConfig config

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-ts'
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-execute'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-mocha-test'

  grunt.registerTask 'default', ['ts:server', 'ts:client', 'ts:tst', 'browserify:dist', 'copy']
  grunt.registerTask 'serve', ['execute:server']
  grunt.registerTask 'end-to-end', ['mochaTest:end-to-end']