import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Quotes from './containers/Quotes'
import NewQuote from './containers/NewQuote'

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/>  
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/quotes" component={Quotes}/>
            <Route exact path="/quotes/new" component={NewQuote}/>
            <Route exact path="/quotes/:id" component={AddQuote}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;


//will hold Routing 