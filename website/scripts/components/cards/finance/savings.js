
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class SavingsCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Savings" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Regular saving" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Lump sum saving" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Payments into ISAs" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Buying shares & other investments" hintText="£" />
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}