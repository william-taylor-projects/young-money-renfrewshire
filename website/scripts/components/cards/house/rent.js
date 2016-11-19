import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class RentCard extends React.Component {
    render() {
        return (
            <Card initiallyExpanded={true}>
                <CardHeader title="Mortgage & Rent" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Monthly Rent' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Monthly Mortgage' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}