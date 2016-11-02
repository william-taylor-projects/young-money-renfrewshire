
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class SideButton extends React.Component {
    render() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton> }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem primaryText="Renfewshire Council" />
                <MenuItem primaryText="Barnardos" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Admin" />
            </IconMenu>
        );
    }
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500, 
    primary2Color: green500, 
    primary3Color: green500, 
  },
  appBar: {
    
    height: 80,
  }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    openDrawer() {
        this.setState({ open: true });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Youth Financial Advice" iconElementRight={<SideButton/>} onLeftIconButtonTouchTap={()=> this.openDrawer()} />

                    <div className='container-fixed'>
                        <div className="jumbotron jumbotron-pad">
                            <h1>Welcome !</h1> 
                            <p>
                                Here you can find all the help you need to manage your finances like an adult.
                            </p> 
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="images/store.jpg" className='img-rounded' />
                                <h3><b>From Your Local Charity!</b></h3><hr/>
                                <p>
                                    Get expert advice from a charity you know and trust. 
                                    We will help you manage your finances and allow you to
                                    make the most of your money.
                                </p>
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail text-center">
                                    <img src="images/bank.jpg" className='img-rounded' />
                                    <h3><b>Find Local Banks!</b></h3><hr/>
                                    <p>
                                        We have travelled Renfewshire and found every useful
                                        building, bank or organisation that we know can help you.
                                        Use the Finder to find local services near you!
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail text-center">
                                    <img src="images/map.png" className='img-rounded' />
                                    <h3><b>Be The Accountant!</b></h3><hr/>
                                    <p>
                                        Want to budget for the future? Use our finance Calculator.
                                        It will help you budget for the coming months and make sure 
                                        you save those penny's.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                   
                    <Drawer docked={false} open={this.state.open} width={300} onRequestChange={(open) => this.setState({open})}>
                        <AppBar title="Menu" iconElementLeft={<div></div>} style={{"textAlign":"center"}} />
                        <img className='logo img-rounded' src='images/barnardos.jpg' />
                        <MenuItem primaryText='Home Page' leftIcon={<PersonAdd />}></MenuItem>
                        <MenuItem primaryText='Local Branches' leftIcon={<PersonAdd />}></MenuItem>
                        <MenuItem primaryText='Finance Calculator' leftIcon={<PersonAdd />}></MenuItem>
                        <MenuItem primaryText='Contact' leftIcon={<PersonAdd />}></MenuItem>
                        <MenuItem primaryText='F&Q' leftIcon={<PersonAdd />}></MenuItem>

                         <div className="navbar navbar-default navbar-fixed-bottom footer">
                            <div className="container">
                                <p className="navbar-text pull-left">© 2016 - Site Built By William Taylor</p>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));