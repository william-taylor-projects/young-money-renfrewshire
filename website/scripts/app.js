
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from 'material-ui/AppBar';

import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import ReactTap from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';
import 'es6-promise/auto';

ReactTap();

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/editor/vertical-align-top';

import { scrollToTop } from './services/scrollbar.js';
import { store } from './store/store.js';

const style = {
  position: 'fixed',
  bottom: 20,
  right: 20
};

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
                message: 'Contact information will be released shortly.'
            });
        } else if(name == 'f&q') {
             this.setState({
                open: true,
                title: 'F&Q',
                message: 'Please email us to have any questions answered.'
            });
        } else {
            browserHistory.push('/' + name);
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
                <Provider store={store}>
                    <div>
                        <HeaderBar {...headerProps}/>
                        <SimpleDialog {...dialogProps} />
                        <Sidebar ref='sidebar' onChange={name => this.change(name)} />
                        <Router history={browserHistory}>
                            <Route path="/" component={Home} />
                            <Route path="/info" component={Information} />
                            <Route path="/deals" component={GoodDeals} />
                            <Route path="/tips" component={TopTips} />
                            <Route path="/new" component={WhatsNew} />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/map" component={BankMap} />
                            <Route path="/admin" component={Admin} />
                            <Route path="*" component={Page404}/>
                        </Router>
                        <FloatingActionButton onClick={() => scrollToTop(750)} style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </Provider>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));