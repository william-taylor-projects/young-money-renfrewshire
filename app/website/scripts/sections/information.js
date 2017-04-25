
import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';

const names = [
    'Ava Blair',
    'Courtney Paul',
    'Erin Taylor',
    'Eszmeralda Horvathova',
    'Lauren Cairney',
    'Layla Forbes',
    'Liam Russell',
    'Margaret McAuslan',
    'Robbie Mullen',
    'Reegan Watt',
    'Poppy Carlin',
    'Abbie Mcmenemy',
    'Siobhan Innes',
    'Zoe Rogers'
];

const ShortLoan = props => {
    return (
        <div>
            <h6><b>{props.company.name}</b></h6>
            <ul>
                {
                    props.company.points.map((point, index) => {
                      return <li key={index}>{point}</li>  
                    })
                }
            </ul>
            <p className='justify'>
                <small>{props.company.summary}</small>
            </p>
        </div>
    );
}

const shortTermLoans = [
    {
        name: 'PROVIDENT',
        points: ['£100 - £1000', 'The maximum APR for a loan is 1557.7%.'],
        summary: '£200 loan over 26 weeks. 26 payments of £12 a week. Interest 112%. PA Fixed. Representative 535.3% APR. Total payable £312.'
    },
    {
        name: 'QUICKQUID',
        points: [
            'Maximum £1000 or £1500 for existing customers',
            '1295% APR Representative.',
            'Late fee up to £15.'
        ],
        summary: '£200 for 84 days. Total repayment of £334.40. Interest: £134.40. Interest rate: 292% pa (fixed). 1295% APR.'
    },
    {
        name: 'AMIGO',
        points: ['£500 - £7500', '49.9% APR'],
        summary: 'Borrowing £4000 over 36 months, repaying £195.16 per month, total repayable £7,025.76. Interest rate 49.9% (variable).'
    },
    {
        name: 'WONGA',
        points: ['£50 - £400', 'Missed Payment Fee £15', 'Late Interest 0.8% per day'],
        summary: 'Borrow £100 for 13 days, Interest rate 292% pa (fixed), One repayment of £110.40, Representative 1,509% APR'
    }
]

export default props => {
    return (
        <div className='container-fixed'>
            <div className='information-heading text-center'>
                <div className="container-fixed">
                    <div className="jumbotron">
                        <h1>Information</h1>
                        <p className='information-summary'>
                            Who we are, useful videos and loan info.
                        </p>
                    </div>
                </div>
            </div>
            <Tabs>
                <Tab label="Info">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h3>Who are we?</h3><hr/>
                                <p className='justify'>
                                   We are a group of Barnardo’s service users with access to funding to help the young people of Renfrewshire. We are tailoring a website to assist other young people in similar situations. We are collaborating with YMCA Paisley and Renfrewshire Council to publish this website which shall be young person friendly and offer specialised local advice trying to meet the needs of everyone. The group members have engaged with local services and met regularly to discuss and gather information which we will then be put onto our website. We are here to help young people access any opportunity to help with money and life management.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <h3>Who’s Funding Us?</h3><hr/>
                                <p className='justify'>
                                    We are being sponsored by the Poverty Commission in Renfrewshire Council and Barnardo’s to create an application that can assist young people in Renfrewshire.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <h3>Special Thanks To!</h3><hr/>
                                <h4 className='pull-right'>
                                    <span className="label label-info" style={{marginLeft: '10px'}}>Individual</span>
                                </h4>
                                <h4 className='pull-right'>
                                    <span className="label label-success">Organisation</span>
                                </h4>
                                <ul className="list-group list-down">
                                    <li className="list-group-item list-group-item-success"><b>Barnardo's</b></li>
                                    <li className="list-group-item list-group-item-success"><b>Poverty Commission</b></li>
                                    <li className="list-group-item list-group-item-success"><b>Renfrewshire Council</b></li>
                                    <li className="list-group-item list-group-item-success"><b>YMCA Paisley</b></li>
                                    {
                                        names.map((name, index) => {
                                            return (
                                                <li key={index} className="list-group-item list-group-item-info">
                                                    <i>{name}</i>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab label="Videos" className='container'>
                    <div id='video-section' className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is National Insurance?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/national-insurance.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is Income Tax?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/income-tax.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is Universal Credit?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/universal-credit.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab label="Loans">
                    <div className='container'>
                        <div className='col-md-12'>
                            <h3>Short Term Loans</h3><hr/>
                            <p className='justify'>
                                Short term loans are dangerous and you should avoid them at all costs. If you need to borrow cash look to friends, family your local bank or speak to a financial advisor. Short term loans have large costs for the loans you take. Below you will find examples of these loans. Pay attention to the total amount paid compared to the amount borrowed.
                            </p>
                            {
                                shortTermLoans.map((company, index) => {
                                    return <ShortLoan key={index} company={company} />
                                })
                            }
                        </div>
                        <div className='col-md-12'>
                            <h3>APR</h3><hr/>
                            <p className='justify'>
                                APR stands for the Annual Percentage Rate of charge. You can use it to compare different credit and loan offers. The APR considers not just the interest on the loan but also other charges you must pay, for example, any arrangement fee. All lenders must tell you what their APR is before you sign an agreement. It will vary from lender to lender. Remember no loan is free. If you take out a loan you will always pay more than you are given. So, do your research before taking out any loan!

                            </p>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
        </div>
    );
}