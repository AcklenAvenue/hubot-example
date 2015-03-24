'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var debug = require('gulp-debug');

gulp.task('default', ['build', 'specs']);

gulp.task('build', ['clean'], function(){
	var tsc  = require('gulp-typescript')	
	return gulp.src(["typings/**/*.ts", "src/**/*.ts"])		
		//.pipe(debug())		        
		.pipe(tsc({
		            module: 'commonjs',
		            declarationFiles: true,
		            emitError: false,
		            comments: true
		       }))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('specs', ['build'], function(){
	var mocha = require('gulp-mocha');	
	return gulp.src("dist/**/*.js")
				//.pipe(debug())
		        .pipe(mocha({reporter: 'nyan'}));	
});
