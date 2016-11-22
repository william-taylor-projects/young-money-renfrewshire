
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
import { connect } from 'react-redux';

import { HouseBills, Leisure, LivingCosts, Finance, Family } from '../components/expenses.js';
import PieChart from '../components/pie-chart.js';
import Income from '../components/income.js';

const colours = [
    '#e600e6',
    '#673ab6',
    '#ff80ff',
    '#7733ff',
    '#673ab3',
    '#00C49F',
    '#b69ee0'
];

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

    componentDidMount() {
        this.onChange();
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

            const color = colours[Math.floor(Math.random()*colours.length)];
            if(income > 0.0) {
                incomePlots.push({name: key, value: income, color });
            }
        }

        for(let key in expensesMap) {
            const expense = numeral().unformat(expensesMap[key]);
            expensesTotal += expense;
            if(largestExpense.v < expense) {
                largestExpense.name = key;
                largestExpense.v = expense;
            }

            const color = colours[Math.floor(Math.random()*colours.length)];
            if(expense > 0.0) {
                expensesPlots.push({name: key, value: expense, color });
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
        const netIncome = totalIncome - totalCosts;
        const rating = totalIncome * totalCosts;

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
                                    <TableRowColumn>Total Costs</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>£{numeral(totalCosts).format('0,0.00')}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Total Income</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>£{numeral(totalIncome).format('0,0.00')}</TableRowColumn>
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
                                    <TableRowColumn>Finance Rating</TableRowColumn>
                                    <TableRowColumn style={{fontWeight: 'bold'}}>{rating}</TableRowColumn>
                                </TableRow>
                                </TableBody>
                            </Table>
                           </div>
                           <div className='col-md-6 pie-container text-center'>
                            <h4>Income Chart</h4>
                            { this.state.incomeChart.length == 0 ? <p>No Pie Chart Data Available</p> : null }
                            <PieChart data={this.state.incomeChart} />
                           </div>
                           <div className='col-md-6 pie-container text-center'>
                            <h4>Expense Chart</h4>
                            { this.state.expenseChart.length == 0 ? <p>No Pie Chart Data Available</p> : null }
                            <PieChart data={this.state.expenseChart} />
                           </div>
                           <div className='col-md-12 down'>
                            <h3>Advice</h3>
                            <p>
                                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet dependent.    
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

export default connect(state => state)(Calculator);