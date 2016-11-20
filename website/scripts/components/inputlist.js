import { Card, CardHeader, CardText } from 'material-ui/Card';
import { updateField } from '../store/actions.js';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import React from 'react';
import numeral from 'numeral';

function onChange(props, e, name) {
    if(e.target.value) {
        const value = e.target.value.replace(new RegExp('£', 'g'), '');
        const action = updateField(props.output, name, value);
        props.dispatch(action);
    }
}

function onBlur(props, e, name) {
    if(e.target.value) {
        const value = numeral(e.target.value).format('0,0.00');
        const action = updateField(props.output, name, value);

        props.dispatch(action);
        props.onChange();
    }
}

function onFocus(props, e, name) {
    if(e.target.value) {
        const noPoundValue = e.target.value.replace(new RegExp('£', 'g'), '');
        const value = numeral().unformat(noPoundValue);
        const action = updateField(props.output, name, value);

        props.dispatch(action);
    }
}

export default connect(state => state)((props, e, name) => {
    const values = props.calculator[props.output];

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
                                        value={'£' + (values[field.name] || '')} 
                                        fullWidth={true} 
                                        floatingLabelText={field.label}
                                        hintText="£" />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </CardText>
        </Card>
    );
});