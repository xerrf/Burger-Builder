import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/Build-Controls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1,
    cheese: 1,
    bacon: 1.2
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    updatePurchaseState(newIngredients) {
        const sum = Object.keys(newIngredients)
            .map((igKey) => {
                return newIngredients[igKey];
            })
            .reduce((sum, el) => {
                return sum = sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
        
    }

    addIngredientHanlder = (type)  => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        //update price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        //update state
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHanlder = (type)  => {
        const oldCount = this.state.ingredients[type];
        let newCount;
        const oldPrice = this.state.totalPrice;
        const priceSubstract = INGREDIENT_PRICES[type];
        let newPrice;
        if (oldCount !== 0) {
            newCount = oldCount - 1;
            newPrice = oldPrice - priceSubstract;
        } else {
            newCount = oldCount;
            newPrice = oldPrice
        }

        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;

        // update state
        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updatePurchaseState(newIngredients);
    }

    render() {
        // copy the state object in an immutable way
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo) {
            disableInfo[key] = (disableInfo[key] <= 0); //If the condition is met, set true, else false
        }
        //{salad:true,meat:false...}

        return(
            <Aux>
                {/* want to render a Burger, Build Controls, */}
                <Modal show={this.state.purchasing}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price = {this.state.totalPrice}
                        />
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients}
                    ></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHanlder}
                    ingredientRemoved={this.removeIngredientHanlder}
                    order={this.purchaseHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;