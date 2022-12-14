import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage(){
    return (
        <div>
            <div><img src='./assets/Landing_page.jpg'/></div>
            <div><h2>10x Team</h2><button><Link to='/postview'>Enter</Link></button></div>
        </div>
    ) 
}

export default LandingPage


