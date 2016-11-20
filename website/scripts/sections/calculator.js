
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
import Income from '../components/income.js';


import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'Recharts';
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = React.createClass({
	render () {
  	    return (
          <ResponsiveContainer>
            <PieChart onMouseEnter={this.onPieEnter}>
            <Pie data={data}  labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8">
            {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
        </PieChart>
        </ResponsiveContainer>
    );
  }
})

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            totalCosts: 0,
            totalIncome: 0,
            largestIncome: 'Wage',
            largestCost: 'Rent'
        }
    }

    componentDidMount() {
        this.onChange();
    }

    onChange() {
        let expensesTotal = 0.0;  
        let incomeTotal = 0.0;

        const incomeMap = this.props.calculator.income;
        const expensesMap = this.props.calculator.expenses;
        
        for(let key in incomeMap) {
            incomeTotal += numeral().unformat(incomeMap[key]);
        }

        for(let key in expensesMap) {
            expensesTotal += numeral().unformat(expensesMap[key]);
        }

        this.setState({ totalIncome: incomeTotal, totalCosts: expensesTotal });
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
                            <SimplePieChart />
                           </div>
                           <div className='col-md-6 pie-container text-center'>
                            <SimplePieChart />
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

export default connect(state => state)(Calculator)

/*



*/