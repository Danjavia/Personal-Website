'use strict';

// Home component
var Content = React.createClass({

	render: function () {

		return (
			<div className="valign-wrapper info">
				<div className="valign info__content">
					<h1>Living In {this.props.code}</h1>
					<Social/>
	  				<h5>{this.props.brand}</h5>
				</div>
			</div>
		);
	}
});

// Export component
window.Content = Content;