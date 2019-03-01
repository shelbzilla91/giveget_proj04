import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
        
                <h3>Heading <Badge color="primary">Give and Get</Badge></h3>
            </div>
        );
    }
}

export default Header;