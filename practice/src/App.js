import React, { Component } from 'react';
import Players from "./Players"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: 0
        };
    }


    addOne = () =>{
        this.setState({
            add:this.setState.add+1
        }
        )
    };
    addFive = () =>{
        this.setState({
                add:this.setState.add+5
            }
        )
    };
    addTen = () =>{
        this.setState({
                add:this.setState.add+10
            }
        )
    };

    render() {
        return (
          <div className="App">
              <div>
                  <button onClick={this.addOne}>1 pt</button>
                  <button onClick={this.addFive}>5 pts</button>
                  <button onClick={this.addTen}>10 pts</button>
              </div>
            <Players whichPlayer="1"/>
            <Players whichPlayer="2"/>
            <Players whichPlayer="3"/>
          </div>
    );
  }
}

export default App;
