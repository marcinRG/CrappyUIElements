'use strict';
var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')({lazy: true});
var sassLint = require('gulp-sass-lint');
var del = require('del');
var tsify = require('tsify');
var tsProject = ts.createProject('tsconfig.build.json');
//var sassImportOnce = require('gulp-sass-import-once');
var settings = require('./gulp.settings/settings');

gulp.task('clean-demo', function (done) {
    var files = [settings.app.cssStyles + '*.css', settings.app.compiledJS];
    clean(files, done);
});

gulp.task('clean-output', function (done) {
    var files = settings.output.path + '**/*';
    clean(files, done);
});

gulp.task('create-output', ['minify-js-css', 'copy-to-output'], function () {
    msg('Creating output directory');
});

gulp.task('minify-js-css', function () {
    var cleanCss = require('gulp-clean-css');
    return gulp.src(settings.build.filesToMinify)
        .pipe($.plumber())
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', cleanCss()))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('copy-to-output', function () {
    msg('Copy .scss  .ts files to output folder');
    return gulp.src(settings.build.filesToCopy)
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('clean-build', function (done) {
    var files = settings.build.path + '**/*';
    clean(files, done);
});

gulp.task('build-create', ['ts-compile', 'copy-scss-to-build', 'build-sass-compile'], function () {
    msg('creating biuld folder');
});

gulp.task('build-sass-compile', ['lint-sass'], function () {
    msg('scss -> css to build folder');
    return gulp.src(settings.app.scssFile)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['last 3 version', '> 3%']}))
        .pipe(gulp.dest(settings.build.cssFile));
});

gulp.task('copy-scss-to-build', function () {
    msg('Copy all scss files to build folder');
    return gulp.src(settings.app.scssStyles)
        .pipe(gulp.dest(settings.build.scssPath));
});

gulp.task("ts-compile", ['code-check'], function () {
    return gulp.src(settings.app.allTSs)
        .pipe(tsProject())
        .pipe(gulp.dest(settings.build.path));
});

gulp.task('code-check', function () {
    return gulp.src(settings.app.allTSs)
        .pipe($.tslint({
            formatter: "verbose"
        }))
        .pipe($.tslint.report());
});

gulp.task('lint-sass', function () {
    return gulp.src(settings.app.scssStyles)
        .pipe(sassLint(
            {
                configFile: '.sass-lint.yml'
            }
        ))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task('test-run', function (done) {
    runTests(done);
});

gulp.task('browserify-compil', [], function () {
    return browserify({
        entries: [settings.app.tsFile],
        debug: true
    }).plugin(tsify)
        .bundle()
        .pipe(source(settings.app.compiledJS))
        .pipe(gulp.dest('./'));
});

gulp.task('browserify-inject-js', ['browserify-compil'], function () {
    return gulp.src(settings.app.index)
        .pipe($.inject(gulp.src(settings.app.compiledJS, {read: false}), {relative: true}))
        .pipe(gulp.dest(settings.app.client));
});

gulp.task('inject-css', ['sass-compile'], function () {
    return gulp.src(settings.app.index)
        .pipe($.inject(gulp.src(settings.app.cssFile, {read: false}), {relative: true}))
        .pipe(gulp.dest(settings.app.client));
});

gulp.task('sass-compile', ['lint-sass'], function () {
    msg('scss -> css');
    return gulp.src(settings.app.scssFile)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['last 3 version', '> 3%']}))
        .pipe(gulp.dest(settings.app.cssStyles));
});

gulp.task('create-demo', ['sass-compile', 'browserify-inject-js'], function () {
    msg('Creating runnable demo');
});

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);


//--functions
function clean(path, done) {
    $.util.log('Czyszczenie folderu:' + $.util.colors.blue(path));
    del(path).then(function () {
        done();
    });
}

function msg(txt) {
    $.util.log($.util.colors.blue(txt));
}

