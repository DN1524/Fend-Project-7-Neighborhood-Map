import React, { Component } from 'react';

class SideBar extends Component  {
	render() {
		return(
			<section className="sidebar">
				<input className="text-box" type="text" placeholder="Search">
      	</input>
      	<div className="results-container">
					<ul className="list-results">
						<li>Some Text</li>
						<li>Some Text</li>
						<li>Some Text</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default SideBar;