var gulp = require( 'gulp' ),
	connect = require( 'gulp-connect' ),
	minifyCss = require( 'gulp-minify-css' ),
	less = require( 'gulp-less' );
	gconcat = require( 'gulp-concat' );
	concatCss = require( 'gulp-concat-css' );
	uglify = require( 'gulp-uglify' );

gulp.task( 'webserver', function() {
  	connect.server({
  		livereload: true,
  		// port: 80,
  		// host: ''
  	});
});

gulp.task( 'less', function () {
	return gulp.src( './assets/less/*.less' )
		.pipe( less() )
		.pipe( minifyCss() )
		.pipe( gulp.dest( './assets/css' ) )
    	.pipe( connect.reload() );
});

gulp.task( 'concat-css', function() {
	return gulp.src([ 
			'./bower-components/Materialize/dist/css/materialize.css'
		])
        .pipe( concatCss( './assets/css/dist.css' ) )
		.pipe( minifyCss({compatibility: 'ie8'}) )
        .pipe( gulp.dest( './' ) );
});

gulp.task( 'minify', [ 'concat-css' ], function() {
	return gulp.src( './assets/css/*.css' )
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe( gulp.dest( './assets/css/' ));
});

gulp.task( 'concat-js', function() {
	return gulp.src([ 
			'./build/react.js', 
			'./build/react-dom.js', 
			'./bower-components/routie/dist/routie.min.js',
			'./bower-components/jquery/dist/jquery.min.js', 
			'./bower-components/Materialize/dist/js/materialize.min.js'
		])
        .pipe( gconcat( './assets/js/dist.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( './' ) );
});

gulp.task( 'concat-js-app', function() {
	return gulp.src([ 
			'./assets/js/components/content.js',
			'./assets/js/components/social.js',
			'./assets/js/components/footer.js',
			'./assets/js/components/presentation.js',
			'./assets/js/home.js',
			'./assets/js/app.js'
		])
        .pipe( gconcat( './assets/js/scripts.js' ) )
        // .pipe( uglify() )
        .pipe( gulp.dest( './' ) );
});

gulp.task( 'watch', function() {
    gulp.watch( './assets/less/*/*.less', [ 'less' ]);
})

gulp.task( 'default', [ 'less', 'minify', 'concat-js', 'concat-js-app', 'webserver', 'watch' ]);