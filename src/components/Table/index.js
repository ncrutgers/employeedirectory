import React, {useState} from 'react';
import employees from '../../employees.json';
import './style.css';

function Table() {
    // Set state to contain employees JSON data
    const [employeeState, setEmployeeState] = useState({ 
        employees: employees
    });
    // Reloads table by category: name, title, or department
    function reloadTable(event){
        //console.log(event.target.attributes.getNamedItem("data-value").value);
        const category = event.target.attributes.getNamedItem("data-value").value;
        const newSortObj = sortByKey(employeeState.employees, category);
        //console.log(newSortObj);
        setEmployeeState({employees:newSortObj});
    }

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    //console.log(employeeState.employees[0]);    
    return (
        <table className="table table-hover table-dark mb-0">
            <thead>
                <tr className="table-border">
                    <th scope="col"><span type="submit" data-value="id" onClick={reloadTable}>#</span></th>
                    <th scope="col"><span type="submit" data-value="name" onClick={reloadTable}>Name</span></th>
                    <th scope="col"><span type="submit" data-value="title" onClick={reloadTable}>Title</span></th>
                    <th scope="col"><span type="submit" data-value="department"onClick={reloadTable}>Department</span></th>                    
                </tr>
            </thead>
            <tbody> 
                    {/* render table data in jsx */}
                    {employeeState.employees.map(employee => <tr><td scope="row">{employee.id}</td><td>{employee.name}</td><td>{employee.title}</td><td>{employee.department}</td></tr>)}                
            </tbody>

        </table>
    )
}

export default Table;