
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

const Update = props => {
    return (
        <Card initiallyExpanded={props.index == 0}>
            <CardHeader
            title={props.update.title}
            subtitle={moment(props.update.date).format('DD/MM/YYYY')}
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardText expandable={true}>
                {props.update.message}
            </CardText>
        </Card>
    )
}

const WhatsNew = props => {
    return (
        <div className='container'>
            <div className="page-header">
                <h1>What's New?</h1>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                {
                    props.whatsnew.news.map((update, index) => {
                        return <div key={index}><Update index={index} update={update} /><br/></div>;
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default connect(state => state)(WhatsNew)