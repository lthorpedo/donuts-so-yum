
import './App.scss'
import Main from "./Main"
import SomeDonuts from "./SomeDonuts"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Route path='/donuts'>
        <SomeDonuts />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Router>
  );
}