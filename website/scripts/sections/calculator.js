
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import IncomeIcon from 'material-ui/svg-icons/action/credit-card';
import HouseIcon from 'material-ui/svg-icons/action/home';
import SocialIcon from 'material-ui/svg-icons/action/face';
import InsuranceIcon from 'material-ui/svg-icons/action/https';
import InsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FoodIcon from 'material-ui/svg-icons/maps/restaurant';
import LeisureIcon from 'material-ui/svg-icons/notification/drive-eta';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import numeral from 'numeral';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

// Income cards
import BenefitCard from '../components/cards/pay/benefit-card.js';
import OtherCard from '../components/cards/pay/other-income.js';
import PayCard from '../components/cards/pay/pay-card.js';

// Household cards
import RentCard from '../components/cards/house/rent.js';
import HouseInsurance from '../components/cards/house/insurance.js';
import HouseUtilities from '../components/cards/house/utilities.js';

// Living cost cards
import ClothesCard from '../components/cards/living-costs/clothes.js';
import HealthCard from '../components/cards/living-costs/health.js';
import FoodCard from '../components/cards/living-costs/food.js';
import WorkCard from '../components/cards/living-costs/work.js';

// Leisure costs
import CarCosts from '../components/cards/leisure/car.js';
import EntertainmentCosts from '../components/cards/leisure/entertainment.js';
import HolidaysCost from '../components/cards/leisure/holidays.js';
import OneOffsCosts from '../components/cards/leisure/one-offs.js';
import TransportCosts from '../components/cards/leisure/transport.js';

// Family
import ChildrenCard from '../components/cards/family/children.js';
import SchoolCard from '../components/cards/family/school.js';
import PetsCard from '../components/cards/family/pets.js';

// Finance cards
import BankingCard from '../components/cards/finance/banking.js';
import InsuranceCard from '../components/cards/finance/insurance.js';
import LoansCard from '../components/cards/finance/loans.js';
import Savings from '../components/cards/finance/savings.js';

export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            totalCosts: 100,
            totalIncome: 100,
            largestIncome: 'Wage',
            largestCost: 'Rsent'
        }
    }
    render() {
        const { totalCosts, totalIncome, largestIncome, largestCost} = this.state;
        const netIncome = totalIncome - totalCosts;
        const rating = 175.74

        return (
            <div>
                <div className='calculator-heading text-center'>
                    <div className="container-fixed">
                        <div className="jumbotron">
                            <h1>Finance Calculator</h1>
                        </div>
                    </div>
                </div>
                <div className='container-fixed'>
                  <Tabs>
                     <Tab icon={<IncomeIcon />}>
                       <div className='container'>
                            <div className='page-header'>
                                <h1>Income</h1>
                            </div>
                            <PayCard /><br/>
                            <BenefitCard /><br/>
                            <OtherCard /><br/>
                       </div>
                     </Tab>
                     <Tab icon={<HouseIcon />}>
                       <div className='container'>
                         <div className='page-header'>
                            <h1>House Bills</h1>
                         </div>
                         <RentCard /><br/>
                         <HouseInsurance /><br/>
                         <HouseUtilities /><br/>
                       </div>
                     </Tab>
                     <Tab icon={<FoodIcon />}>
                       <div className='container'>
                         <div className='page-header'>
                          <h1>Living Costs</h1>
                         </div>
                         <ClothesCard /><br/>
                         <HealthCard /><br/>
                         <FoodCard /><br/>
                         <WorkCard /><br/>
                       </div>
                     </Tab>
                     <Tab icon={<InsuranceIcon />}>
                       <div className='container'>
                         <div className='page-header'>
                          <h1>Finance</h1>
                         </div>
                         <BankingCard/><br/>
                         <InsuranceCard/><br/>
                         <LoansCard/><br/>
                         <Savings/><br/>
                        </div>
                     </Tab>
                     <Tab icon={<SocialIcon />}>
                       <div className='container'>
                         <div className='page-header'>
                          <h1>Family &amp; Friends</h1>
                         </div>
                         <ChildrenCard /><br/>
                         <SchoolCard /><br/>
                         <PetsCard /><br/>
                        </div>
                     </Tab>
                     <Tab icon={<LeisureIcon />}>
                       <div className='container'>
                         <div className='page-header'>
                          <h1>Leisure</h1>
                         </div>
                         <CarCosts /><br/>
                         <EntertainmentCosts /><br/>
                         <HolidaysCost /><br/>
                         <OneOffsCosts/><br/>
                         <TransportCosts /><br/>
                        </div>
                     </Tab>
                     <Tab icon={<InsertChart />}>
                       <div className='container'>
                         <div className='page-header'>
                          <h1>Analysis</h1>
                         </div>
                         <div className='row'>
                           <div className='col-md-12 text-center'>
                            <Table>
                                <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>Total Costs</TableRowColumn>
                                    <TableRowColumn>£{numeral(totalCosts).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Total Income</TableRowColumn>
                                    <TableRowColumn>£{numeral(totalIncome).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Net Income</TableRowColumn>
                                    <TableRowColumn>£{numeral(netIncome).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Largest Cost</TableRowColumn>
                                    <TableRowColumn>{largestCost}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Largest Income</TableRowColumn>
                                    <TableRowColumn>{largestIncome}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Finance Rating</TableRowColumn>
                                    <TableRowColumn>{rating}</TableRowColumn>
                                </TableRow>
                                </TableBody>
                            </Table>
                           </div>
                           <div className='col-md-12 down'>
                            <h3>Advice</h3>
                            <p>
                                Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.
                            </p>
                           </div>
                         </div>
                        </div>
                     </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}


/*
<div className='page-header'>
                          <h1>Income</h1>
                        </div>
                       
*/