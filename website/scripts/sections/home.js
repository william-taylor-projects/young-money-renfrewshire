
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='heading text-center'>
                    <div className="container">
                        <div className="jumbotron">
                            <h1>Young Money Renfrewshire</h1>
                            <p>Friendly local advice brought and designed for you</p>
                        </div>    
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>What is YMR?</h1>
                            <p>
                                YMR or Young Money Renfewshire is an application for under 25s who
                                can help with your financial problems. We can help with budgeting, 
                                where to find deals and where to find the best advice.
                                The application was built in collaboration with the Poverty Alliance,
                                Barnardos staff and Renfewshire Council.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src='images/ymca.jpg' />
                        </div>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src="images/barnardos-logo.png" />
                        </div>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src='images/renfrewshire-council.png' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}