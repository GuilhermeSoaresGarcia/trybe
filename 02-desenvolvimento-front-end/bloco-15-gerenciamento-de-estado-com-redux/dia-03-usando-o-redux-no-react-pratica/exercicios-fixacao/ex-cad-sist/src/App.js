import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import './App.css';

function App() {  
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createuser" component={CreateUser} />
      </Switch>
    </>
  );
}

export default App;
