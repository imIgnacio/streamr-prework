import React from "react";
import { queriesContext } from '../../App';

function Search() {

    const [sortColor, setSortColor] = React.useState('');
    const [orderColor, setOrderColor] = React.useState('');

    const styles = {
        div: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        searchBar: {
            margin: '4px',
        },
        sortBar: {
            margin: '4px',
            border: `${sortColor}`,
        },
        orderBar: {
            margin: '4px',
            border: `${orderColor}`,
        }
    }
    function getQueries() {
        if(sort && !order){
            setSortColor('');
            setOrderColor('2px solid red');
            return;
        }else if(!sort && order){
            setOrderColor('');
            setSortColor('2px solid red');
            return;
        }
        setQueries(`&search=${search}&sortBy=${sort}&order=${order}`);
        setOrderColor('');
        setSortColor('');
    }

    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [order, setOrder] = React.useState('');

    let {queries, setQueries} = React.useContext(queriesContext);

    return <div style={styles.div}>
    <input style={styles.searchBar} className="search" placeholder="Search for" value={search} onChange={(event) => setSearch(event.target.value)}/>

    <select style={styles.sortBar} name="sortBy" onChange={(event) => setSort(event.target.value)}>
    <option value='' defaultValue>Sort</option>
    <option value='id'>ID</option>
    <option value='name'>Name</option>
    <option value='owner'>owner</option>
    <option value='category'>category</option>
    </select>

    <select style={styles.orderBar} name="orderBy" onChange={(event) => setOrder(event.target.value)}>
        <option value='' defaultValue>Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
    </select>

    <button style={styles.searchBar} type="button" onClick={getQueries}>Apply Filters</button>
    </div>

}

export default Search;

//darkTheme