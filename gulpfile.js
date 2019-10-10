const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

exports.default = () => {
 return gulp.src('./src/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
};