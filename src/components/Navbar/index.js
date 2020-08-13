import React from 'react';
import './style.css';
import SearchBar from '../SearchBar';
        
function Navbar() {

    return(
        
            <nav className="navbar navbar-dark">
                <div className="center">
                    <a className="navbar-brand text mx-0" href="#">Employee Directory</a>
                    <SearchBar/>
                </div>
            </nav>
        
    );    
}

export default Navbar;