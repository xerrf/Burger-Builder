import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>)
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>${props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            
        </Aux>
    );
};

export default orderSummary;