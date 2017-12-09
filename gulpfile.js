'use strict';

var gulp = require('gulp');

var http = require('http');
var path = require('path');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var remark = require('gulp-remark');
var remarkHtml = require('remark-html');
var adjustHeaders = require('remark-rewrite-headers');
var slug = require('remark-slug');
var frontMatter = require('gulp-gray-matter');
var attachToTemplate = require('gulp-attach-to-template');
var filterDrafts = require('stratic-filter-drafts');
var dateInPath = require('stratic-date-in-path');
var postsToIndex = require('stratic-posts-to-index');
var paginateIndexes = require('stratic-paginate-indexes');
var indexesToRss = require('stratic-indexes-to-rss');
var ghpages = require('gh-pages');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var addsrc = require('gulp-add-src');
var ecstatic = require('ecstatic');

/* TODO: lint everything */

/* Build tasks */

gulp.task('html', function() {
	return gulp.src(['src/*.pug'])
	           .pipe(pug({ pretty: true }))
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
	           .pipe(frontMatter())
	           .pipe(filterDrafts())
	           // Dirty hack until remark-adjust-headers takes options
	           .pipe(remark({quiet: true}).use(remarkHtml).use(adjustHeaders).use(adjustHeaders))
	           .pipe(dateInPath())
	           .pipe(addsrc('src/blog/index.pug'))
	           .pipe(postsToIndex('index.pug'))
	           .pipe(paginateIndexes())
	           .pipe(pug({pretty: true, basedir: __dirname}))
	           .pipe(rename({ extname: '.html' }))
	           .pipe(gulp.dest('dist/blog'));
});

gulp.task('posts', function() {
	return gulp.src('src/blog/*.md')
	           .pipe(frontMatter())
	           .pipe(filterDrafts())
	           .pipe(remark({quiet: true}).use(remarkHtml).use(adjustHeaders))
	           .pipe(dateInPath())
	           .pipe(addsrc('src/blog/post.pug'))
	           .pipe(attachToTemplate('post.pug'))
	           .pipe(pug({pretty: true, basedir: __dirname}))
	           .pipe(rename({ extname: '.html' }))
	           .pipe(gulp.dest('dist/blog'));
});

gulp.task('misc', function() {
	return gulp.src(['COPYING', 'favicon.ico', 'humans.txt', 'robots.txt', 'sitemap.xml', 'CNAME'])
	           .pipe(gulp.dest('dist'));
});

gulp.task('rss', function() {
	return gulp.src('src/blog/*.md')
	           .pipe(frontMatter())
	           .pipe(filterDrafts())
	           .pipe(remark({quiet: true}).use(remarkHtml))
	           .pipe(dateInPath())
	           .pipe(addsrc('src/blog/index.pug'))
	           .pipe(postsToIndex('index.pug'))
	           .pipe(indexesToRss({
		           title: 'pump.io blog',
		           copyright: '© Copyright 2016-2017 pump.io contributors.',
		           webMaster: 'AJ Jordan <alex@strugee.net>'
	           }, 'http://pump.io/blog/'))
	           .pipe(rename({ extname: '.rss' }))
	           .pipe(gulp.dest('dist/blog'));
});

/* Helper tasks */

gulp.task('blog', ['posts','post-index', 'rss']);

gulp.task('build', ['html', 'css', 'js', 'images', 'blog', 'misc']);

gulp.task('deploy', ['build'], function(done) {
	ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log, branch: 'master' }, done);
});

gulp.task('watch', ['build'], function() {
	gulp.watch('src/*.pug', ['html']);
	gulp.watch(['src/blog/*.md', 'src/blog/*.pug'], ['blog']);
	gulp.watch('src/includes/*.pug', ['html', 'blog']);
	gulp.watch(['src/styles/*'], ['css']);
	gulp.watch('src/js/*.js', ['js']);
});

gulp.task('serve', ['watch'], function() {
	http.createServer(
		ecstatic({ root: __dirname + '/dist' })
	).listen(process.env.PORT || 8080);
});

/* Default task */

gulp.task('default', ['build']);
