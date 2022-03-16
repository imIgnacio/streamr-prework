import React from 'react';
import Card from '../card/Card';
import { queriesContext } from '../../App';

const axios = require('axios');


function Products(props) {

  const [dataArray, setDataArray] = React.useState([]);
  let {queries} = React.useContext(queriesContext);

  React.useEffect(() => {
    
    axios.get(`https://streamr.network/api/v1/products?publicAccess=true&max=50${queries}`, 
    {
      "headers": {
        "Content-Type": "application/json",
        "authorization": ""
      }
    })
    .then(response => { setDataArray(response.data) })
  },[props, queries])
  // Finish use Effect

  return <>
    { dataArray.map(product => <Card image={product.imageUrl} name={product.name} owner={product.owner} key={product.id}/>)}
  </>
}

export default Products;

// beneficiaryAddress, category, chain, imageUrl, name, owner, id