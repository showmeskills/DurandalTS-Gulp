const gulp = require('gulp');
const path = require('path');
const cssmin = require('gulp-cssmin');
const autoPrefixer = require('gulp-autoprefixer');
const sassToCss = require("gulp-sass")(require('sass'));
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const typescript = require('gulp-typescript');
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');
const gulpWebServer = require("gulp-webserver");
const buffer = require('vinyl-buffer');

const sassHandler = () => {
    return gulp.src(path.join(__dirname, "src", "scss", "*.scss"))
        .pipe(sassToCss())
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.join(__dirname, "dist", "scss")))
}

const htmlHandler = () => {
    return gulp.src([path.join(__dirname, 'src', '*.html')])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            minifyCSS: true,
            minifyJS: true,
            removeStyleLinkTypeAttributes: true,
        }))
        .pipe(gulp.dest([path.join(__dirname, "dist")]))
}


const viewHtmlHandler = () => {
    return gulp.src([path.join(__dirname, 'src',"app","views","**",'*.html')])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            minifyCSS: true,
            minifyJS: true,
            removeStyleLinkTypeAttributes: true,
        }))
        .pipe(gulp.dest([path.join(__dirname, "dist","app","views")]))
}


const libHandler = () => {
    return gulp.src(path.join(__dirname, "src", "lib", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist", "lib")))
}

const delHandler = () => {
    return del(['./dist'])
}

const tsHandler = () => {
    return gulp.src(path.join(__dirname, "src", "app", "**", "*.ts"))
        .pipe(typescript({
            module: 'amd',
            target: 'es6',
            noEmitOnError: true,
            experimentalDecorators: true
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest(path.join(__dirname, "dist", "app")))
}

const serverHandler = ()=>{
    return gulp.src(path.join(__dirname,"dist"))
    .pipe(gulpWebServer({
        host:"localhost",
        port:"3000",
        livereload:true,
        open:"/index.html",
    }))
}

const watchHandler = ()=>{
    gulp.watch("./src/scss/*.scss",sassHandler);
    gulp.watch("./src/*.html",htmlHandler);
    gulp.watch("./src/app/views/**/*.html",viewHtmlHandler)
    gulp.watch("./src/app/**/*.ts",tsHandler);
}

const devStart = gulp.series(
    delHandler,
    gulp.parallel(sassHandler,tsHandler,htmlHandler,viewHtmlHandler,libHandler),
    serverHandler,
    watchHandler
)

module.exports.default = devStart;
