import React, { Component } from 'react';
import axios from 'axios'
import AddUserForm from './AddUserForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BaseStyles = styled.div`
    display:flex;
    flex-direction:row;
    text-align: center;
    background-color: green;
    width:100vw;
    height:50vh;
`



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
            <BaseStyles>
     
             
                    <div>
                    {this.state.addUserFormVisible ? <AddUserForm
                    getUsers={this.getUsers}
                    toggleAddUserForm={this.toggleAddUserForm}
                    /> : null}
                    <button className="btn btn-primary" onClick={this.toggleAddUserForm}>Create new user</button>
                    </div>
                
               
            </BaseStyles>
            
            
        );
    }
}

export default UserList;