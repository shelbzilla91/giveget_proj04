import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios'

class CenterList extends Component {
    state = {
        data: ''
    }
    getCenterList = () => {
        axios.get(`/api/centerlist`)
        .then((res) => {
            console.log(res.data)
            this.setState({ data: res.data })
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.getCenterList}>Test</button>
    <ListGroup>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup> 
            </div>
        );
    }
}

export default CenterList;