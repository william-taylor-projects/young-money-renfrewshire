
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class InsuranceCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Insurance" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Life insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Income protection insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Critical illness insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Payment protection insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Credit card insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Health insurance" hintText="£" />
                        </div>
                         <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Dental insurance" hintText="£" />
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}