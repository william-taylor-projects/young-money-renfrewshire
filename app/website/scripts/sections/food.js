
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const RecipeComponent = props => {
    return (
        <div>
            <h3>{ props.recipe.name }</h3><hr/>
            <h5>Ingredients</h5>
            <ul>
                {
                    props.recipe.ingredients.map((ingredient, index) => {
                        return (
                            <li key={index}>{ingredient}</li>
                        )
                    })
                }
            </ul>
            <h5>Methods</h5>
            <ol>
                { 
                    props.recipe.steps.map((step, index) => {
                        return <li key={index}>{step}</li>
                    })
                }
            </ol>
            <br/>
        </div>
    );
}

const recipes = [
    {
        name: 'Chicken Curry',
        ingredients: [
            '2 Chicken Breasts',
            'A Jar of Curry Sauce',
            'Rice 100g per person',
            'Punnett of Mushrooms ',
            'One Large Onion',
            'Half a Cup of Frozen Peas',
            'Tbsp of Oil for cooking',
            'Pinch of salt '
        ],
        steps: [
            'Dice your chicken and start to cook in a frying pan.',
            'Add water to a saucepan and add salt. Once the water is boiling add the rice and turn down to a medium heat.',
            'Dice the onion into cubes.',
            'Wash and half the mushrooms.',
            'Add the chicken, mushrooms, onion, peas and curry sauce into the pan and let cook for 10 minutes.',
            'After 10 minutes give the rice a good stir to make sure it is thoroughly cooked through.',
            'Once rice is cooked drain with a colander.',
            'Serve'
        ]
    },
    {
        name: 'Mince and Veg with Mash',
        ingredients: [
            '250g Mince',
            'Tin of Peas and Carrots',
            'One Onion',
            'Gravy',
            '1 Beef Stock Cube',
            '4 - 5 Medium Potatoes',
            'Knob of Butter',
            'Cup of Milk'
        ],
        steps: [
            'Brown the mince in a frying pan.',
            'Add water in a saucepan with a pinch of salt on a high hob, start to peel and chop potatoes. ',
            'Add to the saucepan once the water has boiled, turn down to a medium heat. Leave for 30 minutes. ',
            'Add boiling water in a jug with the gravy and a stock cube until you get the right amount of consistency then add to the saucepan. Add more water if needed.',
            'Add the mince to the gravy along with the onion and tin of peas and carrots (removing the juice beforehand). ',
            'Put the lid on the pan and let simmer until potatoes are cooked.',
            'Warm up your butter and milk in a bowl for 10 - 20 seconds.',
            'Drain the water out of the potatoes with a colander and add the butter and milk mixture slowly. Mash until your potatoes are smooth and creamy.',
            'Serve.'
        ]
    },
    {
        name: 'Spaghetti Bolognese',
        ingredients: [
            '250g Mince',
            'A Jar of Bolognese Sauce',
            'Bell Peppers',
            'Mushrooms ',
            'Pasta 100g per person',
            'Pinch of salt'
        ],
        steps: [
            'Brown the mince off in a frying pan. (There is no need to add oil as mince holds a lot of oil and water.)',
            'Wash and chop the mushrooms.',
            'Cut up peppers into small cubes.',
            'Add the mince, mushrooms and peppers to a saucepan and add the jar of sauce.',
            'Boil water and add to a saucepan with a pinch of salt.',
            'Boil for 20-25 minutes stirring occasionally.',
            'Serve.'
        ]
    },
    {
        name: 'Sausage and Creamy Mash',
        ingredients: [
            'One Packet of Square Sausage',
            'One Large Onion',
            'Gravy',
            'One Beef Stock Cube',
            '4 - 5 Medium Potatoes',
            'Cup of Milk',
            'Knob of Butter'
        ],
        steps: [
            'Boil the kettle and mix with the gravy and stock cube. Put into a saucepan and add the sausage.',
            'Chop the onion into big chunks and add to the saucepan.',
            'Peel and chop potatoes, add them to a saucepan of boiling water with a pinch of salt.',
            'Let everything simmer for 30 - 40 minutes.',
            'Warm up your butter and milk in a bowl for 10 - 20 seconds.',
            'Drain the water out of the potatoes with a colander and add the butter and milk mixture slowly. Mash until your potatoes are smooth and creamy.',
            'Serve all together.'
        ]
    },
    {
        name: 'Mac\'n\' Cheese',
        ingredients: [
            '1 Box of Macaroni Pasta',
            '1/4 cup of Butter',
            '1/4 cup of All Purpose Flour',
            '1/2 tsp Salt',
            '2 cups of Milk',
            '2 cups of Grated Cheddar Cheese',
            'Pinch of Black Pepper (to taste)'
        ],
        steps: [
            'Boil some water in a saucepan with a pinch of salt.',
            'Put in your pasta and cook for about 10 minutes and then drain.',
            'Melt butter in a seprate saucepan and then stir in flour, salt and pepper until smooth. ',
            'Slowly pour in the milk stirring until the miture starts bubbling. ',
            'Add cheese to the mixture until melted.',
            'Mix in the macaroni until fully coated.',
            'Serve.'
        ]
    },
    {
        name: 'Chorizo Cabarona',
        ingredients: [
            'Jar of Cabarona Sauce',
            '80g Chopped Bacon',
            '80g Chorizo',
            '2 Chicken Breasts',
            'Yellow Bell Pepper',
            'Pasta 100g per serving'
        ],
        steps: [
            'Add the pasta into a pan of boiling salted water. Let it boil for 20 minutes.',
            'In a frying pan start to fry off the chicken.',
            'Cut up the bell pepper into cubes.',
            'Once cooked add the chorizo, bacon, pepper and jar of sauce to the pan on a low heat.',
            'Drain the pasta and add to the sauce.',
            'Serve'
        ]
    },
    {
        name: 'Haggis, Neeps and Tatties',
        ingredients: [
            '1 Haggis',
            '400g Sweede (Neeps)',
            '500g Potatoes (Tatties)',
            'Butter',
            'Milk optional',
            'Salt and Pepper'
        ],
        steps: [
            'Bring a saucepan of water to the boil, put the haggis in and lower the heat. Simmer for around 90 minutes.',
            'Peel your neeps and tatties, cube them and then boil in seprate pans (about 30 minutes before haggis is ready). ',
            'Drain the neeps and tatties and mash sepreatly with a knob of butter. Add milk if needed. ',
            'Serve all together. '
        ]
    },
    {
        name: 'Chicken Pasta',
        ingredients: [
            '2 Chicken Breasts',
            'Bell Peppers',
            'Mushrooms',
            'Jar of Tomato Sauce',
            'Pasta 100g per person',
            'Pinch of salt',
            'tbsp Oil'
        ],
        steps: [
            'Boil the pasta in a pan of salted water for 15 - 20 minutes.',
            'Dice and fry the chicken breasts in oil until cooked thoroughly.',
            'Chop the peppers.',
            'Wash and half the mushrooms.',
            'Once pasta is boiled add to an oven dish with the mushrooms, peppers, chicken and jar of sauce. ',
            'Put in the oven for 15 - 20 minutes. ',
            'Serve.'
        ]
    },
    {
        name: 'Homemade Vegetable Soup',
        ingredients: [
            '1 Small Packet of Soup Mix',
            '1 Packet of Soup Vegetables',
            '2 Vegetable Stock Cubes',
            '1 1/2 handfuls of Orang Split Peas'
        ],
        steps: [
            'Add all ingredients to a pot with enough water to cover vegetables and simmer for 1 1/2 - 2 hours.',
            'Add stock cubes and simmer for another 30 minutes stirring occasionally. ',
            'Serve.'
        ]
    },
    {
        name: 'Gammon in Coke',
        ingredients: [
            'Coca Cola (enough to cover meat)',
            'One Gammon Joint'
        ],
        steps: [
            'Put the gammon into the slow cooker.',
            'Open the Coke and cover the meat completely.',
            'Leave on a low for 7 hours until meat is tender. (Or high for 4 hours)',
            'Serve with a choice of vegetables and potatoes.'
        ]
    }
];

export default class Emergency extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="page-header">
                        <h1>Food &amp; Meals</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='justify'> 
                                Eating smart can save you money. Here you can find some cheap and simple recipes that would save you some money while still giving you a good full meal at the end of the day.
                                All our recipes are based on two people and will be cheap to make.
                            </p>
                        </div>
                        {
                            recipes.map((recipe, index) => {
                                return (
                                    <div key={index} className='col-md-12'>
                                        <RecipeComponent recipe={recipe} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}