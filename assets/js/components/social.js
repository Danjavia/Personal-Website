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