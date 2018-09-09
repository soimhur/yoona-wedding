var gulp = require("gulp");

//import gulp libraries
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var postcss = require("gulp-postcss");
var precss = require("precss");
var sass = require("gulp-sass");
var prefixer = require('gulp-autoprefixer');

//define config
var config = {
  vendor: "node_modules/"
}

//build css task
gulp.task("build-css", function() {
  gulp.src(
      [
        "src/scss/index.scss",
        config.vendor + "swiper/dist/css/swiper.css",
        config.vendor + "aos/dist/aos.css",
      ]
    )
    .pipe(prefixer())
    .pipe(sass())
    .pipe(concat("master.css"))
    .pipe(gulp.dest("public"))
})

//build js task
gulp.task("build-js", function() {
  gulp.src(
      [
        config.vendor + "jquery/dist/jquery.js",
        config.vendor + "swiper/dist/js/swiper.js",
        config.vendor + "aos/dist/aos.js",
        "src/custom.js",
        "src/custom-aos.js",
      ]
    )
    .pipe(concat("master.js"))
    .pipe(gulp.dest("public"))
})

//concatenate gulp tasks
gulp.task("default", ["build-css", "build-js"]);

//define watch task in terminal
gulp.task("watch", function() {
  watch("src/**/**.*", batch(function(events, done) {
    gulp.start("default", done);
  }));
});