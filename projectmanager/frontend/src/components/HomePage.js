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
        centers: [],
        users: [{
            name: "Shelby",
            email: "shelbgatozillatron@gmail.com",
            userList: []
        }]
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

        const users = this.state.centers.map((center, i) => {
            return (
                <div key={i}>
                    {center.location}
                    {center.name}
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
                
                {users}
            </div>


        );
    }
}

export default HomePage;