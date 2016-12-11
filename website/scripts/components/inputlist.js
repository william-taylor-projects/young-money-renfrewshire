import { Card, CardHeader, CardText } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import { updateField } from '../store/actions.js';
import { dispatch } from '../store/store.js';
import { connect } from 'react-redux';
import numeral from 'numeral';
import React from 'react';

function onChange(props, e, name, weekly) {
    if(e.target.value) {
        const value = e.target.value.replace(new RegExp('£', 'g'), '');
        const action = updateField(props.values, name, value, weekly);
        
        dispatch(action);
    }
}

function onBlur(props, e, name, weekly) {
    if(e.target.value) {
        const value = numeral(e.target.value).format('0,0.00');
        const action = updateField(props.values, name, value, weekly);

        dispatch(action);
    }
}

function onFocus(props, e, name, weekly) {
    if(e.target.value) {
        const noPoundValue = e.target.value.replace(new RegExp('£', 'g'), '');
        const value = numeral().unformat(noPoundValue);
        const action = updateField(props.values, name, value, weekly);

        dispatch(action);
    }
}

export default class InputList extends React.Component {
    constructor(props) {
        super(props);

        const length = props.fields.length;
        const values = Array.from(Array(length)).map(v => 0);

        this.state = { values };
    }

    handleChange(number, index, name) {
        const values = this.state.values;
        values[index] = number;
        this.setState({ values });
       
        if(this.props.values[name]) {
            const staleValue = this.props.values[name].value;
            const action = updateField(this.props.values, name, staleValue, number);
            dispatch(action);
        }
    }

    render() {
        const { props, state } = this;

        return (
            <Card initiallyExpanded={props.first}>
                <CardHeader title={props.title} showExpandableButton={true} />
                <CardText expandable={true}>
                    <div className='row'>
                        <div className='col-md-12'>  
                        {
                            props.fields.map((field, index) => {
                                return (
                                    <div key={index}>
                                        <div className='col-xs-6'>
                                            <TextField
                                                onBlur={e => onBlur(props, e, field.name, state.values[index])} 
                                                onFocus={e => onFocus(props, e, field.name, state.values[index])}
                                                onChange={e => onChange(props, e, field.name, state.values[index])} 
                                                value={'£' + ((props.values[field.name] || {}).value || '')} 
                                                fullWidth={true} 
                                                floatingLabelText={field.label}
                                                hintText="£" />
                                        </div>
                                        {
                                            props.variable ? 
                                                <div> 
                                                    <SelectField onChange={(n, i) => this.handleChange(i, index, field.name)} value={this.state.values[index]} floatingLabelText="Frequency">
                                                        <MenuItem value={0} primaryText="Per Month" />
                                                        <MenuItem value={1} primaryText="Per Week" />
                                                    </SelectField>
                                                </div> : null
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className='col-md-12'>
                            <p className='down'>
                                <i>{props.text}</i>
                            </p>
                        </div>
                    </div>
                </CardText>
            </Card>
        );
    }
}