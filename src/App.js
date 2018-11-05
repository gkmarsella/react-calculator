import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    currentInput: [],
    prevInput: null,
    operator: null
  }

  add = (num1, num2) => {
    return num1 + num2;
  }

  subtract = (num1, num2) => {
    return num1 - num2;
  }

  divide = (num1, num2) => {
    return num1/num2;
  }

  multiply = (num1, num2) => {
    return num1 * num2;
  }

  numberInput = (digit) => {
    const currentInput = this.state.currentInput;
    const newInput = [...currentInput, digit]
    this.setState({currentInput: newInput})
  }

  operatorInput = (e) => {
    const screensNumbers = [...this.state.currentInput];
    // If user clicks a sign without a current input, ignore
    if(this.state.currentInput.length === 0){
      return;
    // If user has a current input, save that to prev, clear current, and add the sign
    } else {
      this.setState({
        prevInput: +(screensNumbers.join('')),
        currentInput: [],
        operator: e
      })
    }
  }

  totalButton = () => {
    if(this.state.currentInput.length > 0 && this.state.prevInput !== null){
      const firstInput = this.state.prevInput;
      const secondInput = +(this.state.currentInput.join(''));
      let totalInput = null;

      if(this.state.operator === '+'){
        totalInput = this.add(firstInput, secondInput)
      }

      if(this.state.operator === '-'){
        totalInput = this.subtract(firstInput, secondInput)
      }

      if(this.state.operator === 'X'){
        totalInput = this.multiply(firstInput, secondInput)
      }

      if(this.state.operator === '/'){
        totalInput = this.divide(firstInput, secondInput)
      }

      this.setState({
        currentInput: totalInput.toString().split(''),
        prevInput: null,
        operator: null
      })
    }
  }

  clearButton = () => {
    this.setState({
      currentInput: [],
      prevInput: null,
      operator: null
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.currentInput}
        </div>
        <button onClick={() => this.numberInput(1)}>1</button>
        <button onClick={() => this.numberInput(2)}>2</button>
        <button onClick={() => this.numberInput(3)}>3</button>
        <button onClick={() => this.numberInput(4)}>4</button>
        <button onClick={() => this.numberInput(5)}>5</button>
        <button onClick={() => this.numberInput(6)}>6</button>
        <button onClick={() => this.numberInput(7)}>7</button>
        <button onClick={() => this.numberInput(8)}>8</button>
        <button onClick={() => this.numberInput(9)}>9</button>
        <button onClick={() => this.operatorInput('+')}>+</button>
        <button onClick={() => this.operatorInput('-')}>-</button>
        <button onClick={() => this.operatorInput('X')}>X</button>
        <button onClick={() => this.operatorInput('/')}>/</button>      
        <button onClick={() => this.totalButton('=')}>=</button>
        <button onClick={() => this.clearButton('C')}>C</button>
      </div>
    );
  }
}

export default App;
