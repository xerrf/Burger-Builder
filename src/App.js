import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/burger-builder/BurgerBuilder';

class App extends Component {
  
  render() {
    return(
      <Layout>
        <BurgerBuilder />
      </Layout>
    );

  }


}

export default App;
