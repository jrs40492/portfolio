const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const modernizr = require('gulp-modernizr');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const paths = {
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'public/css/'
  },
  scripts: {
    src: ['src/js/**/*.js', '!src/js/**/*.min.js'],
    dest: 'public/js/'
  },
  images: {
    src: ['src/images/**/*.{jpg,png}'],
    dest: 'public/images/'
  },
  favicon: {
    src: 'src/images/favicon.ico',
    dest: 'public/images'
  }
};

function clean() {
  return del(['public/css/*', 'public/js/*', 'public/images/*']);
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

function modernize() {
  return gulp.src(paths.scripts.src)
    .pipe(modernizr('1_modernizr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/'));
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function images_min() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function images_webp() {
  return gulp.src(paths.images.src)
    .pipe(webp())
    .pipe(gulp.dest(paths.images.dest));
}

function favicon() {
  return gulp.src(paths.favicon.src)
    .pipe(gulp.dest(paths.favicon.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, gulp.series(modernize, scripts));
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, images);
}

const images = gulp.parallel(images_min, images_webp, favicon);

const build = gulp.series(clean, modernize, gulp.parallel(styles, scripts, images), watch);

exports.default = build;