import React from 'react';
import './App.scss';
import UserCard from "./components/Usercard";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }

  }
  componentDidMount(){
    this.fetchUser();

  }
  fetchUser = () => {
    fetch("https://api.github.com/users/rhokath")
    .then(response => {
      return response.json();
    })
    .then(person => {
      console.log(person)
      return this.setState({user: person})
    })
    .catch(error => {
      console.log("there is an error", error)
    })
  }
  render(){
    console.log(this.state.user)
    return (
      <div className="App">
        <h1>My Github Cards</h1>
        <UserCard userinfo={this.state.user}/>
      </div>
    );
  }
}

export default App;
