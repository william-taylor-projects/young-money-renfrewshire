import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class FoodCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Food" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Grocery shopping' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Takeaways' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Alcohol' hintText="£" />
                            </div>
                            <div className='col-md-6'>
                                <TextField fullWidth={true} floatingLabelText='Cigarettes' hintText="£" />
                            </div>
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}