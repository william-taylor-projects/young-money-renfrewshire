
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Calculator extends React.Component {
    render() {
        return (
            <div>
                <div className='calculator-heading text-center'>
                    <div className="container-fixed">
                        <div className="jumbotron">
                            <h1>Finance Calculator</h1>
                        </div>    
                    </div>
                </div>
                <div className='container down'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='col-md-12'>
                                <h1>Income</h1><hr/>
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Monthly Salary' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Monthly Allowance' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Monthly Benefits' hintText="$" />
                            </div>
                        </div>
                    </div>
                    <div className='row down'>
                        <div className='col-md-12'>
                            <span className='pull-left elevate'>Less Income</span>
                            <span className='pull-right elevate'>More Income</span>
                            <Slider defaultValue={0.5} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='col-md-12'>
                                <h1>Expenses</h1><hr/>
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Montly Rent' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Phone Bill' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Food Bill' hintText="$" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Car Insurance + Bills' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='House Bills' hintText="$" />
                            </div>
                            <div className='col-md-4'>
                                <TextField fullWidth={true} floatingLabelText='Council Tax' hintText="$" />
                            </div>
                        </div>
                    </div>
                    <div className='row down'>
                        <div className='col-md-12'>
                            <span className='pull-left elevate'>Less Expenses</span>
                            <span className='pull-right elevate'>More Expenses</span>
                            <Slider defaultValue={0.5} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2>Final Income Per Month: <strong>$500</strong></h2><hr/>
                            <RaisedButton label="Give Me Tips!" primary={true} />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}