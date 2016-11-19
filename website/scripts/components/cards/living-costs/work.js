import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class WorkCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Work" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Lunches & Snacks' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Takeaway coffees, etc' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}