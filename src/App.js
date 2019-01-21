import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { FormGroup,FormControl,Label } from "react-bootstrap";


class App extends Component {
  constructor(props){
    super(props)
    console.log("test props", props.test)
    this.state = {
     count:0
    }
  }
  onCount = () => {
    this.setState(state=>({
      count: state.count+1
    }))
  }

  render() {
    return (
      <FormGroup className='App'>
      {this.state.count}
      <Counter result={this.state.count} />
        <Button count={this.state.count} onAdd={this.onCount}/>
      </FormGroup>
    );
  }
}

export default App;
