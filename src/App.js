import React, { Component } from 'react';
import calculate from './Math/Math';
import classes from './Calculator.module.css';
import './App.css';

class App extends Component {
  state = {
    currentInput: [0],
    prevInput: null,
    operator: null,
    newOperation: true,
    total: null
  }

  // Need to edit this to work for more than 3 numbers
  numberInput = (digit) => {
    const currentInput = this.state.currentInput;
    const newInput = [...currentInput, digit]
    if(this.state.newOperation === true){
      this.setState({
        currentInput: [digit],
        newOperation: false
      })
    } else {
      this.setState({
        currentInput: newInput
      })
    }
  }

  operatorInput = (e) => {
    const screensNumbers = [...this.state.currentInput];
    // If user clicks a sign without a current input, ignore
    if(this.state.currentInput.length === 0){
      return;
    // If user has a current input, save that to prev, clear current, and add the sign
    } else if(this.state.prevInput !== null){
      let totalInput = null;
      const firstInput = this.state.prevInput;
      const secondInput = +(this.state.currentInput.join(''));
      
      totalInput = calculate(e, firstInput, secondInput)

      this.setState({
        currentInput: totalInput.toString().split(''),
        prevInput: null,
        operator:  null
      })

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

      totalInput = calculate(this.state.operator, firstInput, secondInput);

      this.setState({
        currentInput: totalInput.toString().split(''),
        prevInput: null,
        operator: null
      })
    }
  }

  clearButton = () => {
    this.setState({
      currentInput: [0],
      prevInput: null,
      operator: null,
      newOperation: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className={classes.Calculator}>
          <div className={classes.Display}>{this.state.currentInput}</div>
          <div className={classes.FirstRowOperators} onClick={() => this.clearButton('C')}>C</div>
          <div className={classes.FirstRowOperators} onClick={() => this.clearButton('±')}>±</div>
          <div className={classes.FirstRowOperators} onClick={() => this.clearButton('%')}>%</div>
          <div className={classes.OperatorButton} onClick={() => this.operatorInput('/')}>÷</div>
          <div className={classes.Button} onClick={() => this.numberInput(7)}>7</div>
          <div className={classes.Button} onClick={() => this.numberInput(8)}>8</div>
          <div className={classes.Button} onClick={() => this.numberInput(9)}>9</div>
          <div className={classes.OperatorButton} onClick={() => this.operatorInput('X')}>×</div>
          <div className={classes.Button} onClick={() => this.numberInput(4)}>4</div>
          <div className={classes.Button} onClick={() => this.numberInput(5)}>5</div>
          <div className={classes.Button} onClick={() => this.numberInput(6)}>6</div>
          <div className={classes.OperatorButton} onClick={() => this.operatorInput('-')}>-</div>
          <div className={classes.Button} onClick={() => this.numberInput(1)}>1</div>
          <div className={classes.Button} onClick={() => this.numberInput(2)}>2</div>
          <div className={classes.Button} onClick={() => this.numberInput(3)}>3</div>
          <div className={classes.OperatorButton} onClick={() => this.operatorInput('+')}>+</div>
          <div className={classes.ZeroButton} onClick={() => this.numberInput(0)}>0</div>      
          <div className={classes.Button} onClick={() => this.numberInput('.')}> . </div>
          <div className={classes.OperatorButton} onClick={() => this.totalButton('=')}>=</div>
        </div>
      </div>
    );
  }
}

export default App;
