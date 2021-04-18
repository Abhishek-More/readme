import logo from './logo.svg';
import './App.css';
import './components/Landing/Landing'
import Landing from './components/Landing/Landing';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Landing />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
