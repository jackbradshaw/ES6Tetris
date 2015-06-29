var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var sourcemaps = require("gulp-sourcemaps");
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("default", function () {
  return gulp.src("*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
    gulp.watch("*.js", ["default"]);
});


gulp.task("modules", function() {
    browserify({
	    entries: "./main.js",
	    debug: true
	})
    .transform(babelify)
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest("./dist"));
});