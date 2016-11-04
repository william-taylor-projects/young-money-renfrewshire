
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
import {purple500, purple400, purple300} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Sidebar from './components/sidebar.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500, 
    primary2Color: purple400, 
    primary3Color: purple300, 
  }
});

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

class App extends React.Component {
    openSidebar() {
        this.refs.sidebar.open();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="YMR - Young Money Renfrewshire" iconElementRight={<SideButton/>} onLeftIconButtonTouchTap={()=> this.openSidebar()} />

                    <div className='heading text-center'>
                        <div className="container">
                            <div className="jumbotron">
                                <h1>Young Money Renfrewshire</h1>
                                <p>Jumbo dummy text</p>
                            </div>    
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1>What is YMR?</h1>
                                <p>
                                    YMR or Young Money Renfewshire is an application for under 25s who
                                    can help with your financial problems. We can help with budgeting, 
                                    where to find deals and where to find the best advice.
                                    The application was built in collaboration with the Poverty Alliance,
                                    Barnardos staff and Renfewshire Council.
                                </p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-xs-4 text-center'>
                                <img className='img-responsive img-center' src='http://www.scdc.org.uk/media/resources/images/news/PovertyAllianceLogo.gif' />
                            </div>
                            <div className='col-xs-4 text-center'>
                                <img className='img-responsive img-center' src="https://upload.wikimedia.org/wikipedia/en/6/69/Barnardo's_logo.png" />
                            </div>
                            <div className='col-xs-4'>
                                <img className='img-responsive img-center' src='https://www.myjobscotland.gov.uk/sites/default/files/styles/medium/public/organisations/Refrewshire_0.png?itok=iMO5CvRG' />
                            </div>
                        </div>
                    </div>

                    <Sidebar ref='sidebar' />
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
 <div className='container-fluid'>
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

*/