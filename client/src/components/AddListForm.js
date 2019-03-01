import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CentForm = styled.div `

display:flex;
flex-direction:row;
justify-content:center;
align-content:center;
width: 25vw;
height:35vh;
border-radius: 5px;
border:5px solid #4286f4;
`

class AddListForm extends Component {
    state = {
        Center:{
        lists: {
            name:"",
            genre:"",
            itemCount:Number
        }
           
        
    }}
    getLists = async () => {
        const res = await axios.get(`/api/users/${this.props.lists}`)
        console.log(res.data)
        this.setState({lists: res.data})
        console.log(this.state.lists)
    }
    

    handleChange = (event) => {
        const newState = { ...this.state.lists }
        newState[event.target.name] = event.target.value
        this.setState({ lists: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.lists
        axios.post(`/api/users/${this.props.center.id}`, result)
        .then((res) => {
            this.props.getLists()
            this.props.toggleAddListsForm()
        })
    }
    
    render() {
   
        return (
            <div className="form-group">
            <span className="badge badge-pill badge-primary"><h3>Center Donation List</h3></span>
                <form onSubmit={this.handleSubmit}>
                <div>
                        <input type="text"
                        placeholder="item"
                        name="name"
                        value={this.state.lists.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="genre"
                        value={this.state.lists.genre}
                        onChange={this.handleChange}
                        name="genre"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="How many"
                        value={this.state.lists.itemCount}
                        onChange={this.handleChange}
                        name="itemcount"/>
                    </div>
                    
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddListForm;