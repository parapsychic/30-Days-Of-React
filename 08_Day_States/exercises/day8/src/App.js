import React from 'react';
import './App.css';

class PassingPropsToComponent extends React.Component{
  constructor(props){
    super(props);
  }
  
  // && instead of if => if left is true, right is rendered. 
  render(){
    const {name, age} = this.props.person;
    return(
      <div>
      <p>{name}</p>
      {age >= 150 && <p>Older than anyone alive right now</p>} 
      </div>
    )
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
  }

  state = {
    color: 'white',
    count: 1,
    colors : ['red', 'blue', 'white']
  }

  changeColor = () => {
    this.setState({color: this.state.colors[this.state.count % 3]});
  }

  addOne = () => {
    this.setState({count: this.state.count + 1})
  }

  render(){
   let color = this.state.color;

    return (
    <div className="App" style={{backgroundColor:color, height: '100%'}}>
        <button onClick={this.changeColor}>{this.state.count}</button>
        <button onClick={this.addOne}>+</button>
        <PassingPropsToComponent person={{name: 'ParaPsychic', age: 200}} />
    </div>
    )
  }
}

export default App;
