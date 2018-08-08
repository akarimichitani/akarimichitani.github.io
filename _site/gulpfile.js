var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var imageResize = require('gulp-image-resize');

// gulp.task('images', function(){
//   return gulp.src('dev/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'));
// });

gulp.task('images', function(){
  return gulp.src('dev/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('task-name', function(callback) {
  runSequence('task-one', 'task-two', 'task-three', callback);
});

gulp.task('default', function (callback) {
  runSequence('clean:dist', 'images',
    callback
  );
});

// image resize for sp
gulp.task('width', function () {
  gulp.src('dev/images/sp/*.+(png|jpg|jpeg|gif|svg|ico)')
    .pipe(imageResize({
      width : 320
    }))
    .pipe(gulp.dest('dist/images/sp'));
});

// Gulp watch
gulp.task('watch', function(){
  gulp.watch('dev/images/**/*.+(png|jpg|jpeg|gif|svg|ico)', ['images']);
  gulp.watch('dev/images/sp/*.+(png|jpg|jpeg|gif|svg|ico)', ['width']);
});

gulp.task('default', ['images']);
gulp.task('default', ['width']);
