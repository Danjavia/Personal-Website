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