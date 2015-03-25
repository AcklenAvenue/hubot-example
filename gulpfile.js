'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var debug = require('gulp-debug');
var istanbul = require('gulp-istanbul');

gulp.task('default', ['build', 'specs', 'deploy']);

gulp.task('build', ['clean'], function(){
	console.log("Compiling TypeScript files from the /src folder and placing new JavaScript files in the /dist folder.")		
	var tsc  = require('gulp-typescript')	
	return gulp.src(["typings/**/*.ts", "src/**/*.ts"])		
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
	return gulp.src(['dist', 'scripts'], {read: false})
        .pipe(clean());
});

gulp.task('specs', ['build'], function(cb){
	console.log("Running specs to make sure nothing is broken.")
	var mocha = require('gulp-mocha');	
	gulp.src(["dist/**/*.js", "!dist/specs/**/*.js"])
		.pipe(istanbul())
		.pipe(istanbul.hookRequire())
		.on('finish', function () {
	      gulp.src(['dist/specs/**/*.js'])
	        .pipe(mocha())
	        .pipe(istanbul.writeReports({reporters: ['text-summary','html'], reportOpts: { dir: "reports"}}))
	        .on('end', cb);
	    }); 
});

gulp.task('deploy', ['build', 'specs'], function(){
	console.log("Deploying the hubot script files to the /scripts folder so that hubot will include them.")
	gulp.src('dist/scripts/*.js')
		.pipe(gulp.dest('scripts'));
	gulp.src('dist/helpers/*.js')
		.pipe(gulp.dest('helpers'));
});
