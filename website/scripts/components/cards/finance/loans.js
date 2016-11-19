
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class LoansCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Loans" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Loan repayments" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Student loan repayments" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Credit card repayments" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Hire purchase & catalogue repayments" hintText="£" />
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}