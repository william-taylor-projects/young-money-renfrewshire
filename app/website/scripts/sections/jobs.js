
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const style = { margin: 5 };

export default class Jobs extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>Jobs</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='col-md-4'>
                            <a href='http://www.jobcentreguide.co.uk/' target='_blank'>
                                <img className='img img-responsive center-block' src='http://www.youngmoneyren.org/images/job-center.jpg' />
                            </a>
                        </div>
                        <br/>
                        <div className='col-md-8'>
                            <p className='justify'>
                                Want to find local jobs fast? Then use your local job centre. You can find one in the centre of Paisley and other areas. There are also other job centres in Renfrewshire including in Renfrew and Johnstone. You may also need to visit the Job Centre to access certain state benefits so make sure you know your local branch.  They also provide training opportunities so make sure to pop in if you are looking for the best advice.
                            </p>
                            <div className='text-center'>
                                <a className='nounderline' target='_blank' href='https://goo.gl/maps/FFJfNJpH4QT2'>
                                    <RaisedButton style={style} backgroundColor="#91dc52" label="Paisley" />
                                </a>
                                <a className='nounderline' target='_blank' href='https://goo.gl/maps/Nd8rFj2N3dG2'>
                                <RaisedButton style={style} backgroundColor="#91dc52" label="Johnstone" />
                                </a>
                                <a className='nounderline' target='_blank' href='https://goo.gl/maps/Qzc9oAGsEcF2'>
                                    <RaisedButton style={style} backgroundColor="#91dc52" label="Renfrew" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <h1>Skills</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='col-md-4'>
                            <a href='https://www.skillsdevelopmentscotland.co.uk/' target='_blank'>
                                <img className='img img-responsive center-block' src='http://www.youngmoneyren.org/images/sds.png' />
                            </a>
                        </div>
                        <br />
                        <div className='col-md-8'>
                            <p className='justify'>
                                Want to improve your skills through training opportunities? Well Skills Development Scotland can help you develop the skills you need to find employment in your local area or just to make yourself standout. Head to their local office in Paisley if you want to find out about local opportunities or visit their website to learn how they can support you into either education or employment.
                            </p>
                            <div className='text-center'>
                                <RaisedButton onClick={() => open('https://goo.gl/maps/DKmrJK41nbn')} style={style} backgroundColor="#0089A4" label="Paisley" />
                                <RaisedButton onClick={() => open('https://goo.gl/maps/XHk82QvWBY22')} style={style} backgroundColor="#0089A4" label="Govan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}