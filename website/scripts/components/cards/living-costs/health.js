import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class HealthCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Health & Beauty" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Hairdressing' hintText="£" />
                            </div>
                             <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Beauty Treatments' hintText="£" />
                            </div>
                             <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Toiletries' hintText="£" />
                            </div>
                             <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Eye Care' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Eye Care' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Dental Care' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Medicine' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}