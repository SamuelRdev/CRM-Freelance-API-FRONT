import axios from 'axios';
import {INVOICES_URL} from '../config';

function findAll(){
    return axios.get(INVOICES_URL)
        .then(res => res.data["hydra:member"])
}

const exportFunction = {
    findAll
}

export default exportFunction