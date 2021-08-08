import React from 'react';

class EventForm extends React.Component {
    state = {
        name: "",
        canvas: Array.from(Array(25).keys()),
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if(!this.state.name) {
            alert('Please enter Task!')
            return;
        }

        const res = await fetch('http://localhost:5000/event', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-control">
                    <label>Event Name</label>
                    <input type="text" placeholder="Add Task" value={this.state.name}
                        onChange={ (e) => this.setState( {name : e.target.value} )}
                    />
                </div>
                <input type="submit" value="Create Event!" className="btn btn-block" />
            </form>
        );
    }
}

export default EventForm;