import { Component } from "react"
import Clock from "components/clock"
import h from "components/htm_create_element"

function UserGreeting(props) {
    return h`<h1>Welcome back!</h1>`;
  }
  
function GuestGreeting(props) {
    return h`<h1>Please sign up.</h1>`;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return h`<${UserGreeting} />`;
  }
  return h`<${GuestGreeting} />`;
}

function LoginButton(props) {
    return h`
      <button onClick=${()=>props.onClick()}>
        Login
      </button>
      <${Clock}/>
    `
  }
  
  function LogoutButton(props) {
     return h`
      <button onClick=${()=>props.onClick()}>
        Logout
      </button>
    `
  }


  class LoginControl extends Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = h`<${LogoutButton} onClick=${()=>this.handleLogoutClick()} />`;
      } else {
        button = h`<${LoginButton} onClick=${()=>this.handleLoginClick()} />`;
      }
  
      return h`
        <div>
          <${Greeting} isLoggedIn=${isLoggedIn} />
          ${button}
        </div>
      `
    }
  }
  
  export default LoginControl;