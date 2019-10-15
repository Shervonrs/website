const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      browserify = require('browserify'),
      log =require('gulplog'),
      env = require('babel-preset-env'),
      babelify = require('babelify'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload,
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps =require('gulp-sourcemaps'),
      concat =require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      changed=require('gulp-changed'),
      uglify = require('gulp-uglify'),
      terser= require('gulp-terser'),
      lineEC =require('gulp-line-ending-corrector'),
      source= require('vinyl-source-stream'),
      buffer = require('vinyl-buffer');


function css() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init({loadMaps:true}))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write('./'))
  .pipe(lineEC())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
}

function concatCSS(){
  return gulp.src('./css/styles.css')
  .pipe(sourcemaps.init({loadMaps: true, largeFile:true}))
  .pipe(concat('style.min.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('./'))
  .pipe(lineEC())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
}
//
// function javascript(){
//   return gulp.src(['./js/main.js' ])
//   .pipe(concat('/bundle.min.js'))
//   .pipe(terser())
//   .pipe(lineEC())
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.stream());
// }

function browif(){
  let b = browserify({
    entries: './js/main.js',
    debug: true,
    transform:[babelify.configure({
      presets:['babel-preset-env']
    })]
  })
  return b.bundle()
  .pipe(source('bundle.min.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(terser())
  .on('error', log.error)
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.stream())
}

// function browif(){
//   return gulp.src('./js/main.js')
//   .pipe(browserify({
//     debug: true,
//     transform:[babelify.configure({
//       presets:['babel-preset-env']
//     })]
//   }))
//   .bundle()
//   .pipe(source('bundle.min.js'))
//   .pipe(buffer())
//   .pipe(sourcemaps.init({loadMaps:true}))
//   .pipe(uglify())
//   .pipe(sourcemaps.write('./maps'))
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.stream());
// }

// gulp.task('browserify', function() {
//   return browserify(['./js/main.js'])
//   .bundle()
//   .pipe(sourcemanps.init())
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.stream())
// })

// function browfy() {
//   return browserify('./js/main.js')
//   .pipe(browserify())
//   .bundle()
//   .pipe(sourcemanps.init())
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.stream())
// }

function watch(){
  browserSync.init({
    server: {
      baseDir:'./'
    }
  });
  gulp.watch('./scss/**/*.scss', gulp.series([css, concatCSS]));
  gulp.watch('./js/main.js', browif); //gulp.series([javascript, browif]));
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.css = css;
exports.concatCSS = concatCSS;
// exports.javascript = javascript;
exports.browif = browif;
exports.watch = watch;


const build = gulp.parallel(watch);
gulp.task('default', build);


// function css() {
//   return gulp.src(files.scssPath)
//   .pipe(sourcemaps.init({loadMaps:true}))
//   .pipe(sass({
//     outputStyle: 'expanded'
//   }).on('error', sass.logError))
//   .pipe(autoprefixer('last 2 versions'))
//   .pipe(sourcemaps.write('./'))
//   .pipe(lineEC())
//   .pipe(gulp.dest('css'))
//   .pipe(browserSync.stream());
// }
//
// function concatCSS(){
//   return gulp.src('./css/styles.css')
//   .pipe(sourcemaps.init({loadMaps: true, largeFile:true}))
//   .pipe(concat('style.min.css'))
//   .pipe(cleanCSS())
//   .pipe(sourcemaps.write('./'))
//   .pipe(lineEC())
//   .pipe(gulp.dest('css'))
//   .pipe(browserSync.stream());
// }
//
// function browif(){
//   let b = browserify({
//     entries: './js/main.js',
//     debug: true,
//     transform:[babelify.configure({
//       presets:['babel-preset-env']
//     })]
//   })
//   return b.bundle()
//   .pipe(source('bundle.min.js'))
//   .pipe(buffer())
//   .pipe(sourcemaps.init({loadMaps: true}))
//   .pipe(terser())
//   .on('error', log.error)
//   .pipe(sourcemaps.write('./'))
//   .pipe(gulp.dest('js'))
//   .pipe(browserSync.stream())
// }
//
// function watch(){
//   browserSync.init({
//     server: {
//       baseDir:'./'
//     }
//   });
//   gulp.watch('./scss/**/*.scss', gulp.series([css, concatCSS]));
//   gulp.watch('./js/main.js', browif); //gulp.series([javascript, browif]));
//   gulp.watch('./*.html').on('change', browserSync.reload);
// }
//
// exports.css = css;
// exports.concatCSS = concatCSS;
// exports.browif = browif;
// exports.watch = watch;
//
//
// const build = gulp.parallel(watch);
// gulp.task('default', build);
