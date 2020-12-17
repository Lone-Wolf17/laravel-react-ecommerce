import React, {Component} from 'react';
import {getAuthAdmin} from "../Admins/functions";
import {addItems} from "./functions";


class AddItems extends Component {
    state = {
        // inputs
        name: '',
        description: '',
        status: '',
        price: '',
        photo: '',

        //validation
        error: ''
    };

    componentDidMount() {
        getAuthAdmin().then(res => {
            this.setState({
                admins_id: res.data.admin.id
            })
        })
    }

    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changePhotoState = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    submitState = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('description', this.state.description)
        formData.append('status', this.state.status)
        formData.append('price', this.state.price)
        formData.append('photo', this.state.photo)

        const admin_id = this.state.admins_id

        addItems(admin_id, formData).then(res => {
            console.log(res);
        })

    }

    render() {


        return (
            <div>

                <div className="card text-white bg-dark mb-3 mt-5 card_login" style={{maxWidth: "18rem"}}>
                    <div className="card-header">Add Item</div>
                    <div className="card-body">
                        <form onSubmit={this.submitState}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input
                                    type='name' className='form-control'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.changeState}
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputDescription1">Description</label>
                                <input
                                    type='text' className='form-control'
                                    id="exampleInputDescription1"
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.changeState}
                                />
                            </div>

                            <div className="form-group">

                                <label htmlFor="exampleInputDescription1">Status</label>

                                <select
                                    type='text'
                                    className='form-control'
                                    id="exampleInputDescription1"
                                    name='status'
                                    value={this.state.status}
                                    onChange={this.changeState}
                                >
                                    <option value={''}>...</option>
                                    <option value={'1'}>new</option>
                                    <option value={'2'}>used</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPrice1">Price</label>
                                <input
                                    type='text' className='form-control'
                                    id="exampleInputPrice1"
                                    name='price'
                                    value={this.state.price}
                                    onChange={this.changeState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPhoto1">Photo</label>
                                <input
                                    type='file' className='form-control'
                                    id="exampleInputPhoto1"
                                    name='photo'
                                    onChange={this.changePhotoState}
                                />
                            </div>


                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItems;
