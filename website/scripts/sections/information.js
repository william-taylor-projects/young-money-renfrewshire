
import React from 'react';

const names = [
    'Abbie Mcemeny',
    'Ava Blair',
    'Courtney Paul',
    'Erin Taylor',
    'Eszmeralda Horvathova',
    'Lauren Cairney',
    'Layla Forbes',
    'Liam Russell',
    'Margaret McAuslan',
    'Robbie Mullen',
    'Siobhan Innius',
    'Zoe Rogers'
];

export default props => {
    return (
        <div className='container'>
            <div className="page-header">
                <h1>Information</h1>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Who are we?</h3>
                    <p>
                        We are a group of under 25 Barnardos service users with access to funding to help the young people of the Renfrewshire area. We are tailoring a website to assist other young people in similar situations.
                        We are collaborating with YMCA staff and Renfrewshire council to publish this website which shall be young person friendly and offer specialized local advice trying to meet the need of everyone.
                        The group members have engaged with local services and met regularly to discuss and gather information which we find will then put onto our website.
                        We are here to help young people access any opportunity to help with money and housing.
                    </p>
                </div>
                <div className='col-md-12'>
                    <h3>Who’s Funding Us?</h3>
                    <p>
                        We are being sponsored by the Poverty Commission in Renfrewshire Council and Barnardos to create an application
                        that can assist young people in Renfrewshire.
                    </p>
                </div>
                <div className='col-md-12'>
                    <h3>Special Thanks To!</h3><hr/>
                    <h4 className='pull-right'><span className="label label-info">Individual</span></h4>
                    <h4 className='pull-right'><span className="label label-success">Company</span></h4>
                    <ul className="list-group list-down">
                        <li className="list-group-item list-group-item-success">Barnardos</li>
                        <li className="list-group-item list-group-item-success">Poverty Commission</li>
                        <li className="list-group-item list-group-item-success">Renfrewshire Council</li>
                        <li className="list-group-item list-group-item-success">YMCA</li>
                        {
                            names.map((name, index) => <li key={index} className="list-group-item list-group-item-info">{name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}