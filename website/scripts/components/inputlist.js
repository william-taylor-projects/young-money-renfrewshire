import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import { updateField } from '../store/actions.js';
import { dispatch } from '../store/store.js';
import { connect } from 'react-redux';
import numeral from 'numeral';
import React from 'react';

function onChange(props, e, name) {
    if(e.target.value) {
        const value = e.target.value.replace(new RegExp('£', 'g'), '');
        const action = updateField(props.values, name, value);
        
        dispatch(action);
    }
}

function onBlur(props, e, name) {
    if(e.target.value) {
        const value = numeral(e.target.value).format('0,0.00');
        const action = updateField(props.values, name, value);

        dispatch(action);
    }
}

function onFocus(props, e, name) {
    if(e.target.value) {
        const noPoundValue = e.target.value.replace(new RegExp('£', 'g'), '');
        const value = numeral().unformat(noPoundValue);
        const action = updateField(props.values, name, value);

        dispatch(action);
    }
}

export default ((props, e, name) => {
    return (
        <Card initiallyExpanded={props.first}>
            <CardHeader title={props.title} showExpandableButton={true} />
            <CardText expandable={true}>
                <div className='row'>
                    <div className='col-md-12'>  
                    {
                        props.fields.map((field, index) => {
                            return (
                                <div key={index} className='col-md-6'>
                                    <TextField
                                        onBlur={e => onBlur(props, e, field.name)} 
                                        onFocus={e => onFocus(props, e, field.name)}
                                        onChange={e => onChange(props, e, field.name)} 
                                        value={'£' + (props.values[field.name] || '')} 
                                        fullWidth={true} 
                                        floatingLabelText={field.label}
                                        hintText="£" />
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className='col-md-12'>
                        <p className='down'><i>{props.text}</i></p>
                    </div>
                </div>
            </CardText>
        </Card>
    );
});