var gulp      = require('gulp'),
  uglify      = require('gulp-uglify'),
  ngAnnotate  = require('gulp-ng-annotate');
  filter      = require('gulp-filter'),
  rename      = require('gulp-rename');

var config = {
  paths: {
    javascript: {
      src:  ['src/**/*.js'],
      dest: 'dist/'
    }
  }
};

gulp.task('scripts', function(){
  return gulp.src(config.paths.javascript.src)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(config.paths.javascript.dest));
});

gulp.task('default', ['scripts']);
