// gulpfile.js
// var gulp = require('gulp'),
//     del = require('del'),
//     runSeq = require('run-sequence');

var gulp = require('gulp'),
  electron = require('gulp-atom-electron'),
  symdest = require('gulp-symdest'),
  del = require('del'),
  runSeq = require('run-sequence');

gulp.task('clean', function(){
    return del('dist/frontend/**/*', {force:true});
});

gulp.task('copy:vendor', function(){
    return gulp.src([
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/angular2/bundles/angular2-polyfills.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/bundles/Rx.js",
            "node_modules/angular2/bundles/angular2.dev.js",
            "node_modules/angular2/bundles/router.dev.js",
            "node_modules/pouchdb/dist/pouchdb.min.js"
        ])
        .pipe(gulp.dest('./dist/frontend/scripts/vendor'))
})

gulp.task('copy:html-css', function(){
  return gulp.src([
    './src/frontend/app/**/*.html',
    './src/frontend/app/**/*.css'
  ])
      .pipe(gulp.dest('./dist/frontend/app'))
})

gulp.task('copy:index', function(){
    return gulp.src('./src/frontend/index.html')
        .pipe(gulp.dest('./dist/frontend'));
});

gulp.task('frontend', function(done){
    return runSeq('clean', ['copy:vendor', 'copy:index', 'copy:html-css'], done);
})

// gulpfile.js
gulp.task('clean-electron', function(){
    return del('dist/electron-package/**/*', {force: true});
});

gulp.task('copy:electron-manifest', function(){
   return gulp.src('./src/assets/package.json')
       .pipe(gulp.dest('./dist/electron-package'))
});

gulp.task('copy:electron-scripts', function(){
    return gulp.src('./src/main/index.js')
        .pipe(gulp.dest('./dist/electron-package'));
});

gulp.task('copy:spa-for-electron', function(){
    return gulp.src("./dist/frontend/**/*")
        .pipe(gulp.dest('dist/electron-package'));
});

gulp.task('electron', function(done){
    return runSeq('clean-electron', ['copy:electron-manifest', 'copy:electron-scripts', 'copy:spa-for-electron'], done);
});

// additional changes; tasks for building app
gulp.task('build-app-for-osx', function(){
    gulp.src(['dist/electron-package/**/*'])
        .pipe(electron({
            version: '0.36.7',
            platform: 'darwin' }))
        .pipe(symdest('packages/osx'));
});
gulp.task('build-app-for-linux', function(){
    gulp.src(['dist/electron-package/**/*'])
        .pipe(electron({
            version: '0.36.7',
            platform: 'linux' }))
        .pipe(symdest('packages/linux'));
});
gulp.task('build-app-for-win', function(){
    gulp.src(['dist/electron-package/**/*'])
        .pipe(electron({
            version: '0.36.7',
            platform: 'win32' }))
        .pipe(symdest('packages/win'));
});

gulp.task('apps', function(done){
    return runSeq(['build-app-for-win', 'build-app-for-linux', 'build-app-for-osx'], done);
});
