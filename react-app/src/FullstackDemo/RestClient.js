const baseURL = "http://localhost:8080/api/v1";
const getProducts = () => {
    const url = baseURL + '/getProducts/';
    const promise1 = fetch(url,
        {
            method: "GET",
            dataType: "JSON"
        }
       );
    const promise2 = promise1.then(response => {
        return response.json();
    })
    return promise2;
}

export const getProduct = (id) => {
    const url = baseURL + `/getProduct/${id}`;
    const promise1 = fetch(url,
        {
            method: "GET",
            dataType: "JSON"
        }
       );
    const promise2 = promise1.then(response => {
        return response.json();
    })
    return promise2;
}

export const createProduct = product => {
    const url = baseURL + '/createProduct';
    console.log('input product received::', product);
    const promise = fetch(url, {
        method: 'POST',
        body:  JSON.stringify(product) ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      })
      .then(response => {
          return response.json();
      })

    return promise;
}

export const updateProduct = product => {
    const url = baseURL + `/updateProduct/${product.id}`;
    console.log('input product received::', product);
    //let data = {product, product.id};
    const promise = fetch(url, {
        method: 'PUT',
        body:  JSON.stringify(product, product.id) ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      })
      .then(response => {
          return response.json();
      })

    return promise;
}

export const deleteProduct = (id) => {
    const url = baseURL + `/deleteProduct/${id}`;
    const promise1 = fetch(url,
        {
            method: "DELETE"
        }
       );
    const promise2 = promise1.then(response => {
        return response.text();
    })
    return promise2;
}
 
export default getProducts;
