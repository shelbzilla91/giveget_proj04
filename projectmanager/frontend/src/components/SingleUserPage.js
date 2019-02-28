import React, { Component } from 'react';
import axios from 'axios'
import UserList from './UserList';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import AddUserEdit from './AddUserEdit';
import styled from 'styled-components'

const GenralStyles = styled.div `
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`

const UserListDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:right;
align-items:right;
width: 100vw;
height:150vh;
border:5px #55DBD9;
`
// const Container = styled.div `
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:right;
// width: 100vw;
// height:230vh;
// border:5px solid #4286f4;
// `

const EditContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 20vw;
height:10vh;
border:5px solid #4286f4;
border-radius:15px;
`


class SingleUserPage extends Component {
    state = {
        user: [{
            name:"Fred",
            email:"ajbkjda@gmail.com"
        }]
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`http://localhost:8000/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            this.setState({ user: res.data })
            
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`http://localhost:8000/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }
  

    editUsers = () => {
        axios.get()
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
         
          <div>
                

                {/* <Button color="primary">{this.state.user.name}</Button>
                <Button color="primary">{this.state.user.email}</Button> */}

               
               
              
                
                
                {/* <EditContainer>
                <AddUserEdit 
                userId={this.props.match.params.userId}
                history={this.props.history}   
                getUsers={this.getUsers}             
                />
                <div><button class="badge badge-pill badge-primary center" onClick={this.deleteUser}>Delete User</button></div>
        
    
               
                 */}
         
        
        </div>
        );
    }
}

export default SingleUserPage;