const DisplayGlobalSales = (props) => {
    return ( 
        <table>
         <thead>
        <tr>
         
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