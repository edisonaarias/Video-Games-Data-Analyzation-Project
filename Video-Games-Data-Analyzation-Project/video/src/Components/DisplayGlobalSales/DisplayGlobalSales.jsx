const DisplayGlobalSales = (props) => {
    return ( 
        <table>
         <thead>
        <tr>
            <th>PS3</th>
            <th>X360</th>
            <th>PS4</th>
            <th>3DS</th>
            <th>XOne</th>
            <th>WiiU</th>
            <th>Wii</th>
            <th>PC</th>
            <th>DS</th>
            <th>PSP</th>
        </tr>
        </thead>
        <tbody>
        {props.parentGlobalSales.map((globalsale) =>{
            return (
            <tr>
                 <td>{globalsale.sales}</td>
            </tr>
             );
        })}
         </tbody>
    </table>
 
    );
}
 
export default DisplayGlobalSales;