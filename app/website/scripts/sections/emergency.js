
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const contacts = [
    {name: 'Emergency Home Repairs', phone: '0300 300 0300', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Homeless persons', phone: '0800 811 505', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Antisocial Behaviour ', phone: '0300 300 0380', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Roads emergencies', phone: '0300 300 0300', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Fallen trees', phone: '0300 300 0300', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Flooding', phone: '0300 300 0300', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Dangerous buildings', phone: '0300 300 0144', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Environmental protection', phone: '0300 300 0380', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Education and Leisure Services', phone: '0300 300 0170', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Renfrewshire Care', phone: '0141 314 7148', email: 'customerservices.contact@renfrewshire.gov.uk'},
    {name: 'Royal Alexander Hospital', phone: '0141 887 9111', email: 'nhs.HealthScotland-GeneralEnquiries@nhs.net'},
    {name: 'NHS 24', phone: '111', email: 'nhs.HealthScotland-GeneralEnquiries@nhs.net'},
    {name: 'Police Emergency', phone: '999', email: ''},
    {name: 'Police Non Emergency', phone: '101', email: ''}
];

export default class Emergency extends React.Component {
    render() {
        const nameStyle = { paddingLeft: '4px', paddingRight: '4px', width: '150%'};
        const contactStyle = { paddingLeft: '4px', paddingRight: '4px', textAlign: 'right', width: '50%' };
        return (
            <div>
                <div className='container'>
                    <div className="page-header">
                        <h1>Emergency</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>Don't Panic</h3>
                            <p>
                                If you are in a difficult situation don’t panic, there are loads of services provided by your local council and charities to ensure you have help when you need it. You just need to make the right call and there will be people to help you. Find below a list of numbers and email addresses you can use.
                            </p>
                            <br/>
                        </div>
                        <div className='col-md-12'>
                            <Table selectable={false} height={'675px'}>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn style={nameStyle}><strong>Organisation</strong></TableHeaderColumn>
                                        <TableHeaderColumn style={contactStyle}><strong>Phone No</strong></TableHeaderColumn>
                                        <TableHeaderColumn style={contactStyle}><strong>Email</strong></TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
                                {
                                    contacts.map((c, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableRowColumn style={nameStyle}>{c.name}</TableRowColumn>
                                                <TableRowColumn style={contactStyle}>
                                                    <a className={c.name.length == 0 ? 'disabled':''} href={"tel:"+c.phone}>Phone</a>
                                                </TableRowColumn>
                                                <TableRowColumn style={contactStyle}>
                                                    <a className={c.email.length == 0 ? 'disabled':''} href={'mailto:'+c.email}>Email</a>
                                                </TableRowColumn>
                                            </TableRow>
                                        )
                                    })
                                }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}