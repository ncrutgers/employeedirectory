import React, {useState} from 'react';
import employees from '../../employees.json';

function Table() {

    const [employeeState, setEmployeeState] = useState({ 
        employees
    });
    
    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>First Employee Name</td>
                    <td>Employee's Title</td>
                    <td>Employee's Dept</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;