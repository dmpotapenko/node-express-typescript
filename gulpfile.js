const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackConfig = require("./webpack.config.js");

const ROOT = __dirname;

gulp.task('build', () => {
  gulp.src(`${ROOT}/server/**/*.ts`)
    .pipe(webpack(Object.assign({ watch: true }, webpackConfig)))
    .pipe(gulp.dest(`${ROOT}/dist/server`, { overwrite: true }));
});
