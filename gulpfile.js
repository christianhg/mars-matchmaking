(function() {
  'use strict';

  var angularFilesort = require('gulp-angular-filesort');
  var autoprefixer = require('gulp-autoprefixer');
  var browserSync = require('browser-sync');
  var concat = require('gulp-concat');
  var gulp = require('gulp');
  var jshint = require('gulp-jshint');
  var minifyCSS = require('gulp-minify-css');
  var ngAnnotate = require('gulp-ng-annotate');
  var plumber = require('gulp-plumber');
  var sass = require('gulp-ruby-sass');
  var stripDebug = require('gulp-strip-debug');
  var stylish = require('jshint-stylish');
  var uglify = require('gulp-uglify');

  gulp.task('css', function() {
    var src = './src/scss/app.scss';
    var dest = './build/css/';

    return sass(src)
      .pipe(plumber())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(dest));
  });

  gulp.task('css-vendor', function() {
    var src = [
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ];
    var dest = './build/css/';

    gulp.src(src)
      .pipe(plumber())
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(dest));
  });

  gulp.task('fonts-vendor', function() {
    var src = [
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
      'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
    ];
    var dest = './build/fonts/';

    gulp.src(src)
      .pipe(plumber())
      .pipe(gulp.dest(dest));
  });

  gulp.task('html', function() {
    var src = [
      './src/**/*.html'
    ];
    var dest = './build';

    gulp.src(src)
      .pipe(gulp.dest(dest));
  });

  // gulp.task('index', function() {
  //   var src = './src/index.html';
  //   var dest = './build';
  //
  //   gulp.src(src)
  //     .pipe(plumber())
  //     .pipe(gulp.dest(dest));
  // });

  gulp.task('js', function() {
    var src = [
      './src/**/*.js'
    ];
    var dest = './build/js/';

    gulp.src(src)
      .pipe(plumber())
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(ngAnnotate({add: true, single_quotes: true}))
      .pipe(angularFilesort())
      .pipe(concat('app.js'))
      // .pipe(stripDebug())
      // .pipe(uglify())
      .pipe(gulp.dest(dest));
  });

  gulp.task('js-vendor', function() {
    var src = [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ];
    var dest = './build/js/';

    gulp.src(src)
      .pipe(plumber())
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(dest));
  });

  gulp.task('serve', function() {
    var files = [
      './build/**/*',
    ];

    browserSync.init(files, {
      server: {
        baseDir: './build'
      },
      notify: false,
      open: false,
      ghostMode: false
    });

    //  Watch for changes
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.scss', ['css']);
  });

  gulp.task('default', ['css', 'css-vendor', 'fonts-vendor', 'html', 'js', 'js-vendor'], function(){});
  gulp.task('s', ['default', 'serve']);

})();
