"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var gulpBemCss = require('gulp-bem-css');

gulp.task("html", () => {
  return gulp.src('source/*.html')
    .pipe(gulpBemCss({
      folder: 'source/less', // Path for creating directories and stylesheet files.
      extension: 'less', // Extension of stylesheet files
      elementSeparator: '__', // Element separator in class names
      modifierSeparator: '--' // Modifier separator in class names
    }))

    .pipe(gulp.dest('dist'));
});

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
