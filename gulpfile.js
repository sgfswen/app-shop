var gulp = require('gulp'),
	connect = require('gulp-connect'),
	minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
	browserSync = require('browser-sync').create(),
    gulpWebpack = require('gulp-webpack'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    webpackConfig = require('./webpack.config.js');


gulp.task('easy_webpack',function(){
    gulp.src('./app/main.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('images', function() {
    return gulp.src('./app/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/img'));
});


// live reload 
gulp.task('connect',function(){
	connect.server({
		// root:'./',
		port: process.env.port || 3000,
		livereload: true,
	})
});

// reload Js 
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
});

gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe( connect.reload() )
});

//编译less
gulp.task('testLess', function () {
    gulp.src('./app/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/less/'));
    gulp.src('./app/css/*.css')
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css/'));

});

//编译sass
gulp.task('testSass',function(){
    return gulp.src('./app/css/main.scss')
        .pipe( sass() )
        .pipe( gulp.dest( './dist/sass' ) );
});

//合并压缩css
/*gulp.task('concatCss', function() {
    return gulp.src(['./dist/less/!*.css','./app/css/!*.css'])
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css/'));
});*/

gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch',function(){

    gulp.watch('./app/**/*.scss',['testSass']);
	gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./app/**/*.js',['images']);
	gulp.watch('./app/**/*.html',['html']);
    gulp.watch('./app/**/*.js',['easy_webpack']);
    /*gulp.watch("./app/!**!/!*.*",['browser-sync']);*/
    /*gulp.watch("./dist/less/!*.*").on('change', browserSync.reload);*/
});

gulp.task('default',['easy_webpack','browser-sync','testSass','images']);

gulp.task('serve',['easy_webpack','connect','watch','browser-sync','testSass','images']);
