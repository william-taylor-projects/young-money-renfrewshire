
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec felis nec dolor vestibulum dictum id ut sem. Vestibulum a sollicitudin erat. Curabitur commodo leo orci, eu volutpat lacus ornare in. Ut tristique non ipsum consectetur placerat. Suspendisse non ex pulvinar, finibus lorem non, dictum libero. Ut erat lorem, malesuada cursus nibh nec, finibus malesuada purus. Vestibulum convallis nulla rutrum luctus viverra. Maecenas pellentesque elementum quam non sodales. Ut sollicitudin nunc id nulla condimentum fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sed magna ut ante aliquam blandit sed id justo. Donec vel dolor vitae tortor auctor feugiat. Maecenas mollis neque non diam efficitur mattis. Pellentesque mattis sollicitudin lorem ut dapibus.
                            </p>
                            <br/>
                        </div>
                        <div className='col-md-12'>
                            <Table selectable={false} height={'500px'}>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn style={nameStyle}><strong>Organisation</strong></TableHeaderColumn>
                                        <TableHeaderColumn style={contactStyle}><strong>Phone No</strong></TableHeaderColumn>
                                        <TableHeaderColumn style={contactStyle}><strong>Email</strong></TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
                                {
                                   [{},{},{},{},{},{},{},{},{},{}].map((e, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableRowColumn style={nameStyle}>Renfrewshire Council</TableRowColumn>
                                                <TableRowColumn style={contactStyle}><a href="tel:07852766987">Phone</a></TableRowColumn>
                                                <TableRowColumn style={contactStyle}><a href='mailto:dummyemail@yahoo.co.uk'>Email</a></TableRowColumn>
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