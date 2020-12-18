import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './Admins/Login';
import Home from "./Admins/Home";
import Navbar from "./Admins/Navbar";
import AddItem from "./items/AddItem";
import GetItems from "./items/GetItems"

class App extends Component {
    // state = { }
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <div className="container">
                        <Route exact path={'/getItems'} component={GetItems}/>
                        <Route exact path={'/addItem'} component={AddItem}/>
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
