import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/landingPage/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path="/videogames" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/form" component={Form}/>
    </div>
  );
}

export default App;