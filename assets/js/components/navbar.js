'use strict';

// Home component
var Navbar = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {

		var styles = {
			
		}

		return (
			<nav>
			    <div className="nav-wrapper">
			      	<a href="#" className="brand-logo">Danjavia</a>
			      	
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