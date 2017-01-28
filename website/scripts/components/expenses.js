import InputList from './inputlist.js';
import { connect } from 'react-redux';
import React from 'react';

const advanced = {
    rent: [
        { name: 'rent', label: 'Monthly Rent'},
        { name: 'mortgage', label: 'Monthly Mortgage'}
    ],
    buildingCover: [
        { name: 'building-insurance', label: 'Building Insurance' },
        { name: 'contents-insurance', label: 'Contents Insurance' }
    ],
    utilities: [
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
    ],
    clothes: [
        { name: 'child-clothes', label: 'Children Clothes' },
        { name: 'school-uniform', label: 'School Uniform' },
        { name: 'shoes', label: 'Shoes' },
        { name: 'work-clothes', label: 'Work Clothes' },
        { name: 'new-clothes', label: 'New Clothes' },
        { name: 'dry-cleaning', label: 'Laundry and dry cleaning' }
    ],
    food: [
        { name: 'food-shopping', label: 'Grocery shopping'},
        { name: 'takeaways', label: 'Takeaways'},
        { name: 'alcohol', label: 'Alcohol'},
        { name: 'cigarettes', label: 'Cigarettes'} 
    ],
    health: [
        { name: 'hairdressing', label: 'Hairdressing'},
        { name: 'beauty-treatments', label: 'Beauty Treatments'},
        { name: 'toiletries', label: 'Toiletries'},
        { name: 'eye-care', label: 'Eye Care'},
        { name: 'dental-care', label: 'Dental Care'},
        { name: 'medicine', label: 'Medicine'}
    ],
    work: [
        { name: 'lunches', label: 'Lunches & Snacks'},
        { name: 'takeaway-coffees', label: 'Takeaway coffees, etc'}
    ],
    children: [
        { name: 'childcare', label: 'Childcare' },
        { name: 'nappies', label: 'Nappies and baby items' },
        { name: 'activities', label: 'Activities & clubs' },
        { name: 'toys', label: 'Toys & treats' },
        { name: 'pocket-money', label: 'Pocket money' },
        { name: 'babysitting', label: 'Babysitting' },
        { name: 'child-support', label: 'Maintenance or child support' }
    ],
    school: [
        { name: 'school-fees', label: 'School Fees'},
        { name: 'school-trips', label: 'School Trips'},
        { name: 'school-dinners', label: 'School Dinners'},
        { name: 'after-school-clubs', label: 'After-school clubs'}
    ],
    pets: [
        { name: 'pet-food', label: 'Food'},
        { name: 'vet-bills', label: 'Vet Bills'},
        { name: 'pet-insurance', label: 'Pet Insurance'}
    ],
    banking: [
        { name: 'overdraft', label: 'Overdraft charges and interest' },
        { name: 'account-fees', label: 'Bank account fees' },
        { name: 'penalties', label: 'Penalties' }
    ],
    insurance: [
        { name: 'life-insurance', label: 'Life Insurance' },
        { name: 'income-insurance', label: 'Income Protection Insurance' },
        { name: 'illness-insurance', label: 'Critical Illness Insurance' },
        { name: 'payment-insurance', label: 'Payment Protection Insurance' },
        { name: 'credit-insurance', label: 'Credit Card Insurance' },
        { name: 'health-insurance', label: 'Health Insurance' },
        { name: 'dental-insurance', label: 'Dental Insurance' }
    ],
    loans: [
        { name: 'loan-repayments', label: 'Loan Repayments' },
        { name: 'student-loan', label: 'Student Loan Repayments' },
        { name: 'credit-card-repay', label: 'Credit Card Repayments' },
        { name: 'hire-purchase', label: 'Hire Purchase' }
    ],
    savings: [
        { name: 'regular-savings', label: 'Regular saving' },
        { name: 'lump-sum-saving', label: 'Lump sum saving' },
        { name: 'payments-into-isas', label: 'Payments into ISAs' },
        { name: 'buying-shares', label: 'Buying shares' }
    ],
    cars: [
        { name: 'petrol-diesel', label: 'Petrol/Diesel'},
        { name: 'car-insurance', label: 'Car Insurance'},
        { name: 'breakdown-cover', label: 'Breakdown Cover'},
        { name: 'car-tax', label: 'Car Tax'},
        { name: 'car-finance', label: 'Car Finance'},
        { name: 'loan-insurance', label: 'Loan Insurance'},
        { name: 'mot', label: 'MOT'},
        { name: 'car-maintenance', label: 'Maintenance'},
        { name: 'parking', label: 'Parking'}
    ],
    entertainment: [
        { name: 'cinema', label: 'Cinema & theatre trips' },
        { name: 'days-out', label: 'Days out' },
        { name: 'books', label: 'Books, music, films, games, etc' },
        { name: 'hobbies', label: 'Hobbies' },
        { name: 'eating-out', label: 'Eating out' },
        { name: 'drinks', label: 'Going out for drinks' },
        { name: 'sports', label: 'Sport & Gym' },
        { name: 'gambling', label: 'Lottery & gambling' },
        { name: 'news-mags', label: 'Newspapers & magazines' }
    ],
    holidays: [
        { name: 'holiday-trips', label: 'Holidays'},
        { name: 'travel-insurance', label: 'Travel Insurance'},
        { name: 'spending-money', label: 'Spending Money'}
    ],
    oneoffs: [
        { name: 'birthday', label: 'Birthday'},
        { name: 'xmas', label: 'Christmas'},
        { name: 'weddings', label: 'Weddings'},
        { name: 'other', label: 'Other'}
    ],
    transport: [
        { name: 'fares', label: 'Bus, tube & tram fares'},
        { name: 'trains', label: 'Trains'},
        { name: 'taxis', label: 'Taxis'},
        { name: 'air-travel', label: 'Air Travel'}
    ]
}

