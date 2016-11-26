
import { Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';
import moment from 'moment';
import React from 'react';

const style = {
    fontWeight: 'bold'
}

const Update = props => {
    return (
        <Card initiallyExpanded={props.index == 0}>
            <CardHeader
            style={style}
            title={props.update.title.S}
            subtitle={moment(Number(props.update.date.N)).format('DD/MM/YYYY')}
            actAsExpander={true}
            showExpandableButton={true}
            subtitleColor={'#7624ad'}
            />
            <CardText expandable={true}>
                {props.update.body.S}
            </CardText>
        </Card>
    )
}

const WhatsNew = props => {
    const sortedNews = props.news.sort((a, b) => Number(a.date.N) > Number(b.date.N));

    return (
        <div className='container'>
            <div className="page-header">
                <h1>What's New?</h1>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                {
                    sortedNews.map((update, index) => {
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