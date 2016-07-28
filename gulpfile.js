var gulp = require('gulp'),
    csso = require('gulp-csso'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('build', function() {
    // gulp.src([ './assets/js/src/*.js', ])
    //     .pipe(concat('app.js'))
    //     .pipe(gulp.dest('./assets/js'));

    gulp.src(['./assets/css/src/*.css'])
        .pipe(concat('styles.min.css'))
        // .pipe(sass())
        .pipe(myth())
        .pipe(csso())
        .pipe(gulp.dest('./assets/css'));
});
