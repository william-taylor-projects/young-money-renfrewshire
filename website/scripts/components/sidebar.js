
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import ReactDOM from 'react-dom';
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import ShopIcon from 'material-ui/svg-icons/action/shopping-cart';
import MathIcon from 'material-ui/svg-icons/action/assessment';
import HomeIcon from 'material-ui/svg-icons/action/home';
import NewIcon from 'material-ui/svg-icons/av/new-releases';
import InfoIcon from 'material-ui/svg-icons/action/info';
import TopIcon from 'material-ui/svg-icons/action/grade';
import MapIcon from 'material-ui/svg-icons/maps/map';

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

    change(name) {
        if(this.props.onChange) {
            this.props.onChange(name);
        }
    }

    render() {
        return (
            <Drawer docked={false} open={this.state.open} width={250} onRequestChange={(open) => this.setState({open})}>
                <AppBar title="Menu" iconElementLeft={<div></div>} style={{"textAlign":"center"}} />
                <List>
                    <Subheader>Pages</Subheader>
                    <ListItem onClick={() => this.change('')} primaryText="Home" leftIcon={<HomeIcon />} />
                    <ListItem onClick={() => this.change('info')} primaryText="Information" leftIcon={<InfoIcon />} />
                    <ListItem onClick={() => this.change('new')} primaryText="Whats New?" leftIcon={<NewIcon />} />
                    <ListItem onClick={() => this.change('deals')} primaryText="Good Deals" leftIcon={<ShopIcon />} />
                    <ListItem onClick={() => this.change('tips')} primaryText="Top Tips" leftIcon={<TopIcon />} />
                </List>
                <Divider />
                <List>
                    <Subheader>Tools</Subheader>
                    <ListItem onClick={() => this.change('calculator')} primaryText="Finance Calculator" leftIcon={<MathIcon />} />
                    <ListItem onClick={() => this.change('map')} primaryText="Bank Map" leftIcon={<MapIcon />} />
                </List>
                <Divider />
                <List>
                    <Subheader>Help</Subheader>
                    <ListItem onClick={() => this.change('contact')} primaryText="Contact Us" rightIcon={<ActionInfo />} />
                    <ListItem onClick={() => this.change('f&q')} primaryText="F&Q" rightIcon={<ActionInfo />} />
                </List>          
            </Drawer>
        );
    }
}