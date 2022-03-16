import React from "react";
import { queriesContext } from '../../App';

function Search() {

    function getQueries() {
        if(sort && !order){
            console.log("order");
            return;
        }else if(!sort && order){
            console.log("sort");
            return;
        }
        setQueries(`&search=${search}&sortBy=${sort}&order=${order}`);
    }

    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [order, setOrder] = React.useState('');

    let {queries, setQueries} = React.useContext(queriesContext);

    return <div>
    <input className="search" placeholder="Search for" value={search} onChange={(event) => setSearch(event.target.value)}/>
    <select name="sortBy" onChange={(event) => setSort(event.target.value)}>
    <option value='' defaultValue>Sort</option>
    <option value='id'>ID</option>
    <option value='name'>Name</option>
    <option value='owner'>owner</option>
    <option value='category'>category</option>
    </select>
    <select name="orderBy" onChange={(event) => setOrder(event.target.value)}>
        <option value='' defaultValue>Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
    </select>
    <button type="button" onClick={getQueries}>Apply Filters</button>
    </div>

}

export default Search;

//darkTheme