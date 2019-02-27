import React, { Component } from 'react';
import UserList from './UserList';
import styled from 'styled-components'
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';
import Navbar from './Navbar'
import CenterList from './CenterList';

const WreckingBall = styled.img`
            width: 200px;
            height:200px;
            align-items:right;
`
const GenralStyles = styled.div`
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`
const HeaderImg = styled.div`
display:flex;
flex-direction:row;
align-items:left;
background-image: url("https://images.unsplash.com/photo-1535103729436-130b3c44f422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
background-size:contain;
background-repeat:no-repeat;
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
        User: {
            name: "",
            email: "",
            profilePic: "",
            userList: [{
                genre: "clothes",
                name: "pasta",
                itemCount: 3
            }]
        }
    };


    updateCenterList = f => {
        let oldPosts = [...this.state.centerList];
        f(oldPosts).then(updatedPosts => {
            this.setState({ postList: updatedPosts });
        });
    }

    updateUser = f => {
        let currentUser = { ...this.state.currentUser };
        f(currentUser).then(updatedUser => {
            this.setState({ currentUser: updatedUser });
        });
    }

    componentDidMount() {
        this.getAllPosts();
        this.getCurrentUser();
    }

    }


    render() {
        return (

            <div>
                <HeaderImg>
                    <span class="badge badge-pill badge-primary"><h1>Give and Get</h1></span>
                    <Header>
                        {/* <Slide right> */}
                        <WreckingBall src="https://cdn1.iconfinder.com/data/icons/banking-glyph/614/970_-_Charity-512.png" alt="..." />
                        {/* </Slide> */}

                        {/* <Bounce right> */}
                        <h1>Giving what is Needed</h1>
                        {/* </Bounce> */}
                        <CenterList />
                    </Header>
                </HeaderImg>
                <Navbar />

            </div>


        );
    }
}

export default HomePage;