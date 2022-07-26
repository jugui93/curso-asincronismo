import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi ){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

function* iterateFetch (array){
    for (let url of array) {
        yield fetchData(url)
    }
}

let urls = [ `${API}/products`,
                `${API}/products/${products[0].id}`, 
                `${urlApi}/categories/${product.category.id}` 
            ];

const getData = iterateFetch(urls);
products = getData.next().value;
console.log(products);
const product = getData.next().value;
console.log(product.title);
const category = getData.next().value;
console.log(category.name);

// const anotherFunction = async (urlApi) => {
//   try{
//     const products = await fetchData(`${urlApi}/products`);
//     const product = await fetchData(`${urlApi}/products/${products[0].id}`);
//     const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
//     console.log(products);
//     console.log(product.title);
//     console.log(category.name);
    
//   }catch(error) {
//     console.error(error)
//   }
// }
// anotherFunction(API);