module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                compress: true
            },
            my_target: {
                files: {
                    'src/assets/js/all.min.js': ['src/assets/js/jquery-3.2.1.js', 'src/assets/js/ie10-viewport-bug-workaround.js']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/assets/css/',
                src: ['bootstrap.css', 'narrow-jumbotron.css'],
                dest: 'src/assets/css/',
                ext: '.min.css'
            }
        },
        concat: {
            basic: {
                src: ['src/assets/css/bootstrap.min.css', 'src/assets/css/narrow-jumbotron.min.css'],
                dest: 'src/assets/css/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify', 'cssmin', 'concat']);
};
