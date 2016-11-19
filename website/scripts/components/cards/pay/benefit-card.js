
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React from 'react';

export default class BenefitCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title="Benfits & Tax Credits" actAsExpander={true} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Jobseeker's Allowance" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Income Support" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Working Tax Credit" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Child Tax Credit" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Child Benefit" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Employment and Support Allowance" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Universal Credit" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Disability Living Allowance" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Attendance Allowance" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Carer's Allowance" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Housing Benefit" hintText="£" />
                        </div>
                        <div className='col-md-6'>
                            <TextField fullWidth={true} floatingLabelText="Materinity Allowance" hintText="£" />
                        </div>
                    </div>
                </CardText>
            </Card>
        )
    }
}