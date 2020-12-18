import axios from 'axios';

const url = 'http://localhost:8000/api/admins/';
const token = {Authorization: `bearer ${localStorage.adminsToken}`}


export const addItems = async (admins_id, formdata) => {

    return await axios.post(
        url + "add/items/" + admins_id, formdata,
        {
            headers: token
        }
    ).then(res => {
        return res
    }).catch(err => {
        console.log(err);
    });
}
