import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import React from 'react';
import Dialog from '../dialogs/message-dialog.js';


import { markers, news, tips, deals } from '../store/actions.js';
import { Tabs, Tab } from 'material-ui/Tabs';

import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { connect } from 'react-redux';
import { post, get } from '../services/http.js';
import moment from 'moment';

const style = {
  margin: 12
};

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = { username: '', password: '' }
    }

    render() {
        const { username, password } = this.state;
        
        return (
            <div className='col-md-offset-3 col-md-6'>
                <div className="page-header">
                    <h1>Login</h1>
                </div>
                <div className='up'>
                    <TextField 
                        onChange={(e) => this.setState({ username: e.target.value })}
                        fullWidth={true}
                        hintText="Username"
                        errorText={this.props.error ? 'Error with username': ''}
                        floatingLabelText="Username"
                        type="username"/>
                    <br />
                    <TextField 
                        onChange={(e) => this.setState({ password: e.target.value })}
                        fullWidth={true}
                        hintText="Password"
                        errorText={this.props.error ? 'Error with password': ''}
                        floatingLabelText="Password"
                        type="password"/>
                    <br />
                </div>
                <div className='down'>
                    <RaisedButton 
                        onClick={() => this.props.onLogin(username, password)} 
                        label="Login"
                        style={style} 
                        primary={true} />
                    <RaisedButton 
                        onClick={() => this.props.onHelp(username, password)} 
                        label="Help" 
                        style={style} 
                        secondary={true} />
                </div>
            </div>
        )
    }
};

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            deal: { title: '', description: '', price: '', link: '', image: '' },
            news: { date: '', message: '', title: '' },
            selectedNews: -1,
            selectedDeal: -1
        }
    }

    editNews(date, message, title) {
        this.setState({ news: { date, message, title } });
    }

    postNews() {
        post('/news/post', { news: this.state.news }, json => {
            this.props.dispatch(news(json.news))
        });
    }

    deleteNews() {
        if(this.state.selectedNews >= 0) {
            const newsToDelete = this.props.whatsnew.news[this.state.selectedNews];
            post('/news/delete', { news: newsToDelete }, json => {
                this.props.dispatch(news(json.news))
            });
        }  
    } 

    newsSelected(e) {
        this.setState({ selectedNews: e.length == 0 ? -1 : e[0] });
    }

    editDeal(e, name) {
        const deal = this.state.deal;
        deal[name] = e.target.value;
        this.setState({ deal: deal });
    }

    postDeal() {
        post('/deals/post', { deal: this.state.deal }, json => {
            this.props.dispatch(deals(json.deals))
        });
    }

    deleteDeal() {
        if(this.state.selectedDeal >= 0) {
            const dealToDelete = this.props.gooddeals.deals[this.state.selectedDeal];
            post('/deals/delete', { deal: dealToDelete }, json => {
                this.props.dispatch(deals(json.deals))
            });
        }  
    } 

    dealSelected(e) {
        this.setState({ selectedDeal: e.length == 0 ? -1 : e[0] });
    }

    render() {
        const { date, message, title } = this.state.news;

        return (
            <div>
                <div className='dashboard-heading text-center'>
                    <div className="container-fixed">
                        <div className="jumbotron">
                            <h1>Admin Dashboard</h1>
                        </div>
                    </div>
                </div>
                <Tabs className='container-fixed'>
                    <Tab label='Whats New'>
                        <div className='container'>
                            <div className='col-md-12 down'>
                                <h2>Whats New Posts</h2><hr/>
                                <Table height={'300px'} onRowSelection={e => this.newsSelected(e)}>
                                    <TableBody deselectOnClickaway={false}>
                                    {
                                        this.props.whatsnew.news.map((e, index) => {
                                            return (
                                                <TableRow selected={index == this.state.selectedNews} key={index}>
                                                    <TableRowColumn>{moment(Number(e.date.N)).format('DD/MM/YYYY')}</TableRowColumn>
                                                    <TableRowColumn>{e.title.S}</TableRowColumn>
                                                    <TableRowColumn>{e.body.S}</TableRowColumn>
                                                </TableRow>
                                            )
                                        })
                                    }
                                    </TableBody>
                                </Table>
                                <RaisedButton onClick={() => this.deleteNews()} className='pull-right' label="Delete" style={style} primary={true} />
                            </div>
                            <div className='col-md-12 down'>
                                <h2>Post News</h2><hr/>
                                <TextField onChange={e => this.editNews(date, message, e.target.value)} floatingLabelText="Enter Title" fullWidth={true} /><br />
                                <TextField onChange={e => this.editNews(date, e.target.value, title)} floatingLabelText="Enter Body" rows={5} multiLine={true} fullWidth={true} /><br />
                                <DatePicker onChange={(e, d) => this.editNews(d.getTime(), message, title)}  mode="landscape" hintText="Enter Date" fullWidth={true} />
                                <RaisedButton 
                                    onClick={() => this.postNews()} 
                                    className='pull-right' 
                                    label="Post" 
                                    style={style}
                                    primary={true} />
                            </div>
                        </div>
                    </Tab>
                    <Tab label='Deals'>
                        <div className='container'>
                            <div className='col-md-12 down'>
                                <h2>Good Deals</h2><hr/>
                                <Table onRowSelection={e => this.dealSelected(e)}>
                                    <TableBody deselectOnClickaway={false}>
                                    {
                                        this.props.gooddeals.deals.map((e, index) => {
                                            return (
                                                <TableRow selected={index == this.state.selectedDeal} key={index}>
                                                    <TableRowColumn>{e.title.S}</TableRowColumn>
                                                    <TableRowColumn>£{e.price.N}</TableRowColumn>
                                                    <TableRowColumn>{e.description.S}</TableRowColumn>
                                                    <TableRowColumn>{e.link.S}</TableRowColumn>
                                                    <TableRowColumn>{e.image.S}</TableRowColumn>
                                                </TableRow>
                                            )
                                        })
                                    }
                                    </TableBody>
                                </Table>
                                <RaisedButton onClick={() => this.deleteDeal()} className='pull-right' label="Delete" style={style} primary={true} />
                            </div>
                            
                            <div className='col-md-12 down'>
                                <h2>Post Deal</h2><hr/>
                                <TextField onChange={e => this.editDeal(e, 'title')} floatingLabelText="Enter Title" fullWidth={true} /><br />
                                <TextField onChange={e => this.editDeal(e, 'image')} floatingLabelText="Enter Image" fullWidth={true} /><br />
                                <TextField onChange={e => this.editDeal(e, 'price')} floatingLabelText="Enter Price" fullWidth={true} /><br />
                                <TextField onChange={e => this.editDeal(e, 'link')} floatingLabelText="Enter Link" fullWidth={true} /><br />
                                <TextField onChange={e => this.editDeal(e, 'description')} floatingLabelText="Enter Description" rows={3} multiLine={true} fullWidth={true} /><br />
                                <RaisedButton 
                                    onClick={() => this.postDeal()} 
                                    className='pull-right' 
                                    label="Post" 
                                    style={style}
                                    primary={true} />
                            </div>
                        </div>
                    </Tab>
                    <Tab label='Comments'>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

const Login = connect(state => state)(LoginScreen);
const Board = connect(state => state)(Dashboard);

export default class Admin extends React.Component {
    constructor() {
        super();
        this.state = { login: true, error: false, help: false }
    }

    login(username, password) {
        fetch('/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ login: json.login, error: !json.login });
        });
    }

    helpClose() {
        this.setState({ help: false });
    }

    help() {
        this.setState({ help: true });
    }

    componentWillUnmount() {
        this.setState({login: false , error: false });
    }

    render() {
        const bashboardComponent = <Board />;
        const messageBody = `
            If you have been given the admin password by barnardos
            you can edit what appears in the website by logging in here.
        `;

        const loginComponent = 
            <Login error={this.state.error}  
                onLogin={(usr, pwd) => this.login(usr, pwd)} 
                onHelp={() => this.help()} />;
        
        return (
            <div className='container-fixed'>
                { this.state.login ? bashboardComponent: loginComponent }
                <Dialog open={this.state.help} 
                    onClose={() => this.helpClose()} 
                    ref='dialog' 
                    title='Cant Login?' 
                    message={messageBody}/>
            </div>
        )
    }
}