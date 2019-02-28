import React, { Component } from 'react';
import Navbar from './Navbar';
import CenterList from './CenterList';

class CentersPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <CenterList/>
            </div>
        );
    }
}

export default CentersPage;