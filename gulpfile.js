var gulp = require('gulp'); // Require is Node specific, assumes Node Modules
var wait = require('gulp-wait'); 
var sass = require('gulp-sass'); 

gulp.task('default', ['watch']); 

gulp.task('style', function() {
    gulp.src('./src/sass/app.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}); 

gulp.task('watch', function() {
    // Any folder or file with .scss, run the 'style' task
    gulp.watch('./src/sass/**/*.scss', ['style']); 
}); 