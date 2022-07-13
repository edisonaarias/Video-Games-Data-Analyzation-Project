import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({globalSales}) => {

    function generateDataFormChart(){

        console.log(globalSales);

        // Filters the video games by year
        let filteredGames = globalSales.filter(game => game.year > 2013);

        // console.log('Filtered Games', filteredGames)

        let platforms = filteredGames.map(game => {
            return game.platform
        });

        // console.log('Platforms', platforms)

        // uniq = [...new Set(array)];

        let distinctPlatforms = [...new Set(platforms)]

        console.log('Distinct Platforms', distinctPlatforms)

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlatforms.map(platform => {

            let allGamesForPlatform = filteredGames.filter(game =>  game.platform === platform);

            console.log("All games platform", allGamesForPlatform)
// 
            let sum = 0;

            // use a for loop to loop over allGamesForPlatform and add the .globalsales of each to totalGlobalSales
            for (let i = 0; i <  allGamesForPlatform.length; i++) {
                sum += allGamesForPlatform[i].globalsales;    
            }
            
            
            return [ platform, sum, "blue" ]
        });

        // console.log(platforms, distinctPlatforms)

        const data = [
            ["Platform", "globalSales", {role: "style" }],
            ...platformArrays

          ];
        
        //   console.log('Data', data)


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
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
     );
}
 
export default DisplayPlatformStats;