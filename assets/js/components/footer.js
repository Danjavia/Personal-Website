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