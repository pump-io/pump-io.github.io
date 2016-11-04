'use strict';

var gulp = require('gulp');

var http = require('http');
var path = require('path');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var frontMatter = require('gulp-front-matter');
var remark = require('gulp-remark');
var remarkHtml = require('remark-html');
var adjustHeaders = require('remark-rewrite-headers');
var slug = require('remark-slug');
var parse = require('stratic-parse-header');
var attachToTemplate = require('gulp-attach-to-template');
var dateInPath = require('stratic-date-in-path');
var postsToIndex = require('stratic-posts-to-index');
var ghpages = require('gh-pages');
var merge = require('merge-stream');
var gutil = require('gulp-util');
var sort = require('gulp-sort');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var addsrc = require('gulp-add-src');
var ecstatic = require('ecstatic');

/* TODO: lint everything */

/* Build tasks */

gulp.task('html', function() {
	return gulp.src(['src/*.jade'])
	           .pipe(jade({ pretty: true }))
	           .pipe(rename({ extname: '.html' }))
	           .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	return gulp.src('src/styles/*')
	           .pipe(stylus())
	           .pipe(rename({ extname: '.css' }))
	           .pipe(gulp.dest('dist/stylesheets'));
});

gulp.task('images', function() {
	return gulp.src('src/images/*')
	           .pipe(gulp.dest('dist/images'));
});

gulp.task('js', function() {
	return gulp.src(['src/js/*.js']).pipe(gulp.dest('./dist/javascripts'));
});

gulp.task('post-index', function() {
	return gulp.src('src/blog/*.md')
	           .pipe(parse())
	           .pipe(remark().use(remarkHtml).use(adjustHeaders))
	           .pipe(dateInPath())
	           .pipe(addsrc('src/blog/index.jade'))
	           .pipe(postsToIndex('index.jade'))
	           .pipe(jade({pretty: true, basedir: __dirname}))
	           .pipe(rename({ extname: '.html' }))
	           .pipe(gulp.dest('dist/blog'));
});

gulp.task('posts', function() {
	return gulp.src('src/blog/*.md')
	           .pipe(parse())
	           .pipe(remark().use(remarkHtml).use(adjustHeaders).use(slug))
	           .pipe(dateInPath())
	           .pipe(addsrc('src/blog/post.jade'))
	           .pipe(attachToTemplate('post.jade'))
	           .pipe(jade({pretty: true, basedir: __dirname}))
	           .pipe(rename({ extname: '.html' }))
	           .pipe(gulp.dest('dist/blog'));
});

gulp.task('misc', function() {
	return gulp.src(['COPYING', 'favicon.ico', 'humans.txt', 'robots.txt', 'sitemap.xml', 'CNAME'])
	           .pipe(gulp.dest('dist'));
});

/* Helper tasks */

gulp.task('blog', ['posts','post-index']);

gulp.task('build', ['html', 'css', 'js', 'images', 'blog', 'misc']);

gulp.task('deploy', ['build'], function(done) {
	ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log, branch: 'master' }, done);
});

gulp.task('watch', ['build'], function() {
	gulp.watch('src/*.jade', ['html']);
	gulp.watch(['src/blog/*.md', 'src/blog/*.jade'], ['blog']);
	gulp.watch('src/includes/*.jade', ['html', 'blog']);
	gulp.watch(['src/styles/*'], ['css']);
	gulp.watch('src/javascripts/*.js', ['js']);
});

gulp.task('serve', ['watch'], function() {
	http.createServer(
		ecstatic({ root: __dirname + '/dist' })
	).listen(8081);
});

/* Default task */

gulp.task('default', ['build']);
