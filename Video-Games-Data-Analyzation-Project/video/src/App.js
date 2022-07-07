import React, { useState } from 'react';
import DisplayGlobalSales from './Components/DisplayGlobalSales/DisplayGlobalSales';
import AddGlobalSales from './Components/AddGlobalSales/AddGlobalSales';

function App() {

  const [globalSales, setGlobalSales] = useState([{globalsales: 182.4}]);

  return (
    <div>
      <DisplayGlobalSales parentGlobalSales={globalsales} />
      <AddGlobalSales />

    </div>
  );
}

export default App;
