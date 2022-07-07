import React, { useState } from 'react';


const AddGlobalSales = (props) => {

    const [globalsale, SetGlobalSale] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newGlobalSale = {
            globalsale: globalsale,
        };
        console.log(newGlobalSale);
    }

    return ( 
        <from onSubmit={handleSubmit}>
            <label>Search For Game</label>
            <input type= 'text' value={Search} onChange={(event) => SetGlobalSale(event.target.value)} />
            <button type='submit'>Search</button>
            <label>See Details</label>
            <input type= 'text' value={Details} onChange={(event) => SetGlobalSale(event.target.value)} />
            <button type='submit'>See Details</button>
        </from>

     );
}
 
export default AddGlobalSales;