(function() {
  'use strict';

  var angularFilesort = require('gulp-angular-filesort');
  var autoprefixer = require('gulp-autoprefixer');
  var browserSync = require('browser-sync');
  var concat = require('gulp-concat');
  var flatten = require('gulp-flatten');
  var gulp = require('gulp');
  var inject = require('gulp-inject');
  var jshint = require('gulp-jshint');
  var minifyCSS = require('gulp-minify-css');
  var ngAnnotate = require('gulp-ng-annotate');
  var plumber = require('gulp-plumber');
  var sass = require('gulp-ruby-sass');
  var sourcemaps = require('gulp-sourcemaps');
  var stripDebug = require('gulp-strip-debug');
  var stylish = require('jshint-stylish');
  var uglify = require('gulp-uglify');
  var using = require('gulp-using');

  gulp.task('build:vendorFonts', function() {
    var src = [
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
    ];
    var dest = './build/fonts';

    gulp.src(src)
      .pipe(plumber())
      .pipe(gulp.dest(dest));
  });

  gulp.task('build:views', function() {
    var src = [
      './src/app/**/*.html'
    ];
    var dest = './build';

    gulp.src(src)
      .pipe(flatten())
      .pipe(gulp.dest(dest));
  });

  gulp.task('build:moveIndex', function() {
    return gulp.src('./src/index.html')
      .pipe(gulp.dest('./build'));
  });

  gulp.task('build:index', ['build:moveIndex'], function() {

  });

  gulp.task('build:compileAppCSS', function() {
    return sass('./src/scss/app.scss', { sourcemap: true})
      .pipe(sourcemaps.write())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('./build/css'))
  });

  gulp.task('build:injectAppCSS', ['build:index', 'build:compileAppCSS'], function() {
    return gulp.src('./build/index.html')
      .pipe(
        inject(
          gulp.src(['./build/css/app.css']),
            {relative: true, name: 'app'}
        )
      )
      .pipe(gulp.dest('./build'));
  });

  gulp.task('build:appCSS', ['build:injectAppCSS'], function() {

  });

  gulp.task('build:moveVendorCSS', function() {
    var vendorCSS = [
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ];

    return gulp.src(vendorCSS)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./build/css'));
  });

  gulp.task('build:injectVendorCSS', ['build:index', 'build:moveVendorCSS'], function() {
    return gulp.src('./build/index.html')
      .pipe(
        inject(
          gulp.src(['./build/css/vendor.css']),
            {relative: true, name: 'vendor'}
        )
      )
      .pipe(gulp.dest('./build'));
  });

  gulp.task('build:vendorCSS', ['build:injectVendorCSS'], function() {

  });

  gulp.task('build:moveAppJS', function() {
    return gulp.src(['./src/app/**/*.js'])
      .pipe(plumber())
      .pipe(flatten())
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(ngAnnotate({add: true, single_quotes: true}))
      .pipe(angularFilesort())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./build/js'));
  });

  gulp.task('build:injectAppJS', ['build:index', 'build:moveAppJS'], function() {
    return gulp.src('./build/index.html')
      .pipe(
        inject(
          gulp.src(['./build/js/app.js'])
            {relative: true, name: 'app'}
        )
      )
      .pipe(gulp.dest('./build'));
  });

  gulp.task('build:appJS', ['build:injectAppJS'], function() {

  });

  gulp.task('build:moveVendorJS', function() {
    var vendorJS = [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ];

    return gulp.src(vendorJS)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./build/js'));
  });

  gulp.task('build:injectVendorJS', ['build:index', 'build:moveVendorJS'], function() {
    return gulp.src('./build/index.html')
      .pipe(
        inject(
          gulp.src(['./build/js/vendor.js']),
            {relative: true, name: 'vendor'}
        )
      )
      .pipe(gulp.dest('./build'));
  });

  gulp.task('build:vendorJS', ['build:injectVendorJS'], function() {

  });

  gulp.task('serve', ['build'], function() {
    browserSync.init({
      server: './build',
      notify: false,
      open: false,
      ghostMode: false
    });
  });

  gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['build']);
  });

  gulp.task('build', ['build:index', 'build:appCSS', 'build:vendorCSS', 'build:appJS', 'build:vendorJS', 'build:views', 'build:vendorFonts'], browserSync.reload);

  gulp.task('dev', ['serve', 'watch']);
})();
