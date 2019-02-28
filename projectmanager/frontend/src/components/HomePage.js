import React, { Component } from 'react'
import UserList from './UserList'
import axios from 'axios'
import SingleUserPage from './SingleUserPage'
import styled from 'styled-components'
import Navbar from './Navbar'
import CenterList from './CenterList'
import CentersPage from './CentersPage'
import AddListForm from './AddListForm'


const HeaderImg = styled.img`
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
            name: "",
            location: "",
            itemCount: 3,
            centerList: []
        }],
        User: [{
            name: "Shelby",
            email: "shelbgatozillatron@gmail.com",
            userList: []
        }]
    };


    updateCenterList = f => {
        let oldList = [...this.state.center.centerList];
        f(oldList).then(updatedPosts => {
            this.setState({ postList: updatedPosts });
        });
    }


    render() {

        const users = this.state.User.map((user, i) => {
            return (
                <div key={i}>
                    {user.name}
                </div>
            )
        })


        return (

            <div>
                <Navbar />


                <Header>

                <HeaderImg src="" alt="..." />
                </Header>
                <CentersPage />
                <SingleUserPage updateUser={this.updateUser} user={this.state.User} />
                <h1>{this.state.User.name}</h1>
                {users}
            </div>


        );
    }
}

export default HomePage;