const simple = {
    houseBills: [
        { name: 'rent', label: 'Rent (Per Month)'},
        { name: 'mortgage', label: 'Monthly Mortgage'},
        { name: 'house-insurance', label: 'House Insurance'},
        { name: 'house-utilities', label: 'House Utilities' }
    ],
    livingCosts: [
        { name: 'food', label: 'Food Costs' },
        { name: 'health', label: 'Health Costs' },
        { name: 'work', label: 'Work Costs' },
        { name: 'clothes', label: 'Clothes Costs' }
    ],
    family: [
        { name: 'children', label: 'Child Costs' },
        { name: 'school', label: 'School Costs' },
        { name: 'pets', label: 'Pets Costs' }
    ],
    money: [
        { name: 'banking-costs', label: 'Banking Costs' },
        { name: 'loan-costs', label: 'Loan Costs' },
        { name: 'saving-costs', label: 'Saving Costs' },
        { name: 'insurance', label: 'Insurance Costs' }
    ],
    luxurys: [
        { name: 'car-costs', label: 'Car Costs' },
        { name: 'entertainment', label: 'Entertainment Costs' },
        { name: 'holidays', label: 'Holiday Costs' },
        { name: 'transport', label: 'Transport Costs' }
    ]
}

const houseBills = props => {
    const advancedHTML = (
        <div>
            <InputList values={props.values} title='Rent' onChange={props.onChange} fields={advanced.rent} first={true} /><br/>
            <InputList values={props.values} title='Insurance' onChange={props.onChange} fields={advanced.buildingCover}/><br/>
            <InputList values={props.values} title='Utilities' onChange={props.onChange} fields={advanced.utilities} /><br/>
        </div>
    );

    const simpleHTML = (
        <div>
            <InputList values={props.values} title='House Bills' onChange={props.onChange} fields={simple.houseBills} first={true} /><br/>
        </div>
    );

    return (
        <div>
            <div className='page-header'>
                <h1>House Bills</h1>
            </div>
            { props.advanced ? advancedHTML : simpleHTML }
        </div>
    )
};

