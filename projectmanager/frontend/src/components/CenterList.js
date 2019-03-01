import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import AddListForm from './AddListForm';


const GeneralStyles = styled.div`
    text-align: center;
`
const UserImg = styled.img`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 25vw;
height:35vh;
border:5px solid #4286f4;
`
const RecImg = styled.div `
display: flex;
flex-direction:row;
justify-content:center;
width:35vw;
color: #4286f4;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #4286f4;
border-radius: 3px;
display: block;
`
const Container = styled.div `
display: flex;
flex-direction:row;
justify-content:left;
align-content: center;
width:100vw;
height:40vh;
background-color:#55DBD9;
border: 5px solid #4286f4;

`
const centForm = styled.div `

display:flex;
flex-direction:row;
justify-content:left;
border: 5px solid #4286f4;


`

class CenterList extends Component {
    state = {
        centers: [],
        addCenter: false
    }
    
    componentDidMount() {
        this.getCenters()
    }

    getCenters = async () => {
        const res = await axios.get(`/api/centers/`)
        console.log(res.data)
        this.setState({centers: res.data})

    }
    deleteCenter = (event, center) => {
        event.preventDefault()
        axios.delete(`/api/centers/${center.id}`).then(() => {
            this.getCenters()
        })
    }


    toggleAddCenterForm = () => {
        this.setState({ addCenterForm: !this.state.addCenter})
    }

    render() {
      


        return (
            <GeneralStyles>
                <centForm>
                <h1>Add Center</h1>
                <button className="badge badge-pill badge-primary center" onClick={this.toggleAddRecordForm}>Add Center</button>
                <button class="badge badge-pill badge-primary center" onClick={this.deleteRecord}>Delete Center</button>
                {this.state.addCenter ? <AddListForm
                    getCenters={this.getCenters}
                    toggleAddRecordForm={this.toggleAddCenterForm}
                    center= {this.props.centers}
                    /> : null}
                    </centForm>
                    
                    <div>
                    
                {this.state.centers.map((center, i) => {
                    return (
                        <div key={i}>
                        
                        <Container>
                        <h3>{center.name}</h3>
                        <h3>{center.location}</h3>
                        </Container>
                    </div>
                    )
                }
                    
                )}
                </div>
            </GeneralStyles>
           
        );
    }
}

export default CenterList;