'use strict';

// Home component
var Home = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<div className="home">
				<Navbar brand="Danjavia"/>
			</div>
		);
	}
});

// Export component
window.Home = Home;