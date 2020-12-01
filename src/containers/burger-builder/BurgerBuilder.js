import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        }

    }

    render() {

        return(
            <Aux>
                {/* want to render a Burger, Build Controls, */}
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;