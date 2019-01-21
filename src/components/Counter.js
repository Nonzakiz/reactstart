import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.result
        }
    }
    componentDidUpdate = prevProps => {
        if(prevProps.result !== this.props.result){
            this.setState({count: this.props.result})
        }
    }
    decreseNumber =()=>{
        this.setState({
            count: this.state.count-1
        })
    }
  render() {
    return (
        <p onClick={this.decreseNumber}>{this.state.count}</p>
    )
  }
}
export default Counter;
