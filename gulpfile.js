import gulp from 'gulp'
import postcss from 'gulp-postcss'

function defaultTask() {
  return gulp.src('./src/styles/**/*.css').pipe(postcss()).pipe(gulp.dest('./dist/styles'))
}

export default defaultTask
