
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from 'material-ui/AppBar';

import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import ReactTap from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';
import 'es6-promise/auto';

ReactTap();

import FloatingActionButton from './components/floating-button.js';
import { scrollToTop } from './services/scrollbar.js';
import { store } from './store/store.js';

import SimpleDialog from './dialogs/message-dialog.js';
import { bootstrapTheme } from './theme.js';
import SideButton from './components/sidebutton.js';
import Sidebar from './components/sidebar.js';

import Calculator from './sections/calculator.js';
import GoodDeals from './sections/good-deals.js';
import Information from './sections/information.js';
import TopTips from './sections/top-tips.js';
import WhatsNew from './sections/whats-new.js';
import BankMap from './sections/map.js';
import Page404 from './sections/404.js';
import Home from './sections/home.js';
import Admin from './sections/admin.js';

const applicationTitle = "YMR - Young Money Renfrewshire";
const customTheme = bootstrapTheme();

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            title: '',
            message: ''
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
                message: <span>You can send us an email at <a href='mailto:youngmoneyren@gmail.com'>youngmoneyren@gmail.com</a></span>
            });
        } else if(name == "download") {
            window.open('zip/app.zip');
        } else {
            browserHistory.push('/' + name);
        }
    }

    removeLoadingIcon() {
        const element = document.getElementById("spinner");

        if(element) {
            element.remove();
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
            title: <span style={{cursor: 'pointer'}}>{applicationTitle}</span>,
            iconElementRight: <SideButton/>,
            onLeftIconButtonTouchTap: () => this.openSidebar()
        };

        this.removeLoadingIcon();

        return (
            <ThemeProvider muiTheme={customTheme}>
                <Provider store={store}>
                    <div>
                        <HeaderBar onTitleTouchTap={() => browserHistory.push('/')} {...headerProps}/>
                        <SimpleDialog {...dialogProps} />
                        <Sidebar ref='sidebar' onChange={name => this.change(name)} />
                        <Router history={browserHistory}>
                            <Route path="/info" component={Information} />
                            <Route path="/deals" component={GoodDeals}  />
                            <Route path="/tips" component={TopTips}  />
                            <Route path="/new" component={WhatsNew}  />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/admin" component={Admin}  />
                            <Route path="/map" component={BankMap} />
                            <Route path="*" component={Home} />
                        </Router>
                        <FloatingActionButton />
                    </div>
                </Provider>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));