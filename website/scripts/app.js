
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from 'material-ui/AppBar';
import ReactTap from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';

ReactTap();

import SimpleDialog from './dialogs/message-dialog.js';
import { bootstrapTheme } from './theme.js';
import SideButton from './components/sidebutton.js';
import Sidebar from './components/sidebar.js';

import Calculator from './sections/calculator.js';
import BankMap from './sections/map.js';
import Page404 from './sections/404.js';
import Home from './sections/home.js';

const applicationTitle = "YMR - Young Money Renfrewshire";
const customTheme = bootstrapTheme();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            title: '',
            message: '',
            component: <Home />
        };
    }
    
    openSidebar() {
        this.refs.sidebar.open();
    }

    change(name) {
        this.refs.sidebar.close();

        if(name == 'contact') {
            this.setState({
                open: true,
                title: 'Contact Us?',
                message: 'Contact information will be release shortly'
            });
        } else if(name == 'f&q') {
             this.setState({
                open: true,
                title: 'F&Q',
                message: 'Please email us to have any questions answered'
            });
        } else {
            this.switchPage(name);
        }
    }

    switchPage(name) {
        switch(name) {
            case 'home': 
                this.setState({ component: <Home /> });
                break;
            case 'calculator':
                this.setState({ component: <Calculator /> });
                break;
            case 'map':
                this.setState({ component: <BankMap /> });
                break;
            default: 
                this.setState({ component: <Page404 /> });
                break;
        }
    }

    render() {
        const dialogProps = {
            onClose: () => this.setState({open: false}),
            message: this.state.message,
            title : this.state.title,
            open: this.state.open,
            ref: 'dialog'
        };

        const headerProps = {
            title: applicationTitle,
            iconElementRight: <SideButton/>,
            onLeftIconButtonTouchTap: () => this.openSidebar()
        };

        return (
            <ThemeProvider muiTheme={customTheme}>
                <div>
                    <HeaderBar {...headerProps}/>
                    <SimpleDialog {...dialogProps} />
                    {this.state.component}
                    <Sidebar ref='sidebar' onChange={name => this.change(name)} />
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));