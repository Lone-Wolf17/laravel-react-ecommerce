import React, {Component} from 'react';
import {deleteItem, getItems} from "./functions";
import {Link} from "react-router-dom";

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

    delete = (id) => {
        deleteItem(id).then(res => {
            let items = this.state.items;
            for (let index = 0; index < items.length; index++) {
                if (items[index].id === id) {
                    items.splice(index, 1)
                    this.setState({
                        items
                    })
                }
            }
        })
    }

    render() {
        return (
            <div>
                <Link className='btn btn-info mt-3 mb-3' to={'/addItem'}>Add Item</Link>
                <table className='table table-striped'>
                    <thead className='bg-info'>
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
                                    {item.status === '1' ? (
                                        <span>new</span>
                                    ) : null}
                                    {item.status === '2' ? (
                                        <span>used</span>
                                    ) : null}
                                </td>
                                <td>
                                    <Link
                                        className='btn btn-info'
                                        to={'/edit/item/' + item.id}
                                    >
                                        Edit
                                    </Link>
                                    <button className='btn btn-danger ml-1'
                                            onClick={() => this.delete(item.id)}>Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GetItems;
