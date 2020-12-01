import React from 'react';
import BurgerIngredient from './burger-ingredients/BurgerIngredients';
import classes from './Burger.module.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // Transform string value into an array with as many elements as the number in the OG array
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    console.log(transformedIngredients);
    // Check if transformedIngredients actually has ingredients
    /* Since transformedIngredients will always have elements (arrays, maybe empty), we have to "flatten" the array.
        We call reduce() on the array to change it to something else? this makes transformedIgnredients only be empty or not.
    
    */

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
        
    );

};

export default burger;