var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Watch Files For Changes & Reload
gulp.task('serve', () => {

  browserSync.init({
    server: {
      baseDir: "./"
    },
    // notify: false
  });

  gulp.watch(['index.html'], () => {
    browserSync.reload();
  });

});
