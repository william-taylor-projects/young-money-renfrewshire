import InputList from './inputlist.js';
import { connect } from 'react-redux';
import React from 'react';

const rent = [
    { name: 'rent', label: 'Monthly Rent'},
    { name: 'mortgage', label: 'Monthly Mortgage'}
]

const buildingCover = [
    { name: 'building-insurance', label: 'Building Insurance' },
    { name: 'contents-insurance', label: 'Contents Insurance' }
];

const utilities = [
    { name: 'council-tax', label: 'Council tax' },
    { name: 'gas', label: 'Gas' },
    { name: 'electricity', label: 'Electricity' },
    { name: 'other-household-fuel', label: 'Other household fuel' },
    { name: 'water', label: 'Water' },
    { name: 'home-phone', label: 'home-phone' },
    { name: 'mobile-phone', label: 'mobile-phone' },
    { name: 'internet', label: 'Internet' },
    { name: 'it', label: 'IT costs' },
    { name: 'tv-license', label: 'TV license' },
    { name: 'tv', label: 'TV' }
]

const clothes = [
    { name: 'child-clothes', label: 'Children Clothes' },
    { name: 'school-uniform', label: 'School Uniform' },
    { name: 'shoes', label: 'Shoes' },
    { name: 'work-clothes', label: 'Work Clothes' },
    { name: 'new-clothes', label: 'New Clothes' },
    { name: 'dry-cleaning', label: 'Laundry and dry cleaning' }
]

const food = [
  { name: 'food-shopping', label: 'Grocery shopping'},
  { name: 'takeaways', label: 'Takeaways'},
  { name: 'alcohol', label: 'Alcohol'},
  { name: 'cigarettes', label: 'Cigarettes'}  
];

const health = [
    { name: 'hairdressing', label: 'Hairdressing'},
    { name: 'beauty-treatments', label: 'Beauty Treatments'},
    { name: 'toiletries', label: 'Toiletries'},
    { name: 'eye-care', label: 'Eye Care'},
    { name: 'dental-care', label: 'Dental Care'},
    { name: 'medicine', label: 'Medicine'}
];

const work = [
    { name: 'lunches', label: 'Lunches & Snacks'},
    { name: 'takeaway-coffees', label: 'Takeaway coffees, etc'}
];

const children = [
    { name: 'childcare', label: 'Childcare' },
    { name: 'nappies', label: 'Nappies and baby items' },
    { name: 'activities', label: 'Activities & clubs' },
    { name: 'toys', label: 'Toys & treats' },
    { name: 'pocket-money', label: 'Pocket money' },
    { name: 'babysitting', label: 'Babysitting' },
    { name: 'child-support', label: 'Maintenance or child support' }
];

const school = [
    { name: 'school-fees', label: 'School Fees'},
    { name: 'school-trips', label: 'School Trips'},
    { name: 'school-dinners', label: 'School Dinners'},
    { name: 'after-school-clubs', label: 'After-school clubs'}
];

const pets = [
    { name: 'pet-food', label: 'Food'},
    { name: 'vet-bills', label: 'Vet Bills'},
    { name: 'pet-insurance', label: 'Pet Insurance'}
];

const banking = [
    { name: 'overdraft', label: 'Overdraft charges and interest' },
    { name: 'account-fees', label: 'Bank account fees' },
    { name: 'penalties', label: 'Penalties' }
];

const insurance = [
    { name: 'life-insurance', label: 'Life Insurance' },
    { name: 'income-insurance', label: 'Income Protection Insurance' },
    { name: 'illness-insurance', label: 'Critical Illness Insurance' },
    { name: 'payment-insurance', label: 'Payment Protection Insurance' },
    { name: 'credit-insurance', label: 'Credit Card Insurance' },
    { name: 'health-insurance', label: 'Health Insurance' },
    { name: 'dental-insurance', label: 'Dental Insurance' }
];

const loans = [
    { name: 'loan-repayments', label: 'Loan Repayments' },
    { name: 'student-loan', label: 'Student Loan Repayments' },
    { name: 'credit-card-repay', label: 'Credit Card Repayments' },
    { name: 'hire-purchase', label: 'Hire Purchase & Catalogue Repayments' }
];

const savings = [
    { name: 'regular-savings', label: 'Regular saving' },
    { name: 'lump-sum-saving', label: 'Lump sum saving' },
    { name: 'payments-into-isas', label: 'Payments into ISAs' },
    { name: 'buying-shares', label: 'Buying shares & other investments' }
];

