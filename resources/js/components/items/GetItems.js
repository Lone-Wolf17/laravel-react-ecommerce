import React, {Component} from 'react';
import {getItems} from "./functions";

class GetItems extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        getItems().then(res => {
            this.setState({
                items: res.data.items
            })
        })
    }

    render() {
        return (
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Item Number</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Control</th>
                </tr>
                </thead>

                <tbody>
                {this.state.items.map(item => {
                    return (
                        <tr key={item.id}>
                            <th scope='row'>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                {item.status === 1 ? (
                                    <span>new</span>
                                ) : null}
                                {item.status === 2 ? (
                                    <span>used</span>
                                ) : null}
                            </td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default GetItems;
