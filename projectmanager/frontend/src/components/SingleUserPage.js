import React, { Component } from 'react';
import axios from 'axios'
import UserList from './UserList';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import AddUserEdit from './AddUserEdit';
import styled from 'styled-components'


const WreckingBall = styled.img`
            width: 100px;
            height:100px;
`
const CenterFormHolder = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 50vw;
height:50vh;
border:5px solid blue;
`
const GenralStyles = styled.div `
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`

const UserImg = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 40vw;
    height:55vh;
    color:#2BDEDB;
    border:5px solid blue;
    border-radius:15px;
`
const CenterList = styled.div `
display:flex;
flex-direction:row;
justify-content:right;
align-items:right;
width: 100vw;
height:150vh;
border:5px #55DBD9;
`
const Container = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:right;
width: 100vw;
height:230vh;
border:5px solid #4286f4;
`
const InfoContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 30vw;
height:10vh;
background-color:#2BDEDB;
border:5px solid #4286f4;
border-radius:15px;
`
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
const Holder = styled.div `
display:flex;
flex-direction: column;
align-items: center;

`

class SingleUserPage extends Component {
    state = {
        user: {},
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            this.setState({ user: res.data })
            
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }
  

    editUsers = () => {
        axios.get()
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
            <GenralStyles>
            <div>
                
                <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>

          
                <WreckingBall src="http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt="..."/>
           
             
                <h1>Building Community through Giving</h1>
       
                <nav class="navbar navbar-light bg-light">
                    <a class="nav-link active" href="/">Home</a>
 
                </nav>
                <Container><CenterList>
                <Holder>  
                
                <InfoContainer>
                <span class="badge badge-pill badge-primary">{this.state.user.name}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.email}</span>
                </InfoContainer>
                </Holder>
               
              
                
                <CenterFormHolder>
                <EditContainer>
                <AddUserEdit 
                userId={this.props.match.params.userId}
                history={this.props.history}   
                getUsers={this.getUsers}             
                />
                <div><button className="badge badge-pill badge-primary center" onClick={this.deleteUser}>Delete User</button></div>
                </EditContainer>
        
                </CenterFormHolder>
                </CenterList>
                <CenterList
                userId={this.props.match.params.userId}
                />
                
              </Container>
        
            </div>
            </GenralStyles>
            
        );
    }
}

export default SingleUserPage;