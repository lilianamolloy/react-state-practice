import React, { Component } from 'react';
import './App.css';
import Animal from './Animal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      mamal: 0,
      bird: 0,
      reptile: 0,
      mythicalCreature: 0,
      insect: 0,
      marsupial: 0,
      amphibian: 0,
      crustacian: 0
    }
  }

  incramentAnimals(species) {
    let currentCount = this.state.clickCount;
    this.setState({clickCount: currentCount + 1});
    this.incramentSpecies(species)
  }

  decramentAnimals(species) {
    let currentCount = this.state.clickCount;
    this.setState({clickCount: currentCount - 1});
    this.decramentSpecies(species)
  }

  incramentSpecies(species) {
    if(species === 'mamal'){
      let currentClick = this.state.mamal;
      this.setState({mamal: currentClick + 1})
    } 
    else if (species === 'bird') {
      let currentClick = this.state.bird;
      this.setState({bird: currentClick + 1})
    }
    else if (species === 'reptile') {
      let currentClick = this.state.reptile;
      this.setState({reptile: currentClick + 1})
    }
    else if (species === 'mythicalCreature') {
      let currentClick = this.state.mythicalCreature;
      this.setState({mythicalCreature: currentClick + 1})  
    }
    else if (species === 'insect') {
      let currentClick = this.state.insect;
      this.setState({insect: currentClick + 1})
    }
    else if (species === 'marsupial') {
      let currentClick = this.state.marsupial;
      this.setState({marsupial: currentClick + 1})
    }
    else if (species === 'amphibian') {
      let currentClick = this.state.amphibian;
      this.setState({amphibian: currentClick + 1})
    }
    else if (species === 'crustacian') {
      let currentClick = this.state.crustacian;
      this.setState({crustacian: currentClick + 1})
    }
  }

  decramentSpecies(species) {
    if(species === 'mamal'){
      let currentClick = this.state.mamal;
      this.setState({mamal: currentClick - 1})
    } 
    else if (species === 'bird') {
      let currentClick = this.state.bird;
      this.setState({bird: currentClick - 1})
    }
    else if (species === 'reptile') {
      let currentClick = this.state.reptile;
      this.setState({reptile: currentClick - 1})
    }
    else if (species === 'mythicalCreature') {
      let currentClick = this.state.mythicalCreature;
      this.setState({mythicalCreature: currentClick - 1})  
    }
    else if (species === 'insect') {
      let currentClick = this.state.insect;
      this.setState({insect: currentClick - 1})
    }
    else if (species === 'marsupial') {
      let currentClick = this.state.marsupial;
      this.setState({marsupial: currentClick - 1})
    }
    else if (species === 'amphibian') {
      let currentClick = this.state.amphibian;
      this.setState({amphibian: currentClick - 1})
    }
    else if (species === 'crustacian') {
      let currentClick = this.state.crustacian;
      this.setState({crustacian: currentClick - 1})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>There are {this.state.clickCount} animals in this awesome Zoooooo!!!</h1>
        <p>Mamal: {this.state.mamal}</p>
        <p>Bird: {this.state.bird}</p>
        <p>Reptile: {this.state.reptile}</p>
        <p>Mythical creature: {this.state.mythicalCreature}</p>
        <p>Insect: {this.state.insect}</p>
        <p>Marsupial: {this.state.marsupial}</p>
        <p>Amphibian: {this.state.amphibian}</p>
        <p>Crustacian: {this.state.crustacian}</p>
        <Animal image="🦁" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦋" species="insect" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦅" species="bird"incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐼" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦉"  species="bird" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐷" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐯" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐨" species="marsupial" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐸" species="amphibian" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦄" species="mythicalCreature" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐘" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦓" species="mamal" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦖" species="reptile" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦕" species="reptile" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦐" species="crustacian" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🦀" species="crustacian" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐢" species="reptile" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
        <Animal image="🐊" species="reptile" incramentAnimals={this.incramentAnimals.bind(this)} decramentAnimals={this.decramentAnimals.bind(this)}/>
      </div>
    );
  }
}

export default App;
