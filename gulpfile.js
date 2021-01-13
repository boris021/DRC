const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// browser sync
 function bs() {
	servSass();
	browserSync.init({
		 server: {
			  baseDir: "./"
		 }
	});
	watch("./*.html").on('change', browserSync.reload);
	watch("./sass/**/*.sass", servSass);
	watch("./js/*.js").on('change', browserSync.reload);
};

// compiler sass
 function servSass() {
	return src("./sass/*.sass")
	.pipe(sass())
	.pipe(autoprefixer({ // autoprefixer
		cascade: false
  }))
	.pipe(dest("./css"))
	.pipe(browserSync.stream());
 };

 exports.serve = bs;