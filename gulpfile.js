const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const browserify = require('gulp-browserify');

// Basic usage
gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('js/index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dest/'));
});

gulp.task('build_js', function() {
  let src = './es6/*.js';
  gulp.src(src)
    // .pipe(watch(src,function() {
    //   gulp.start('browserify')
    // }))
    // .pipe(coffeescript({bare: true}).on('error', gutil.log))
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['browserify','build_js']);
