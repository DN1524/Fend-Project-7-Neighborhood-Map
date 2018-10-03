import React, { Component } from 'react';

class ListView extends Component  {
	render() {
		return(
			<div class="list-container">
				<input className="text-box" type="text" placeholder="Search">
      	</input>

				<ul class="list-results">
					<li>Some Text</li>
					<li>Some Text</li>
					<li>Some Text</li>
				</ul>
			</div>
		)
	}
}

export default ListView;