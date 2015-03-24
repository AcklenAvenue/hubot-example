'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var debug = require('gulp-debug');

gulp.task('default', ['build', 'specs', 'deploy']);

gulp.task('build', ['clean'], function(){
	console.log("Compiling TypeScript files from the /src folder and placing new JavaScript files in the /dist folder.")		
	var tsc  = require('gulp-typescript')	
	return gulp.src(["typings/**/*.ts", "src/**/*.ts"])		
		//.pipe(debug()) //debug shows the files included in the src pipe	        
		.pipe(tsc({
		            module: 'commonjs',
		            declarationFiles: true,
		            emitError: false,
		            comments: true
		       }))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
	console.log("Giving the build script a clean slate.")	
	return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('specs', ['build'], function(){
	console.log("Running specs to make sure nothing is broken.")
	var mocha = require('gulp-mocha');	
	return gulp.src("dist/**/*.js")
				//.pipe(debug()) //debug shows the files included in the src pipe
		        .pipe(mocha({reporter: 'nyan'}));	
});

gulp.task('deploy', ['build', 'specs'], function(){
	console.log("Deploying the hubot script files to the /scripts folder so that hubot will include them.")
	gulp.src('dist/scripts/*.js')
		//.pipe(debug()) //debug shows the files included in the src pipe
    	.pipe(gulp.dest('scripts'));
});
