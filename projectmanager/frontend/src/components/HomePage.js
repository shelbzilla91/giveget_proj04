import React, { Component } from 'react'
import UserList from './UserList'
import axios from 'axios'
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
        users: [],
        
    };
    
    componentDidMount() {
        this.getCenters()
    }

    getCenters = async () => {
        const res = await 
        axios.get(`/api/centers/`)
        console.log(res.data)
        this.setState({centers: res.data})
    }




    render() {

        const users = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    {user.email}
                    {user.name}
                </div>
            )
        })


        return (

            <div>
                <Navbar />


                <Header>
                {users}
                <HeaderImg src="" alt="..." />
                </Header>
                <CentersPage />
        
                
            
            </div>


        );
    }
}

export default HomePage;