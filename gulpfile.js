var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost/sitemuranodesign"
    });

    gulp.watch("**/*.php").on('change', browserSync.reload);
    gulp.watch("stylesheets/*.css").on('change', browserSync.reload);
});