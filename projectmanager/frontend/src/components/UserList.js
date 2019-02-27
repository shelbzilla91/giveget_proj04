import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';


class UserList extends Component {
    state = {
        users: [{}],
        addUserFormVisible: false
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users`)
        .then((res) => this.setState({ users: res.data }))
    }

    toggleAddUserForm = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }
    render() {
        return (
    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}

export default UserList;