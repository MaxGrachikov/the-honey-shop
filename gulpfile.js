const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();

/*Подключаемые модули для работы со стилями*/
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

/*Подключаемые модули для работы с картинками*/
const imagemin = require('gulp-imagemin');

/*Подключаемые модули для работы с js файлами*/
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const wiredep = require('gulp-wiredep');

/*Подключаемые модули для работы с html файлами*/
const pug = require('gulp-pug');



const cssFiles = [
	'./src/css/**/*.css'
]; // список и порядок подключаемых модулей css

const jsFiles = [
	'./src/js/**/*.js'
]; // список и порядок подключаемых модулей js

gulp.task('bower', function () {
  return gulp.src('index.html')
    .pipe(wiredep({
      directory: 'build/js'
    }))
    .pipe(gulp.dest('./'))
})

function compilationHTML() {
    return gulp.src('./*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('./'))
}

function compilationSass() {
	return gulp.src('./src/sass/**/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('./src/css'))
    	.pipe(browserSync.stream());
};

function compilationCss() {
	return gulp.src(cssFiles)
    	.pipe(concatCss("main.css"))
    	.pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
    	.pipe(gulp.dest('./build/css/'))
    	.pipe(browserSync.stream());
};

function optimizationImages() {
	return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
        .pipe(browserSync.stream());
};

function compilationJS() {
	return gulp.src(jsFiles)
    	.pipe(concat('main.js'))
    	.pipe(uglify())
    	.pipe(gulp.dest('./build/js'))
    	.pipe(browserSync.stream());
};

function clean() {
	return del(['./build/*']);
};

function start() {
	gulp.watch('./src/sass/**/*.scss', compilationSass);
	gulp.watch('./src/css/**/*.css', compilationCss);
	gulp.watch('./src/images/**/*.*', optimizationImages);
	gulp.watch('./src/js/**/*.js', compilationJS);
    gulp.watch("./*.pug", compilationHTML);
	gulp.watch("./*.html").on('change', browserSync.reload);
	browserSync.init({
	    server: {
	        baseDir: "./"
	    }
	});
};

gulp.task('build', gulp.series(clean, gulp.parallel(compilationSass, compilationCss, optimizationImages, compilationJS))); // таска перед продакшеном
gulp.task('clean', clean); // таска для очистки папки build

gulp.task('start', start); // таска для разработки
