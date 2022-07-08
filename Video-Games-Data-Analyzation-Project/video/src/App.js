import React, { useEffect, useState } from 'react';
import DisplayGlobalSales from './Components/DisplayGlobalSales/DisplayGlobalSales';
import axios from 'axios';
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';

function App() {

  

  const [globalSales, setGlobalSales] = useState([{}]);

  useEffect(() => {
    getGlobalSales();
  }, []);



  const getGlobalSales = async() => {
    try{
      // debugger;
      let response = await axios.get("http://localhost:8080/all")
      console.log(response.data)
      setGlobalSales(response.data);
    } catch(ex){
        console.log('ERROR in getGlobalSales EXCEPTION: ${ex}')
    }


  }
  return (
    <div>
      <DisplayGlobalSales parentGlobalSales={globalSales} />
      <DisplayPlatformStats globalSales={globalSales}/>

    </div>
  );
}

export default App;
