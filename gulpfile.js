'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    livereload = require('gulp-livereload'),
    del = require('del');

var output_folder = './tinycrm/static/scripts/js/dist/';

gulp.task('clean', function() {
    del([output_folder + "main.js"]);
});

gulp.task('transform', function() {
    browserify({
        entries: './tinycrm/static/scripts/jsx/main.jsx',
        extensions: ['.jsx', '.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(output_folder))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./tinycrm/static/scripts/jsx/*.jsx', ['transform']);
});

gulp.task('default', function() {
    gulp.start('transform');
});
