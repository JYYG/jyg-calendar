'use strict';

/**
 *  ANGULARJS BOOTSTRAP APP
 *
 *  @desc
 *
 *  @examples
 *
 *  @author Jean-Yves GATEAU <jeanyves.gateau@gmail.com>
 *
 */


/* ------------------------------------------------------------- */
/* -------------------------- VAR ------------------------------ */
/* ------------------------------------------------------------- */

/* DEPENDANCES */

var gulp        = require('gulp'),
    sass        = require('gulp-sass');


/* DIRECTORIES */

var dist        = 'dist/',
    dirCSS      = 'app/assets/css/',
    dirSASS     = 'app/assets/css/sass/';
    
    

/* ------------------------------------------------------------- */
/* -------------------------- TASKS ---------------------------- */
/* ------------------------------------------------------------- */

/* SASS compile */

gulp.task('sass', function(){
   
    return gulp.src(dirSASS + 'app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dirCSS));
});


/* ------------------------------------------------------------- */
/* -------------------------- COMPILES ------------------------- */
/* ------------------------------------------------------------- */


gulp.task('default', ['sass']);