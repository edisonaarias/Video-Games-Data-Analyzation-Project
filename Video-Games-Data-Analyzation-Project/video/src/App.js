import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import SearchGames from './Components/SearchGames/SearchGames';

function App() {

  

  const [globalSales, setGlobalSales] = useState([]);


  useEffect(() => {
    getGlobalSales();
    
  }, []);



  const getGlobalSales = async() => {
    try{
      // debugger;
      let response = await axios.get("http://localhost:8080/all")
      setGlobalSales(response.data);
      console.log (response.data)
    } catch(ex){
        console.log('ERROR in getGlobalSales EXCEPTION: ${ex}')
    }

 
  }
  return (
    <div>
      {/* <DisplayGlobalSales parentGlobalSales={globalSales} /> */}
      <DisplayPlatformStats globalSales={globalSales}/>
      <SearchGames globalSales={globalSales}/>
    </div>
  );
}

export default App;
