
import { Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';
import moment from 'moment';
import React from 'react';

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
                    props.news.map((update, index) => {
                        return (
                            <div key={index}>
                                <Update index={index} update={update} />
                                <br/>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
}

const stateToProps = state => { 
    return { news: state.whatsnew.news } 
};

export default connect(stateToProps)(WhatsNew)