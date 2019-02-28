import React, { Component } from 'react';
import axios from 'axios'

class AddListForm extends Component {
    state = {
        CenterList: {
            name:"",
            genre:"",
            itemCount:"",
            centerId: ""
        }
           
        
    }
    getCenterList = async () => {
        const res = await axios.get(`/api/centerlist/`)
        console.log(res.data)
        this.setState({CenterList: res.data})
        console.log(this.state.CenterList)
    }
    

    handleChange = (event) => {
        const newState = { ...this.state.CenterList }
        newState[event.target.name] = event.target.value
        this.setState({ CenterList: newState })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.CenterList
        axios.post(`http://localhost:8000/api/centers/`, result)
        .then((res) => {
            this.getCenterList()
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
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="genre"
                        value={this.state.genre}
                        onChange={this.handleChange}
                        name="genre"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="How many"
                        value={this.state.itemCount}
                        onChange={this.handleChange}
                        name="itemcount"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="center id"
                        value={this.state.centerId}
                        onChange={this.handleChange}
                        name="centerId"/>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddListForm;