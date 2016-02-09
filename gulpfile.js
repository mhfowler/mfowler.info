
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var exec = require('child_process').exec;
var sleep = require('sleep');


var flask_proc;

// flask server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        notify: false,
        proxy: "127.0.0.1:5000"
    });

    flask_proc = exec('python app/app.py');

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["templates/*.html","static/css/*.css"]).on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("static/css"))
        ;
});

gulp.task('default', ['serve']);