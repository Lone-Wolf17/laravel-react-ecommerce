import axios from 'axios';

const url = 'http://localhost:8000/api/admins/';


export const addItems = async (admins_id, formdata) => {

    return await axios.post(
        url + "add/items/" + admins_id, formdata,
        {
            headers: {
                Authorization: `bearer ${localStorage.adminsToken}`
            }
        }
    ).then(res => {
        return res.data.token
    }).catch(err => {
        console.log(err);
    });
}
