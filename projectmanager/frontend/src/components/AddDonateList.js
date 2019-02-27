import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
class AddDonateList extends Component {
    render() {
        return (
            <div className = "userListForm">
        <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup> 
        </div>
        );
    }
}

export default AddDonateList;