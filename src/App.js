import React from 'react';
import './App.css';
import Products from './components/products/Products';
import Search from './components/search/Search';

export const queriesContext = React.createContext();

function App() {

  const [queries, setQueries] = React.useState('');
  const value={queries, setQueries};

  return (
    <queriesContext.Provider value={value}>
      <div className="App">
        <h1>Welcome to Streamr</h1>
        <Search />
        <section className='products'>
            <Products/>
        </section>
      </div>
    </queriesContext.Provider>
  );
}

export default App;
