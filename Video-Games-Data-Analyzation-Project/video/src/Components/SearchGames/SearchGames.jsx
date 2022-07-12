import React, { useState } from 'react';


const SearchGames = (props) => {
    
       
    const [game, setGame] = useState(""); 

    function handleSubmit(event) {
        event.preventDefault();
        let searchforGames = {
            game: game,
        };
        console.log(searchforGames);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search For Game</label>
            <input type="text"value={inputField} onChange={(event) => setInputField(event.target.value)}></input>
            <button type='submit'>Search</button>
        </form>
        );
}
    
 
export default SearchGames;