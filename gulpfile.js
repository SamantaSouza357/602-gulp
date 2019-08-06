
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('compilar-scripts',function(){
    return gulp.src('js/*.js') //endereço dos scripts
        .pipe(concat('script.js')) //juntar todos os scripts
        .pipe(uglify()) // Minificar o javaScript
        .pipe(gulp.dest('minify'))

})

gulp.task('compilar-css',function(){
    return gulp.src('css/*.css') //endereço dos css
        .pipe(concat('style.css')) //juntar todos os css
        .pipe(gulp.dest('minify.css'))

})