const livingCosts = props => {
    const advancedHTML = (
        <div>
            <InputList values={props.values} title='Food' onChange={props.onChange} fields={advanced.food} first={true} /><br/>
            <InputList values={props.values} title='Health' onChange={props.onChange} fields={advanced.health} /><br/>
            <InputList values={props.values} title='Work' onChange={props.onChange} fields={advanced.work} /><br/>
            <InputList values={props.values} title='Clothes' onChange={props.onChange} fields={advanced.clothes} /><br/>
        </div>
    );

    const simpleHTML = (
        <div>
            <InputList values={props.values} title='Living Costs' onChange={props.onChange} fields={simple.livingCosts} first={true} /><br/>
        </div>
    );

    return (
        <div>
            <div className='page-header'>
                <h1>Living Costs</h1>
            </div>
            { props.advanced ? advancedHTML : simpleHTML }
        </div>
    )
}

const family = props => {
    const advancedHTML = (
        <div>
            <InputList values={props.values} title='Children' onChange={props.onChange} fields={advanced.children} first={true}/><br/>
            <InputList values={props.values} title='School' onChange={props.onChange} fields={advanced.school} /><br/>
            <InputList values={props.values} title='Pets' onChange={props.onChange} fields={advanced.pets} /><br/>
        </div>
    );

    const simpleHTML = (
         <div>
            <InputList values={props.values} title='Family' onChange={props.onChange} fields={simple.family} first={true} /><br/>
        </div>
    );

    return (
        <div>
            <div className='page-header'>
                <h1>Family, Pets &amp; Children</h1>
            </div>
            { props.advanced ? advancedHTML : simpleHTML }
        </div>
    )
}

const leisure = props => {
    const advancedHTML = (
        <div>
            <InputList values={props.values} title='Banking' onChange={props.onChange} fields={advanced.banking} first={true} /><br/>
            <InputList values={props.values} title='Loans' onChange={props.onChange} fields={advanced.loans} /><br/>
            <InputList values={props.values} title='Savings' onChange={props.onChange} fields={advanced.savings} /><br/>
            <InputList values={props.values} title='Insurance' onChange={props.onChange} fields={advanced.insurance} /><br/>
        </div>
    )

    const simpleHTML = (
        <div>
            <InputList values={props.values} title='Money' onChange={props.onChange} fields={simple.money} first={true} /><br/>
        </div>
    )

    return (
        <div>
            <div className='page-header'>
                <h1>Bank Bills</h1>
            </div>
            { props.advanced ? advancedHTML : simpleHTML }
        </div>
    )
}

const luxurys = props => {
    const advancedHTML = (
        <div>
            <InputList values={props.values} title='Car' onChange={props.onChange} fields={advanced.cars} first={true} /><br/>
            <InputList values={props.values} title='Entertainment' onChange={props.onChange} fields={advanced.entertainment} /><br/>
            <InputList values={props.values} title='Holidays' onChange={props.onChange} fields={advanced.holidays} /><br/>
            <InputList values={props.values} title='One Offs' onChange={props.onChange} fields={advanced.oneoffs} /><br/>
            <InputList values={props.values} title='Transport'onChange={props.onChange} fields={advanced.transport} /><br/>
        </div>
    );

    const simpleHTML = (
        <div>
            <InputList values={props.values} title='Rent' onChange={props.onChange} fields={simple.luxurys} first={true} /><br/>
        </div>
    );
    return (
        <div>
            <div className='page-header'>
                <h1>Luxurys</h1>
            </div>
            { props.advanced ? advancedHTML : simpleHTML }
        </div>
    )
}

export let LivingCosts = livingCosts;
export let HouseBills = houseBills;
export let Finance = luxurys;
export let Leisure = leisure;
export let Family = family;