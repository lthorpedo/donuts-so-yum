
import './App.scss'
import Main from "./Main"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Route path='/' component={(props) => <Main {...props} key={window.location.pathname}/>}>
      </Route>
    </Router>
  );
}