const cars = [
    { name: 'petrol-diesel', label: 'Petrol/Diesel'},
    { name: 'car-insurance', label: 'Car Insurance'},
    { name: 'breakdown-cover', label: 'Breakdown Cover'},
    { name: 'car-tax', label: 'Car Tax'},
    { name: 'car-finance', label: 'Car Finance'},
    { name: 'loan-insurance', label: 'Loan Insurance'},
    { name: 'mot', label: 'MOT'},
    { name: 'car-maintenance', label: 'Maintenance'},
    { name: 'parking', label: 'Parking'}
];

const entertainment = [
    { name: 'cinema', label: 'Cinema & theatre trips' },
    { name: 'days-out', label: 'Days out' },
    { name: 'books', label: 'Books, music, films, games, etc' },
    { name: 'hobbies', label: 'Hobbies' },
    { name: 'eating-out', label: 'Eating out' },
    { name: 'drinks', label: 'Going out for drinks' },
    { name: 'sports', label: 'Sport & Gym' },
    { name: 'gambling', label: 'Lottery & gambling' },
    { name: 'news-mags', label: 'Newspapers & magazines' }
];

const holidays = [
    { name: 'holiday-trips', label: 'Holidays'},
    { name: 'travel-insurance', label: 'Travel Insurance'},
    { name: 'spending-money', label: 'Spending Money'}
];

const oneoffs = [
    { name: 'birthday', label: 'Birthday'},
    { name: 'xmas', label: 'Christmas'},
    { name: 'weddings', label: 'Weddings'},
    { name: 'other', label: 'Other'}
];

const transport = [
    { name: 'fares', label: 'Bus, tube & tram fares'},
    { name: 'trains', label: 'Trains'},
    { name: 'taxis', label: 'Taxis'},
    { name: 'air-travel', label: 'Air Travel'}
];

const houseBills = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>House Bills</h1>
            </div>
            <InputList values={props.values} title='Rent' onChange={props.onChange} fields={rent} first={true} /><br/>
            <InputList values={props.values} title='Insurance' onChange={props.onChange} fields={buildingCover}/><br/>
            <InputList values={props.values} title='Utilities' onChange={props.onChange} fields={utilities} /><br/>
        </div>
    )
};

const livingCosts = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Living Costs</h1>
            </div>
            <InputList values={props.values} title='Food' onChange={props.onChange} fields={food} first={true} /><br/>
            <InputList values={props.values} title='Health' onChange={props.onChange} fields={health} /><br/>
            <InputList values={props.values} title='Work' onChange={props.onChange} fields={work} /><br/>
            <InputList values={props.values} title='Clothes' onChange={props.onChange} fields={clothes} /><br/>
        </div>
    )
}

const family = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Family &amp; Friends</h1>
            </div>
            <InputList values={props.values} title='Children' onChange={props.onChange} fields={children} first={true}/><br/>
            <InputList values={props.values} title='School' onChange={props.onChange} fields={school} /><br/>
            <InputList values={props.values} title='Pets' onChange={props.onChange} fields={pets} /><br/>
        </div>
    )
}

const leisure = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Leisure Bills</h1>
            </div>
            <InputList values={props.values} title='Insurance' onChange={props.onChange} fields={insurance} first={true} /><br/>
            <InputList values={props.values} title='Banking' onChange={props.onChange} fields={banking} /><br/>
            <InputList values={props.values} title='Loans' onChange={props.onChange} fields={loans} /><br/>
            <InputList values={props.values} title='Savings' onChange={props.onChange} fields={savings} /><br/>
        </div>
    )
}

const finance = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Finance</h1>
            </div>
            <InputList values={props.values} title='Car' onChange={props.onChange} fields={cars} first={true} /><br/>
            <InputList values={props.values} title='Entertainment' onChange={props.onChange} fields={entertainment} /><br/>
            <InputList values={props.values} title='Holidays' onChange={props.onChange} fields={holidays} /><br/>
            <InputList values={props.values} title='One Offs' onChange={props.onChange} fields={oneoffs} /><br/>
            <InputList values={props.values} title='Transport'onChange={props.onChange} fields={transport} /><br/>
        </div>
    )
}


const stateToProps = state => {
    return { values: state.calculator.expenses };
}

export let LivingCosts = connect(stateToProps)(livingCosts);
export let HouseBills = connect(stateToProps)(houseBills);
export let Finance = connect(stateToProps)(finance);
export let Leisure = connect(stateToProps)(leisure);
export let Family = connect(stateToProps)(family);