import React, { Component } from 'react';
import axios from 'axios'

class AddUserEdit extends Component {
    state = {
        user: {
            name: '',
            email:'',
            
        }
    }
    updateUser = f => {
        let currentUser = { ...this.state.User };
        f(currentUser).then(updatedUser => {
            this.setState({ currentUser: updatedUser });
        });
    }
    getUsers = () => {
        axios.get(`/api/users/${this.props.match.params.id}/`)
            .then((res) => this.setState({ users: res.data }))
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
    const userId= this.props.userId
        event.preventDefault()
        const result = this.state.user
        axios.patch(`/api/users/${userId}`, result)
        .then((res) => {
            this.props.getUsers()
            this.props.history.push(`/api/users/${userId}`) 
        })
    }

    
    

    render() {
        return (
            <div>
                <span class="badge badge-pill badge-primary"><h3>Edit User Page</h3></span>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        name="email"/>
                    </div>
    
                    <button>EDIT</button>
                    
                </form>
            </div>
        );
    }
}

export default AddUserEdit;