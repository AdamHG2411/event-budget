import React, { Component } from 'react';
import axios from 'axios';
import './Events.css'

class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
			events: []
	}
}

componentDidMount() {
	axios.get(`https://event-budget-api.herokuapp.com/api/5ce45ac1456d2e0017bb0d7f/events`)
	.then((events) => {
		this.setState({
			events: events.data
		})
	});
}
    
    render() {

        let eventCards = this.state.events.map(event => {
            return (
                <div>
					<h1 className="events-heading">My Events</h1>
					<div className="listedEvents">
						<h1 className="nameOfEvent">{event.name}</h1>
						<h2 className="startDate">{event.dates.start}</h2>
						<h2 className="endDate">{event.dates.end}</h2>
						<h2 className="monthly-savings">You need to save $ X per paycheck </h2>
					</div>
                    {/* {this.props.savePerPayecheck} */}
                </div>
            )
        })
        
        return (
            <div>
                {eventCards}
            </div>
        );
    }
}

export default Events;