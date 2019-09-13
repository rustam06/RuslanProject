const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

function server() {
	browserSync.init({
		server: {
			baseDir: "src"
		}
	});
};

function browserReload(done) {
	browserSync.reload()
	done();
}

function main(done) {
	gulp.src('src/sass/**/*.+(sass|scss)')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions']
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream())
	done();
}

function watching() {
	gulp.watch('src/sass/**/*.+(sass|scss)', main)
	gulp.watch('src/*.html', browserReload)
	gulp.watch('src/**/*.js', browserReload)
	gulp.watch('src/**/*.php', browserReload)
}

gulp.task('default', gulp.parallel(server, watching, main));
