import React, { useState } from 'react';


const AddGlobalSales = (props) => {

    const [globalsale, SetGlobalSale] = useState('');


    return ( 
        <from>
            <label>Search For Game</label>
            <input type= 'text' value={Search} onChange={(event) => SetGlobalSale(event.target.value)} />
            <button type='submit'>Search</button>
        </from>

     );
}
 
export default AddGlobalSales;