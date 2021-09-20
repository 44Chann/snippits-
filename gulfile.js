const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildstyles() {
    return src('./index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask(){
    watch(['index.scss'], buildstyles)
}

exports.default = series(buildstyles, watchTask)
