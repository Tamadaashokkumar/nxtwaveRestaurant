import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css'

import Home from './Home'
import Cart from './Cart'

//write your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </>
)

export default App
