import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({globalSales}) => {

    function generateDataFormChart(){

        console.log(globalSales);

        // Filters the video games by year
        let filteredGames = globalSales.filter(game => game.year > 2013);

        console.log('Filtered Games', filteredGames)

        let platforms = filteredGames.map(game => {
            return game.platform
        });

        console.log('Platforms', platforms)

        // uniq = [...new Set(array)];

        let distinctPlaforms = [...new Set(platforms)]

        console.log('Distinct Platforms', distinctPlaforms)

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlaforms.map(platform => {

            let allGamesForPlatform = filteredGames.filter(game =>  game.platform == platform);

            return [platform, 10 , "sliver" ]
        });

        console.log('Platform Arrays', platformArrays)

        const data = [
            ["Platform", "globalSales", {role: "style" }],
            ...platformArrays

          ];
        
          console.log('Data', data)


          return data;
    }
     
        // ["PS3", "White"],
        // ["X360", "green"],
        // ["PS4", "White"],
        // ["3DS", "Red"],
        // ["XOne", "green"],
        // ["wiiU", "Red"],
        // ["Wii", "Red"],
        // ["PC","Gold"],
        // ["DS", "Red"],
        // ["PSP", "White"],

            // return data;
    // }

    return ( 
        <div>
            <h1>Platform by Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart} />
        </div>
     );
}
 
export default DisplayPlatformStats;