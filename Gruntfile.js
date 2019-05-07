const sass = require('node-sass');
const webp = require('imagemin-webp');
const png = require('imagemin-optipng');
const jpeg = require('imagemin-jpegtran');

module.exports = grunt => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      pug: {
        files: ['views/*.pug', 'views/projects/*.pug']
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify', 'jshint']
      },
      images: {
        files: ['src/images/*'],
        tasks: ['imagemin']
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/sass',
            src: ['*.scss'],
            dest: 'public/css',
            ext: '.css'
          }
        ]
      },
      options: {
        implementation: sass,
        sourceMap: true
      }
    },
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: ['src/js/*.js', '!src/js/modernizr.js', '!src/js/main.js'],
        dest: 'src/js/main.js'
      }
    },
    uglify: {
      my_target: {
        options: {
          preserveComments: false
        },
        files: {
          'public/js/main.min.js': ['src/js/main.js']
        }
      }
    },
    cssmin: {
      my_target: {
        files: [
          {
            expand: true,
            cwd: 'public/css/',
            src: ['*.css', '!*.min.css'],
            dest: 'public/css/',
            ext: '.min.css'
          }
        ]
      }
    },
    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    jshint: {
      beforeconcat: [
        'Gruntfile.js',
        'src/js/*.js',
        '!src/js/modernizr.js',
        '!src/js/main.js'
      ],
      options: {
        esversion: 6
      }
    },
    modernizr: {
      dist: {
        crawl: false,
        customTests: [],
        dest: 'public/js/modernizr.js',
        tests: ['touchevents', 'webp'],
        options: ['setClasses', 'html5printshiv', 'addTest'],
        uglify: true
      }
    },
    imagemin: {
      webp: {
        options: {
          use: [
            webp({
              quality: 75
            })
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'src/images/',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'public/images',
            ext: '.webp'
          }
        ]
      },
      png: {
        options: {
          use: [png()]
        },
        files: [
          {
            expand: true,
            cwd: 'src/images/',
            src: ['**/*.png'],
            dest: 'public/images'
          }
        ]
      },
      jpeg: {
        options: {
          use: [jpeg()]
        },
        files: [
          {
            expand: true,
            cwd: 'src/images/',
            src: ['**/*.{jpg,jpeg}'],
            dest: 'public/images',
            ext: '.jpg'
          }
        ]
      }
    },
    copy: {
      images: {
        files: [
          {
            expand: true,
            cwd: 'src/images',
            src: ['*.ico'],
            dest: 'public/images/'
          }
        ]
      }
    }
  });

  grunt.registerTask('dev', [
    'uglify',
    'modernizr',
    'sass',
    'cssmin',
    'imagemin',
    'copy',
    'express',
    'watch'
  ]);

  grunt.registerTask('build', [
    'uglify',
    'modernizr',
    'sass',
    'cssmin',
    'copy',
    'imagemin'
  ]);
};
