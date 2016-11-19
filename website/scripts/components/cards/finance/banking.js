
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class BankingCard extends React.Component {
    render() {
        return (
            <Card initiallyExpanded={true}>
                <CardHeader title="Banking" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Overdraft charges and interest" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Bank account fees" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Penalties" hintText="£" />
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}