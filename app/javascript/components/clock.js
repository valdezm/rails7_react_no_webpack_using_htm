import { Component } from "react"
import h from "components/htm_create_element"
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return h`
        <div>
          <h1>Hello, world!</h1>
          <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
        </div>
      `
    }
  }
 
  export default Clock