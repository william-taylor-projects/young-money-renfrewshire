
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';

const dummyText = `Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.
Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.`;

const updateData = [
    { title: 'We have a title', date: Date.now(), message: dummyText},
    { title: 'We have a title', date: Date.now(), message: dummyText},
    { title: 'We have a title', date: Date.now(), message: dummyText}
];

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
export default class WhatsNew extends React.Component {
    render(){
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>What's New?</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {
                            updateData.map((update, index) => {
                                return <div key={index}><Update index={index} update={update} /><br/></div>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
