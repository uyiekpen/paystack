import logo from './logo.svg';
import './App.css';
import LayerComp from "./Component/LayerComp"
import About from "./Component/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeComp } from './Component/HomeComp';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={LayerComp} />
<Route path ="/pay" exact component ={HomeComp}/>
<Route path ="/about" exact component ={About}/>

      </Switch>
    </Router>

  );
}

export default App;
