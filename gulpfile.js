
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var exec = require('child_process').exec;

// flask server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    var proc = exec('python app.py');

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["html/*.html","css/*.css"]).on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        ;
});

gulp.task('default', ['serve']);