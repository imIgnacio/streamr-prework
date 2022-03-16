import React from 'react';
import './App.css';
import Products from './components/products/Products';


function App() {

  return (
    <div className="App">
      <h1>Welcome to Streamr</h1>
      <section className='products'>
        <Products/>
      </section>
    </div>
  );
}

export default App;
