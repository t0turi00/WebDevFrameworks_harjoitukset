import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }
  addCarrots = () =>{
  this.setState({ items: [...this.state.items, { id: 5, value: 'Carrots', qty: 7, unit: 'x' } ] });
  }
  addStrawberries = () =>{
  this.setState({ items: [...this.state.items, { id: 5, value: 'Strawberries', qty: 20, unit: 'x' } ] });
  }

  addYoghurt = () => {
  this.setState({ items: [...this.state.items, { id: 5, value: 'Yoghurt', qty: 2, unit: 'x' } ] });
  }
  addBeer = () => {
  this.setState({ items: [...this.state.items, { id: 5, value: 'Beer', qty: 4, unit: 'x' } ] });
  }
  
  addShoppingListItems = (Description, Quantity) => {
   return () => { 
     const itemSearch = this.state.items.findIndex((element, index, array) => {
      if(element.value === Description){
        return true;
      }
      else {
        return false;
      }
     });
     
     if(itemSearch != -1) {
       let newitems = [... this.state.items];
       newitems[itemSearch].qty += Quantity;

       this.setState({ items: newitems});
     }
     else {
       this.setState({ items: 
        [...this.state.items,
        { id: this.state.items.length + 1,
          value: Description, qty: Quantity
        }
        ]
      });
     }
    }
  }
  

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      
      <button onClick={this.addShoppingListItems('Carrots', 7)}> Add Carrots </button>
      <button onClick={this.addShoppingListItems('Strawberries', 20)}> Add Strawberries </button>
      <button onClick={this.addShoppingListItems('Yoghurt', 2)}> Add Yoghurt </button>
      <button onClick={this.addShoppingListItems('Beer', 4)}> Add Beer </button>
    </div>
  }
}

export default App;