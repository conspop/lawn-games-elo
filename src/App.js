import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

import userService from './utils/userService'

class App extends Component {
  state = {
    user: userService.getUser(),
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  render() {
    return (
      <Switch>
          <Route exact path='/signup' render={({history}) =>
            <SignupPage
              handleSignupOrLogin={this.handleSignupOrLogin} 
              history={history}
            />
          } />
        <Route exact path='/login' render={({history}) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin} 
              history={history}
            />
          } />
      </Switch>
    )
  }
}


export default App;
