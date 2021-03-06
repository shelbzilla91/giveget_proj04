import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddUserForm from './AddUserForm'



const BaseStyles = styled.div`
    display:flex;
    flex-direction:row;
    text-align: center;
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    border: 5px solid blue;
    width:100vw;
    
    
`
const UserImg = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 45vw;
    border:5px solid blue;
    margin:10px;
    padding:10px;
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
        axios.get(`/api/users/${this.props.match.params.id}/`)
            .then((res) => this.setState({ users: res.data }))
    }

    toggleAddUserForm = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }

    render() {
        return (

            <BaseStyles>
                <Container>

                    {this.state.users.map((user, i) => (
                        <div key={i}>

                            <UserImg src={user.img} alt="..." />
                            <div className="card-body">

                                <div className="card-title text-justify">
                                    <h5>{user.name}</h5>
                                    <h3>{user.email}</h3>
                                </div>
                            </div>

                            <Link to={`/users/${user._id}`} className="btn btn-primary ">Profile</Link>

                        </div>
                    ))}
                </Container>
           
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