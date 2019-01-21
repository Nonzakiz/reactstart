import React, { Component } from 'react'

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.count,
        }
    }
  addNumber = () => {
      this.props.onAdd()
  }
  componentDidUpdate = prevProps => {
    if(prevProps.count !== this.props.count){
        this.setState({count: this.props.count})
    }
}
  render() {
    return (
      <button onClick={this.addNumber}>click +1 {this.state.count} </button>
    )
  }
}
export default Button;