var gulp = require('gulp'); // Require is Node specific, assumes Node Modules
var sass = require('gulp-sass'); 

gulp.task('default', ['watch']); 

gulp.task('style', function() {
    gulp.src('./sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
}); 

gulp.task('watch', function() {
    // Any folder or file with .scss, run the 'style' task
    gulp.watch('./sass/**/*.scss', ['style']); 
}); 