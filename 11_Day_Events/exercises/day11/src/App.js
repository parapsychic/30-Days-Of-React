import './App.css';
import React from 'react';

const randomInt = (limit) => Math.floor(Math.random() * limit);

class App extends React.Component{
  state = {
    top: 100,
    left: 100,
  }
  
  recalculate = () => {
    this.setState({top: (randomInt(1000) + this.state.top) % 1000, left: (randomInt(700) + this.state.left) % 700});
  }

  
  
  render() {
  return (
    <div className="App">
      <div style={{
             padding: '40px', 
             position: 'absolute',
             top: this.state.top,
             left: this.state.left }}  
           onMouseOver={this.recalculate} >
        <div style={{backgroundColor: 'cyan', height: '200px', width: '500px', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle'}}>
         <h1>Catch Me!</h1>
    </div> 
    </div> 
    </div>
  );
}
}

export default App;
