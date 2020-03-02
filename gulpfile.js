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
const terser = require('gulp-terser');




const cssFiles = [
	'./src/css/**/*.css'
]; // список и порядок подключаемых модулей css

const jsFiles = [
	'./src/js/**/*.js'
]; // список и порядок подключаемых модулей js

gulp.task('bower', () => {
  return gulp.src('index.html')
    .pipe(wiredep({
      directory: 'build/js'
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('compilationHTML', () => {
    return gulp.src('./*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('compilationSass', () => {
	return gulp.src('./src/sass/**/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('./src/css'))
    	.pipe(browserSync.stream());
});

gulp.task('compilationCss', () => {
	return gulp.src(cssFiles)
    	.pipe(concatCss("main.css"))
    	.pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
    	.pipe(gulp.dest('./build/css/'))
    	.pipe(browserSync.stream());
});

gulp.task('optimizationImages', () => {
	return gulp.src('./src/images/**')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./build/images/'))
        .pipe(browserSync.stream());
});

gulp.task('compilationJS', () => {
	return gulp.src(jsFiles)
    	.pipe(concat('main.js'))
        .pipe(babel())
        .pipe(terser())
    	.pipe(gulp.dest('./build/js'))
    	.pipe(browserSync.stream());
});


gulp.task('cleanBuild', () => {
    return del(['./build/images/**', './build/css/main.css', './build/js/main.js']);
});

gulp.task('watch', () => {
	gulp.watch('./src/sass/**/*.scss', gulp.series('compilationSass'));
	gulp.watch('./src/css/**/*.css', gulp.series('compilationCss'));
	gulp.watch('./src/images/**', gulp.series('optimizationImages'));
	gulp.watch('./src/js/**/*.js', gulp.series('compilationJS'));
	gulp.watch("./*.html").on('change', browserSync.reload);
	browserSync.init({
	    server: {
	        baseDir: "./"
	    }
	});
});


gulp.task('default', gulp.series('cleanBuild', 'compilationSass', 'compilationCss', 'optimizationImages', 'compilationJS', 'watch')); // таска для разработки
gulp.task('build', gulp.series('cleanBuild', 'compilationSass', 'compilationCss', 'optimizationImages', 'compilationJS')); // таска для сборки