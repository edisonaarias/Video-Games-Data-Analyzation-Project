import React, { useState } from 'react';
import DisplayGlobalSales from './Components/DisplayGlobalSales/DisplayGlobalSales';

function App() {

  const [globalSales, setGlobalSales] = useState([{globalsales: 182.4}]);

  return (
    <div>
      <DisplayGlobalSales parentGlobalSales={globalsales} />

    </div>
  );
}

export default App;
