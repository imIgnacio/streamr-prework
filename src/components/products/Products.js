import React from 'react';
import Card from '../card/Card';
const axios = require('axios');


function Products() {

  const [dataArray, setDataArray] = React.useState([]);

  React.useEffect(() => {
    
    axios.request({
      "method": "get",
      "url": "https://streamr.network/api/v1/products",
      "headers": {
        "Content-Type": "application/json",
        "authorization": ""
      },
      "params": {
        "publicAccess": "true",
        "max": "50",
      }
    })
    .then(response => { setDataArray(response.data) })
    // .then(res => console.log(res))
  },[])
  // Finish use Effect

  return <>
    {/* {dataArray.map(product => <img src={product.imageUrl}/> )} */}
    { dataArray.map(product => <Card image={product.imageUrl} name={product.name} owner={product.owner} />)}
  </>
}

export default Products;

// beneficiaryAddress, category, chain, imageUrl, name, owner, id