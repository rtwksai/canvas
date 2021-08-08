import React from 'react';
import { withRouter } from 'react-router';
import { Input,Button, Heading, HStack } from "@chakra-ui/react"

class EventForm extends React.Component {
    state = {
        name: "",
        canvas: Array.from(Array(2500).keys()).map( x => "#eeeeee"),
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if(!this.state.name) {
            alert('Please enter name!')
            return;
        }

        const res = await fetch('http://localhost:5000/event', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })

        const data = await res.json()
        console.log(data)
        const id = data.id
        this.props.history.push(`/canvas/${id}`);
        window.location.reload();
    }

    render() {
        return (
            <>
                <Heading m="0 0 1rem 0 " size="1xl">{this.props.heading}</Heading>
                <Input variant="filled" placeholder={this.props.placeholder} onChange={ (e) => this.setState( {name : e.target.value} ) } />
                <Button m="1rem 0 0 0" mb={12} colorScheme={this.props.color} onClick={this.onSubmit}>{this.props.text}</Button>
            </>
        );
    }
}

export default withRouter(EventForm);