const { dest, src, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoPrefixer = require('gulp-autoprefixer');
const del = require('del')



function cleanDist() {
    return del('dist')

}
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())

}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 8 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())

}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload);
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))

}
exports.watching = watching;
exports.styles = styles;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;


exports.build = series(cleanDist, build);
exports.default = parallel(browsersync, watching, scripts);