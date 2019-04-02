import React, { Component } from 'react';
import App


class Players extends Component{
    constructor(props){
        super(props);
        this.state= {
            countScore1: 0,

        }
    }

    scoreCounter= () =>{
        var score = this.state.countScore1 + this.props.add;

    };



    render(){
        return(

                <div>
                    <h1>Player {this.props.whichPlayer}</h1>
                    <h1>Score1: {this.state.countScore1}</h1>

                    <button onClick={this.scoreCounter}>{this.props.add} pt</button>

                </div>

        );
    }
}

export default Players;