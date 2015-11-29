'use strict';

// Home component
var Home = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<div className="home">
				<Navbar code="</Codeland>" brand="Danny Viasus - Developer"/>
				<Presentation/>
			</div>
		);
	}
});

// Export component
window.Home = Home;