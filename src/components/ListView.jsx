import React, { Component } from 'react';

class ListView extends Component  {
	render() {
		return(
			<div className="list-container">
				<input className="text-box" type="text" placeholder="Search">
      	</input>
      	<div className="results-container">
					<ul className="list-results">
						<li>Some Text</li>
						<li>Some Text</li>
						<li>Some Text</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ListView;