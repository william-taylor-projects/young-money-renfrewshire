import InputList from './inputlist.js';
import { connect } from 'react-redux';
import React from 'react';

const payFields = [
    { name: 'pay', label: 'Pay (after tax)' },
    { name: 'selfPay', label: 'Income from self-employment' },
    { name: 'sickPay', label: 'Statutory Sick Pay' },
    { name: 'maternityPay', label: 'Statutory Maternity Pay' }
]

const otherFields = [
    { name: 'savings', label: 'Investments Income' },
    { name: 'rent', label: 'Board or rent' },
    { name: 'child', label: 'Child maintenance' },
    { name: 'loans', label: 'Student loans & grants' },
    { name: 'other', label: 'Other financial support' },
    { name: 'gifts', label: 'Gifts from family & friends' }
]

const benefitFields = [
     { name: 'job-allowance', label: 'Jobseeker\'s Allowance' },
     { name: 'income-support', label: 'Income Support' },
     { name: 'working-tax-credit', label: 'Working Tax Credit' },
     { name: 'child-tax-credit', label: 'Child Tax Credit' },
     { name: 'child-benefit', label: 'Child Benefit' },
     { name: 'employement-allowance', label: 'Employment Allowance' },
     { name: 'universal-credit', label: 'Universal Credit' },
     { name: 'disability-allowance', label: 'Disability Living Allowance' },
     { name: 'attendance-allowance', label: 'Attendance Allowance' },
     { name: 'carers-allowance', label: 'Carer\'s Allowance' },
     { name: 'housing-benefit', label: 'Housing Benefit' },
     { name: 'maternitiy-allowance', label: 'Materinity Allowance' }
]

const income = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Income</h1>
            </div>
            <InputList values={props.values} title='Pay' fields={payFields} first={true} variable /><br/>
            <InputList values={props.values} title='Benefits' fields={benefitFields}
                text={'If you get housing benefit directly, include it here.'} 
            /><br/>
            <InputList values={props.values} title='Other' fields={otherFields} /><br/>
        </div>
    )
}

export default income;
