const webp = require('imagemin-webp');
const png = require('imagemin-optipng');
const jpeg = require('imagemin-jpegtran');

module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'public/css',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'public/css'
        }
      }
    },
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
        tasks: ['concat', 'jshint']
      },
      images: {
        files: ['src/images/*'],
        tasks: ['imagemin']
      }
    },
    sass: {
      dist: {
        options: {
          compass: true
        },
        files: {
          'public/css/styles.css': 'src/sass/styles.scss',
          'public/css/resume.css': 'src/sass/resume.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'public/js/main.min.js'
      }
    },
    uglify: {
      options: {
        manage: false,
        preserveComments: 'all'
      },
      my_target: {
        files: {
          'public/js/main.min.js': ['src/js/*.js']
        }
      }
    },
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'public/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css/',
          ext: '.min.css'
        }]
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
      beforeconcat: ['Gruntfile.js', 'src/js/*.js', 'test/js/*.js'],
      afterconcat: ['public/js/main.js'],
      options: {
        esversion: 6,
        globals: {
          $: true
        }
      }
    },
    // imagemin: {
    //   webp: {
    //     options: {
    //       use: [
    //         webp({
    //           quality: 75
    //         })
    //       ]
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/images/',
    //       src: ['**/*.{png,jpg,jpeg,gif}'],
    //       dest: 'public/images',
    //       ext: '.webp'
    //     }]
    //   },
    //   png: {
    //     options: {
    //       use: [png()]
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/images/',
    //       src: ['**/*.png'],
    //       dest: 'public/images'
    //     }]
    //   },
    //   jpeg: {
    //     options: {
    //       use: [jpeg()]
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/images/',
    //       src: ['**/*.{jpg,jpeg}'],
    //       dest: 'public/images',
    //       ext: '.jpg'
    //     }]
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dev', [
    'express',
    'imagemin',
    'uglify',
    'cssmin',
    'watch',
  ]);
};
