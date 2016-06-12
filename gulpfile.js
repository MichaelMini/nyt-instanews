var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('default', ['uglify', 'scss', 'browser-sync']);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
      }
  });
});

// Watch tasks
gulp.watch('./src/js/*.js', ['uglify']);
gulp.watch('./src/style/*.scss', ['scss']);

gulp.watch(['./build/**/*.*', 'index.html'])
    .on('change', browserSync.reload);

gulp.task('scss', function(){
   return gulp.src('./src/style/*.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('./build'));
});
gulp.task('uglify', function(){
   return gulp.src('./src/js/*.js') // What files do we want gulp to consume?
        .pipe(uglify()) // Call the uglify function on these files
        .pipe(gulp.dest('./build')); // Where do we put the result?
});