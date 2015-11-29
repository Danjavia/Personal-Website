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