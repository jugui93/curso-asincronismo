const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//importa el modulo xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){//función para solictar información a la API
    let xhttp = new XMLHttpRequest();//Se declara el objeto XMLHttpRequest

    xhttp.open('GET', urlApi, true);//inicializa la petición
    xhttp.onreadystatechange = function (event){//Manejador de eventos invocado cada que cambia el atributo readyState
        if ( xhttp.readyState === 4){//retorna el estado de la petición
            if (xhttp.status === 200){//retorna el codigo numerico de estado HTTP
                callback(null, JSON.parse(xhttp.responseText))//función que se llama al completar la petición
            }else{
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();//Se envía la petición
}
fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

