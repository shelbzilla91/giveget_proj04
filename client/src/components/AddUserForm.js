import React, { Component } from 'react';
import axios from 'axios'

class AddUserForm extends Component {
    state = {
        user: {
            name: '',
            email:'',
          
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.user
        axios.post('/api/users', result)
        .then((res) => {
            this.props.getUsers()
            this.props.toggleAddUserForm()
        })
    }

    render() {
        return (
            <div>
                <span class="badge badge-pill badge-primary"><h3>Join and Help!</h3></span>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        name="email"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserForm;