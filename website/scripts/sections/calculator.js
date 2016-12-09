
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import IncomeIcon from 'material-ui/svg-icons/action/credit-card';
import HouseIcon from 'material-ui/svg-icons/action/home';
import SocialIcon from 'material-ui/svg-icons/action/face';
import InsuranceIcon from 'material-ui/svg-icons/action/event-seat';
import InsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FoodIcon from 'material-ui/svg-icons/maps/restaurant';
import LeisureIcon from 'material-ui/svg-icons/editor/attach-money';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import numeral from 'numeral';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { connect } from 'react-redux';

import { HouseBills, Leisure, LivingCosts, Finance, Family } from '../components/expenses.js';
import { randomColour } from '../services/colour.js';
import PieChart from '../components/pie-chart.js';
import Income from '../components/income.js';

const PositiveAnalysis = props => {
    return (
        <div>
            <h3>Advice</h3>
            <p>
                Overall your situation is good. You have more income each month than expenses. You have a net income of £{props.netIncome}.
                What you may want to look at is saving your money so when unexpected bills occur you can meet them without having
                to take our an expensive loan. Remember no loan is free. Look at the following options.
            </p>
            <ul>
                <li>Individual Savings Accounts (ISAs)</li>
                <li>Fixed Rate Saving Accounts</li>
                <li>NS&amp;I Premium Bonds</li>
            </ul>
        </div>
    )
}

const NegativeAnalysis = props => {
    return (
        <div>
            <h3>Advice</h3>
            <p>
                Unfortunately, your situation does not look good. You have less income in each month than expenses, £{props.netIncome} in fact.
                You may want to look at cutting expenses to a more sustainable level or look at ways of increasing your income.
            </p>
        </div>
    )
}


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            totalCosts: 0,
            totalIncome: 0,
            largestIncome: 'N/A',
            largestCost: 'N/A',
            incomeChart: [],
            expenseChart: []
        }
    }

    componentWillReceiveProps() {
        this.onChange();
    }

    ratio(a, b) {
        return (b == 0) ? a : this.ratio(b, a%b);
    }

    onChange() {
        let largestIncome = {name: 'N/A', v: 0.0};
        let largestExpense = {name: 'N/A', v: 0.0};
        let expensesTotal = 0.0;  
        let incomeTotal = 0.0;

        const incomeMap = this.props.calculator.income;
        const expensesMap = this.props.calculator.expenses;
        const expensesPlots = [];
        const incomePlots = [];

        for(let key in incomeMap) {
            const income = numeral().unformat(incomeMap[key]);
            incomeTotal += income;
            if(largestIncome.v < income) {
                largestIncome.name = key;
                largestIncome.v = income;
            }

            if(income > 0.0) {
                incomePlots.push({name: key, value: income, color: randomColour() });
            }
        }

        for(let key in expensesMap) {
            const expense = numeral().unformat(expensesMap[key]);
            expensesTotal += expense;
            if(largestExpense.v < expense) {
                largestExpense.name = key;
                largestExpense.v = expense;
            }

            if(expense > 0.0) {
                expensesPlots.push({name: key, value: expense, color: randomColour() });
            }
        }

        this.setState({ 
            totalIncome: incomeTotal, 
            totalCosts: expensesTotal,
            largestCost: largestExpense.name,
            largestIncome: largestIncome.name,
            expenseChart: expensesPlots,
            incomeChart: incomePlots
        });
    }

    render() {
        const { totalCosts, totalIncome, largestIncome, largestCost} = this.state;
        const hasInput = totalCosts > 0 && totalIncome > 0;
        const netIncome = totalIncome - totalCosts;
        const ratio = hasInput ? this.ratio(totalIncome, totalCosts) : 1;
        
        return (
            <div>
                <div className='calculator-heading text-center'>
                    <div className="container-fixed">
                        <div className="jumbotron">
                            <h1>Finance Calculator</h1>
                            <p className='calculator-summary'>
                                A monthly calculator to help you manage your money. Enter data on a monthly basis
                                to get an analysis of your budget.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container-fixed'>
                  <Tabs>
                     <Tab icon={<IncomeIcon />}>
                       <div className='container'>
                         <Income onChange={() => this.onChange()} />
                       </div>
                     </Tab>
                     <Tab icon={<HouseIcon />}>
                       <div className='container'>
                         <HouseBills onChange={() => this.onChange()} />
                       </div>
                     </Tab>
                     <Tab icon={<FoodIcon />}>
                       <div className='container'>
                         <LivingCosts onChange={() => this.onChange()} />
                       </div>
                     </Tab>
                     <Tab icon={<InsuranceIcon />}>
                       <div className='container'>
                         <Finance onChange={() => this.onChange()} />
                        </div>
                     </Tab>
                     <Tab icon={<SocialIcon />}>
                       <div className='container'>
                         <Family onChange={() => this.onChange()} />
                        </div>
                     </Tab>
                     <Tab icon={<LeisureIcon />}>
                       <div className='container'>
                         <Leisure onChange={() => this.onChange()} />
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
                                    <TableRowColumn>Total Income</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>£{numeral(totalIncome).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Total Costs</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>£{numeral(totalCosts).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Net Income</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>£{numeral(netIncome).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Largest Cost</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>{largestCost}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Largest Income</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>{largestIncome}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Income to Expense Ratio</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>
                                        {totalIncome / ratio} / {totalCosts / ratio}</TableRowColumn>
                                </TableRow>
                                </TableBody>
                            </Table>
                           </div>
                           <div className='col-md-6 pie-container text-center down'>
                            <h4>Income Chart</h4>
                            { this.state.incomeChart.length == 0 ? <p>No Pie Chart Data Available</p> : null }
                            <PieChart data={this.state.incomeChart} />
                           </div>
                           <div className='col-md-6 pie-container text-center down'>
                            <h4>Expense Chart</h4>
                            { this.state.expenseChart.length == 0 ? <p>No Pie Chart Data Available</p> : null }
                            <PieChart data={this.state.expenseChart} />
                           </div>
                           <div className='col-md-12 down'>
                            { 
                                hasInput ?
                                    netIncome >= 0 ? 
                                        <PositiveAnalysis netIncome={netIncome} /> : <NegativeAnalysis netIncome={netIncome} /> 
                                    : ''
                            }
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

export default connect(state => state)(Calculator);