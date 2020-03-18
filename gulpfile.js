const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const paths = {
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'public/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'public/js/'
  },
  views: {
    src: 'views/**/*.pug'
  }
};

function clean() {
  return del(['public/css/*', 'public/js/*']);
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'styles',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts), watch);

exports.default = build;