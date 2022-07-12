import React, { useEffect, useState } from 'react';

const SearchGames = (props) => {


    function SearchGames(){

        console.log(props.globalSales);

        // Filters the video games by details
        let filteredGames = props.globalSales.filter(game => game.details);

        let gameSearch = filteredGames.map(game => {
            return game.gameSearch
        });
    }
    const [game, setGame] = useState(""); 

    function handleSubmit(event) {
        event.preventDefault();
        let searchforGames = {
            game: game,
        };
        console.log(searchforGames);
        props.searchforGames(searchforGames)
    }

    return ( 
        <tbody>
            {props.globalSales.map((globalSales, index) => {
                return (
                    <tr key={index}>

                    <td>{globalSales.name}</td>                       
                    <td>{globalSales.rank}</td>                       
                    <td>{globalSales.platform}</td>                       
                    <td>{globalSales.pear}</td>                       
                    <td>{globalSales.genre}</td>                       
                    <td>{globalSales.publisher}</td>                       
                    </tr>
                );
            })}
        <form onSubmit={handleSubmit}>
            <label>Search For Game</label>
            <input type="text" value={game} onChange={(event) => setGame(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
        </tbody>

        );  
}

 
export default SearchGames;