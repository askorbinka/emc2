// Define all deps
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    // notify = require('gulp-notify'),
    
    postcss = require('gulp-postcss'),
    srcmaps = require('gulp-sourcemaps'),
    
    processors = [
        require('autoprefixer-core')({ browsers: ['last 1 versions']}),
        // require('css-mqpacker'),
        // require('csswring'),
        require('postcss-nested'),
        require('postcss-mixins'),
        // require('postcss-pxtorem'),
        // require('postcss-assets'),
        // require('postcss-grid'),
        require('postcss-simple-extend'),
        require('postcss-simple-vars')
        // require('postcss-vertical-rhythm')
    ];
    
// Create tasks
gulp.task('scripts', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
        // .pipe(notify({
        //   message: "JS is uglified and concatenated!"
        // }));
});
    
gulp.task('css', function () {
    return gulp.src('./css/**/*.css')
        .pipe(srcmaps.init())
        .pipe(postcss(processors))
        .pipe(concat('all.css'))
        .pipe(srcmaps.write('./'))
        .pipe(gulp.dest('./build'));
        // .pipe(notify({
        //   message: "PostCss is compiled!"
        // }));
});

// Run tasks
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('./js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('./css/**/*.css', ['css']);
   // Watch image files
  gulp.watch('./images/**/*', ['images']);
});

gulp.task('default', ['watch']);