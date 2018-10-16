import React, { Component } from 'react';
import axios from "axios";

class Results extends Component {
	state = {
		results: []
	}

	componentDidMount() {
    this.getVenues()
  }

	getVenues = () => {
    const venuesURL = 'https://api.foursquare.com/v2/venues/explore?client_id=3DTFRRBJ2R33GOU1XLL1EIXSYASEF3MSVDAACVHOHLN4U4LV&client_secret=CXVCVX0JTCD1VLNVPP1TQ3L1UKDJVQB1L5ANDRASIRPS2RYH&v=20180323&near=Chicago,IL&query=food';

    axios.get(venuesURL)
      .then(res => {
        this.setState({results: res.data.response.groups[0].items})
        console.log(res.data.response.groups[0].items, "Updated State!!")
      })
      .catch(err => {
        console.log("An error has occur!: " + err);
      })
  }

	render() {
		return(
			<li>
				<p className="res-title">Title of the place!</p>
      	<p className="res-address">Address Line 1</p>
      	<p className="res-address">Address Line 2</p>
      	<p className="res-address">Address Line 3</p>
			</li>
		)
	}
}

export default Results;

// {setTimeout(() => {
// 	console.log(this.props.results[0].venue.name)
// },1000)}