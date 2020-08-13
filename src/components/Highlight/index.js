import React from 'react';

function Highlight(props){

    console.log(props);
    
    
    return (
        <div>
        <h5 style={{color:'white', paddingBottom:'10px'}}>Employee Result</h5> 
        <table className="table table-hover table-dark mb-0" >            
            <tbody>                              
                <tr>
                    <td scope="row">{props.employee.id}</td>
                    <td>{props.employee.name}</td>
                    <td>{props.employee.title}</td>
                    <td>{props.employee.department}</td>
                </tr>            
            </tbody>

        </table>
        </div>
    )
}

export default Highlight;