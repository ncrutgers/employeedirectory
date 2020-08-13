import React, {useState} from 'react';
import './style.css';
import employees from '../../employees.json';
import Highlight from '../Highlight';

function SearchBar() {

    const [employeeState, setEmployeeState] = useState({ 
        employees: employees
    });

    const [newEmployeeState, setNewEmployeeState] = useState([]);

    const [searchState, setSearchState] = useState("");
    

    function handleInputChange(event){        
        //console.log(event.target.value);
        const newSearch = event.target.value;    
        setSearchState(newSearch.trim()); 
        //console.log(searchState);
    }

    function handleFormSubmit(event) {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();        
            const newObj = findObjectByKey(employeeState.employees, "name", searchState);
            if(!newObj){
                return console.log("No result");
            }
            setNewEmployeeState(newObj);
            //console.log(newObj);          
    };

      
    console.log(newEmployeeState);

    function findObjectByKey(array, key, value) {
        
        for (var i = 0; i < array.length; i++) {
            if ((array[i][key]) === value) {
                return array[i];
            }
        }
        
        return null;
    }

    //console.log();
     
    
    return(

        <div className="inputDiv">
            <form>
                <input size="30" type="text"placeholder="Search by employee full name" name="name" onChange={handleInputChange}/>
                <div>
                    <button className="btn btn-primary my-4" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>        
            <Highlight placeholder="Employee result"
            employee={newEmployeeState}
            />
 

        </div>        
    )
}

export default SearchBar;