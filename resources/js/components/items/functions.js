import axios from 'axios';

const url = 'http://localhost:8000/api/admins/';
const token = {Authorization: `bearer ${localStorage.adminsToken}`}


export const addItem = async (admins_id, formdata) => {

    return await axios.post(
        url + "add/item/" + admins_id, formdata,
        {
            headers: token
        }
    ).then(res => {
        return res
    }).catch(err => {
        console.log(err);
    });
}

export const getItems = async () => {

    return await axios.get(
        url + "get/items/",
        {
            headers: token
        }
    ).then(res => {
        return res
    }).catch(err => {
        console.log(err);
    });
}
