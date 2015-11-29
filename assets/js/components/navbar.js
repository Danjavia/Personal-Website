'use strict';

// Home component
var Navbar = React.createClass({

	getInitialState: function () {
		return {
			hovered: false
		};
	},

	mouseOver : function ( e ) {
		this.setState({
			hovered: true
		});
	},

	mouseLeave : function ( e ) {
		this.setState({
			hovered: false
		});
	},

	render: function () {

		return (
			<div className="valign-wrapper info">
				<div className="valign info__content">
					<h1>Living In {this.props.code}</h1>
	  				<h5>{this.props.brand}</h5>
				</div>
			</div>
		);
	}
});

// Export component
window.Navbar = Navbar;