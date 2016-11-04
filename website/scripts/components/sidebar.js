
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import ReactDOM from 'react-dom';
import React from 'react';

export default class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    open() {
        this.setState({ open: true });
    }

    close() {
         this.setState({ open: false });
    }

    render() {
        return (
            <Drawer docked={false} open={this.state.open} width={250} onRequestChange={(open) => this.setState({open})}>
                <AppBar title="Menu" iconElementLeft={<div></div>} style={{"textAlign":"center"}} />
                
                <MenuItem primaryText='Home Page' leftIcon={<PersonAdd />}></MenuItem>
                <MenuItem primaryText='Local Branches' leftIcon={<PersonAdd />}></MenuItem>
                <MenuItem primaryText='Finance Calculator' leftIcon={<PersonAdd />}></MenuItem>
                <MenuItem primaryText='Contact' leftIcon={<PersonAdd />}></MenuItem>
                <MenuItem primaryText='F&Q' leftIcon={<PersonAdd />}></MenuItem>
                <br/>
                
                <img className='logo img-rounded' src='images/council.png' />
            </Drawer>
        );
    }
}