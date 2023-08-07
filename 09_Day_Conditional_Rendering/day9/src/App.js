import './App.css';
import React from 'react';

class LoginComponent extends React.Component{
  state = {
    loggedIn : false,
    isLoading : false,
  }

  login = ()=>{
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({loggedIn: true, isLoading: false});
    }, "2000");
  }

  render(){
    return (
      <div>
      {this.state.isLoading ? 
        <p>Loading</p> :
        this.state.loggedIn ? <p>"Logged in"</p> : <button onClick={this.login}>login</button> }
      </div>
    )
  }
}


class App extends React.Component{

  setColor = () => {
    let month = new Date().getMonth();
    let color = 'white'

    if (month < 3){
      color = 'white';
    }
    else if (month < 6){
      color = 'yellow';
    }
    else if (month < 10){
      color = 'orange';
    }
    else{
      color = 'red';
    }
    return color;
  }

  render(){
    return (

      <div className="App" style={{backgroundColor: this.setColor(), height: '100%'}}>{new Date().getMonth()}
        <LoginComponent/>
      </div>
    );
  }
}

export default App;
