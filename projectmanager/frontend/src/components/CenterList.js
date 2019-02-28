import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios'
import AddListForm from './AddListForm';

class CenterList extends Component {
    state = 
    {
        name:"",
        genre:"",
        itemcount:""

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
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup> 
    <AddListForm />
            </div>
        );
    }
}

export default CenterList;