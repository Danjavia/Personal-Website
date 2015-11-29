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

		var styles = {
			logo: {
				marginLeft: 50
			},

			hover: {
				marginLeft: 500
			}
		}

		return (
			<nav>
			    <div className="nav-wrapper">
			      	<a href="#" className="brand-logo" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave} style={ ! this.state.hovered ? styles.logo : styles.hover }>{this.props.brand}</a>
			      	
			      	<ul id="nav-mobile" className="right hide-on-med-and-down">
			      	  	<li><a href="/#/portfolio">Portfolio</a></li>
			      	  	<li><a href="/#/contact">Contact</a></li>
			      	  	<li><a href="/#/blog">Blog</a></li>
			      	</ul>

			      	<ul className="side-nav" id="mobile-demo">
        				<li><a href="/#/portfolio">Portfolio</a></li>
        				<li><a href="/#/contact">Contact</a></li>
        				<li><a href="/#/blog">Blog</a></li>
      				</ul>
			    </div>
			</nav>
		);
	}
});

// Export component
window.Navbar = Navbar;