import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class SchoolCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="School" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='School Fees' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='School Trips' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='School Dinners' hintText="£" />
                            </div>
                             <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='After-school clubs' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}