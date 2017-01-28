
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider, connect } from 'react-redux'
import ReactTap from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';
import 'es6-promise/auto';

ReactTap();

import FloatingActionButton from './components/floating-button.js';
import { scrollToTop } from './services/scrollbar.js';
import { toggleCalculator } from './store/actions.js';
import { store } from './store/store.js';

import SimpleDialog from './dialogs/message-dialog.js';
import { bootstrapTheme } from './theme.js';
import SideButton from './components/sidebutton.js';
import Sidebar from './components/sidebar.js';

import Calculator from './sections/calculator.js';
import GoodDeals from './sections/good-deals.js';
import Emergency from './sections/emergency.js'
import Information from './sections/information.js';
import TopTips from './sections/top-tips.js';
import WhatsNew from './sections/whats-new.js';
import BankMap from './sections/map.js';
import Home from './sections/home.js';
import Admin from './sections/admin.js';
import Jobs from './sections/jobs.js';

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

class Header extends React.Component {
    constructor() {
        super();
        browserHistory.listen(location => this.forceUpdate());
    }

    onChange(e) {
        this.props.dispatch(toggleCalculator(!this.props.advanced));
    }
   
    render() {
        const styles = {
            toggle: { marginTop: '13px' },
            trackOff: { backgroundColor: 'rgb(149, 117, 205)' },
            trackSwitched: { backgroundColor: 'rgb(149, 117, 205' },
            labelStyle: {color: 'white'}
        };

        const title = <span style={{cursor: 'pointer'}}>{applicationTitle}</span>;
        const right = window.location.pathname == "/calculator" ? 
            <Toggle onToggle={e => this.onChange(e)} 
                style={styles.toggle} 
                label={this.props.advanced ? 'Advanced' : 'Simple'} 
                labelStyle={styles.labelStyle}
                trackSwitchedStyle={styles.trackSwitched}
                trackStyle={styles.trackOff}
                toggled={this.props.advanced} /> : <SideButton />

        return (
            <HeaderBar 
                onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap} 
                onTitleTouchTap={this.props.onTitleTouchTap}
                onTitleTouchTap={() => browserHistory.push('/')} 
                iconElementRight={right}
                title={title}
            />
        );
    }
}

const CustomHeader = connect(state => { return { advanced: state.calculator.advanced }})(Header);

class App extends React.Component {
    constructor() {
        super();
        this.state = { open: false, title: '', body: ''};
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
                body: <p>You can send us an email at <a href='mailto:youngmoneyren@gmail.com'>youngmoneyren@gmail.com</a></p>
            });
        } else if(name == "download") {
            this.setState({
                open: true,
                title: 'Download',
                body: 
                    <div className='col-md-offset-4 col-md-6'>
                        <div className='col-xs-6'>
                            <a target='_blank' href='zip/app-macos.zip'>
                                <img className='img img-responsive center-block' src='images/windows.png' />
                            </a>
                        </div>
                        <div className='col-xs-6'>
                            <a target='_blank' href='zip/app-win32.zip'>
                                <img className='img img-responsive center-block' src='images/apple.png' />
                            </a>
                        </div>
                    </div>
            });
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
            title : this.state.title,
            open: this.state.open,
            body: this.state.body
        };
        
        this.removeLoadingIcon();

        return (
            <ThemeProvider muiTheme={customTheme}>
                <Provider store={store}>
                    <div>
                        <CustomHeader onLeftIconButtonTouchTap={() => this.openSidebar()} onTitleTouchTap={() => browserHistory.push('/')} />
                        <SimpleDialog {...dialogProps} />
                        <Sidebar ref='sidebar' onChange={name => this.change(name)} />
                        <Router history={browserHistory}>
                            <Route path="/emergency" component={Emergency} />
                            <Route path="/info" component={Information} />
                            <Route path="/deals" component={GoodDeals}  />
                            <Route path="/tips" component={TopTips}  />
                            <Route path="/new" component={WhatsNew}  />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/admin" component={Admin}  />
                            <Route path="/map" component={BankMap} />
                            <Route path="/jobs" component={Jobs} />
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