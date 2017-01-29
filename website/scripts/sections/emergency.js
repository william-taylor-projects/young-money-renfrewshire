
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default class Emergency extends React.Component {
    render() {
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
                            <Table height={'500px'}>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn><strong>Name</strong></TableHeaderColumn>
                                        <TableHeaderColumn><strong>Services</strong></TableHeaderColumn>
                                        <TableHeaderColumn><strong>Phone No</strong></TableHeaderColumn>
                                        <TableHeaderColumn><strong>Email</strong></TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
                                {
                                   [{},{},{},{},{},{},{},{},{},{}].map((e, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableRowColumn>William Taylor</TableRowColumn>
                                                <TableRowColumn>Personal Advice</TableRowColumn>
                                                <TableRowColumn><a href="tel:07852766987">07852766987</a></TableRowColumn>
                                                <TableRowColumn><a href='mailto:dummyemail@yahoo.co.uk'>dummyemail@yahoo.co.uk</a></TableRowColumn>
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