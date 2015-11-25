var gulp = require( 'gulp' ),
	connect = require( 'gulp-connect' ),
	minifyCss = require( 'gulp-minify-css' ),
	less = require( 'gulp-less' );
	gconcat = require( 'gulp-concat' );
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

gulp.task( 'minify', function() {
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

gulp.task( 'concat-css', function() {
	return gulp.src([ 
			'./bower-components/Materialize/dist/css/materialize.min.css', 
		])
        .pipe( gconcat( './assets/css/dist.css' ) )
        .pipe( gulp.dest( './' ) );
});

gulp.task( 'watch', function() {
    gulp.watch( './assets/less/*/*.less', [ 'less' ]);
})

gulp.task( 'default', [ 'less', 'concat-css', 'minify', 'concat-js', 'webserver', 'watch' ]);