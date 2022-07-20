import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response;
};

const data ={
    "price": 1800,
    "description": "Eiffel Tower during daytime, include Paris",
};

postData(`${API}/products/228`, data)
.then(response => response.json())
.then(data => console.log(data))