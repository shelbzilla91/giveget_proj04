import React, { Component } from 'react';
import axios from 'axios'

class AddListForm extends Component {
    state = {
        centerlist: [],
        addCenterList:false
        }  
   
    }
    
    handleChange = (event) => {
        const newState = { ...this.state.centerlist }
        newState[event.target.name] = event.target.value
        this.setState({ centerlist: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.centerlist
        axios.post(`/api/centers/`, result)
        .then((res) => {
            this.props.getCenterList()
            this.props.toggleAddCenterForm()
        
        });
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
                        value={this.state.centerlist.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="genre"
                        value={this.state.centerlist.genre}
                        onChange={this.handleChange}
                        name="genre"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="How many"
                        value={this.state.centerlist.itemCount}
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