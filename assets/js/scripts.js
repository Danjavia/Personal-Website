'use strict';

// Home component
var Content = React.createClass({

	render: function () {

		return (
			<div className="valign-wrapper info">
				<div className="valign info__content">
					<h1>Living In The {this.props.code}</h1>
	  				<h5>{this.props.brand}</h5>
					<Social/>
				</div>
			</div>
		);
	}
});

// Export component
window.Content = Content;
'use strict';

// Home component
var Social = React.createClass({

	render: function () {

		return (
			<div className="social">
				<a href="https://twitter.com/danjavia" className=" social__icon"><i className="fa fa-twitter"></i></a>
				<a href="https://github.com/danjavia" className=" social__icon"><i className="fa fa-github"></i></a>
				<a href="https://codepen.io/danjavia" className=" social__icon"><i className="fa fa-codepen"></i></a>
				<a href="https://medium.com/@Danjavia" className=" social__icon"><i className="fa fa-medium"></i></a>
				<a href="mailto:d@danjavia.xyz" className=" social__icon"><i className="fa fa-envelope"></i></a>
			</div>
		);
	}
});

// Export component
window.Social = Social;
'use strict';

// Home component
var Footer = React.createClass({

	render: function () {

		return (
			<section className="footer">
				<i className="fa fa-quote-left"></i> 
				The failure begins when ceases the force. 
				<i className="fa fa-quote-right"></i> <br/> <i>Anonymous</i>
			</section>
		);
	}
});

// Export component
window.Footer = Footer;
'use strict';

// Home component
var Presentation = React.createClass({

	componentDidMount: function () {
		BG.init();
	},

	render: function () {

		return (
			<canvas id="bg" className="page-bg"></canvas>
		);
	}
});

// Export component
window.Presentation = Presentation;
'use strict';

// Home component
var Home = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<div className="home">
				<Content code="</Codeland>" brand="Danny Viasus - Developer"/>
				<Presentation/>
				<Footer/>
			</div>
		);
	}
});

// Export component
window.Home = Home;
// Routes
routie({

	'': function() {
        
        // render the first page on a direct access
        ReactDOM.render(
            <Home/>,
            document.getElementById( 'content' )
        );
    },

    '*': function() {
        // default go to landing page
        routie( '' );
    }
})