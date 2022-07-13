import React, { useEffect, useState } from 'react';

const SearchGames = (props) => {


    function SearchGames(){

        console.log(props.globalSales);

        // Filters the video games by details
        let filteredGames = props.globalSales.filter(globalSales => globalSales.details);


        let gameSearch = filteredGames.map(game => {
            return game.propsSearchGames
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
        
    <div className='form=group'>
        <form onSubmit={handleSubmit}>
            <label>Search For Game</label>
            <input type="text" value={game} className="for-control"onChange={(event) => setGame(event.target.value)}/>
            <button type='submit' className ="btn btn-primary">Search</button>
        </form>
        <tbody>
            
            {props.globalSales.map((globalSales, index) => {
                return (
                    
                    <tr key={index}>

                    <td>{globalSales.name}</td>                       
                    <td>{globalSales.rank}</td>                       
                    <td>{globalSales.platform}</td>                       
                    <td>{globalSales.year}</td>                       
                    <td>{globalSales.genre}</td>                       
                    <td>{globalSales.publisher}</td>                       
                    </tr>
       
                );
        
            })}
        </tbody>
    

       
    </div>

        );  
}

 
export default SearchGames;