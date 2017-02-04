
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default class Jobs extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>Jobs</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='col-md-8'>
                            Want to find local jobs fast? Then use your local job centre. You can find one in the centre of Paisley here. There are also various job centres in Renfrewshire including in Renfrew, Johnstone and Barrhead. You may also need to visit the Job Centre to access certain state benefits so make sure you know your local branch.  
                        </div>
                        <br />
                        <div className='col-md-4'>
                            <img className='img img-responsive center-block' src='http://www.youngmoneyren.org/images/job-center.jpg' />
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <h1>Skills</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='col-md-8'>
                            Want to improve your skills through training opportunities? Well skills development Scotland can help you develop the skills you need to find employment in your local area or just to make yourself standout. Head to their local office in Paisley if you want to find out about local opportunities or visit their website <a href='https://www.skillsdevelopmentscotland.co.uk' target='_blank'>here</a>. If you are going to visit them in Paisley, you can find their address <a href='https://www.skillsdevelopmentscotland.co.uk/in-your-area/renfrewshire/' target='_blank'>here</a>.
                        </div>
                        <br />
                        <div className='col-md-4'>
                            <img className='img img-responsive center-block' src='http://www.youngmoneyren.org/images/sds.png' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}