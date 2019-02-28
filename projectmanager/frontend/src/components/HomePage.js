import React, { Component } from 'react'
import UserList from './UserList'
import axios from 'axios'
import SingleUserPage from './SingleUserPage'
import styled from 'styled-components'
import Navbar from './Navbar'
import CenterList from './CenterList'
import CentersPage from './CentersPage'
import AddListForm from './AddListForm'

const WreckingBall = styled.img`
            width: 200px;
            height:200px;
            align-items:right;
`
const GenralStyles = styled.div`
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`

const Header = styled.div`
display:flex;
flex-direction:flex-end;
height:20vh;

`

class HomePage extends Component {
    state = {
        Center: [{
            name: "Goodwill",
            location: "Midtown",
            itemCount: 3,
            centerList: [{
                genre: "food",
                title: "pasta",
                itemCount: 3,
            }]
        }],
        User: [{
            name: "Shelby",
            email: "shelbgatozillatron@gmail.com",
            userList: [{
                genre: "clothes",
                name: "pasta",
                itemCount: 3
            }]
        }]
    };


    updateCenterList = f => {
        let oldPosts = [...this.state.centerList];
        f(oldPosts).then(updatedPosts => {
            this.setState({ postList: updatedPosts });
        });
    }

    updateUser = f => {
        let currentUser = { ...this.state.User };
        f(currentUser).then(updatedUser => {
            this.setState({ currentUser: updatedUser });
        });
    }
    getUsers = () => {
        axios.get(`http://localhost:8000/api/users/`)
        .then((res) => this.setState({ User: res.data }))
    }

    componentDidMount() {
        this.getUsers();
     
    }

    


    render() {
        return (

            <div>
          
                    <span className="badge badge-pill badge-primary"><h1>Give and Get</h1></span>
                    <Header>
                       
                        <WreckingBall src="" alt="..." />
                        }

                    
                        <h1>Giving what is Needed</h1>
                    
                        <CentersPage/>
                    </Header>
               
                <SingleUserPage updateUser={this.updateUser} user={this.state.User} />
                {/* <h1>{this.state.User.name}</h1> */}
                {this.state.User.map((user,i)=> {
                    return(
                    <div key = {i}>
                    {user.name}
                    </div>
                    
                    )}) }
                
        
              
            </div>


        );
    }
}

export default HomePage;