
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class PayCard extends React.Component {
    render() {
        return (
            <Card initiallyExpanded={true}>
                <CardHeader title="Pay" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Pay (after tax)' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Income from self-employment' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Statutory Sick Pay' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Statutory Maternity Pay' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}