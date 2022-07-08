import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({globalSales}) => {

    function generateDataFormChart(){

        console.log(globalSales);

        
        let filteredGames = globalSales.filter(game => game.year > 2013);

        console.log('Filtered Games', filteredGames)

        let platforms = filteredGames.map(game => {
            return game.platform
        });

        console.log('Platforms', platforms)

        const data = [
            ["Platform", "globalSales", {role: "style" }],
            ["PS3", "White"],
            ["X360", "green"],
            ["PS4", "White"],
            ["3DS", "Red"],
            ["XOne", "green"],
            ["wiiU", "Red"],
            ["Wii", "Red"],
            ["PC","Gold"],
            ["DS", "Red"],
            ["PSP", "White"],
        ];
        
            return data;
    }

    return ( 
        <div>
            <h1>Platform by Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart} />
        </div>
     );
}
 
export default DisplayPlatformStats;