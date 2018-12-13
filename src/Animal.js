import React, { Component } from 'react';
import './Animal.css';

class Animal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clickCount: 0
        }
    }

    incramentClicks() {
        let species = this.props.species
        let currentClick = this.state.clickCount;
        this.setState({clickCount: currentClick + 1})
        this.props.incramentAnimals(species)
    }

    decramentClicks() {
        let species = this.props.species
        let currentClick = this.state.clickCount;
        if(currentClick > 0){
            this.setState({clickCount: currentClick - 1})
            this.props.decramentAnimals(species)
        }
    }

    render(){
        return(
            <div className='animal'>
                <div className="buttons">
                    <button onClick={this.incramentClicks.bind(this)}>{this.props.image}</button>
                    <button onClick={this.decramentClicks.bind(this)}> - {this.props.image}</button>
                </div>
                <p>There are {this.state.clickCount}  {this.props.image}</p>
            </div>
        )
    }
}

export default Animal