import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Admins/Login';
import Home from "./Admins/Home";
import Navbar from "./Admins/Navbar";

class App extends Component {
    // state = { }
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <div className="container">

                        <Route exact path={'/adminsLogin'} component={Login}/>
                        <Route exact path={'/home'} component={Home}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
