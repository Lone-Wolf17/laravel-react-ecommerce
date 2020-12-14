import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    // state = { }
    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">I'm an App component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
