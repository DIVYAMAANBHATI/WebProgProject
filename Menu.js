//Menu.js 
import React from "react"; 
import "./Menu.css"; 

const Menu = ({ onRouteChange }) => { 
	return ( 
		<div className="wrapper"> 
			<div> 
				<input 
					onClick={onRouteChange} 
					className="start"
					type="button"
					value="Start Game"
				/> 
				<footer >
                <p style={{ color: '#fff',marginBottom: '0.5rem' }}>Made by Divyamaan Bhati</p>
                <a href="./index1.html" target="_blank" rel="noopener noreferrer" style={{ color: '#fff',marginBottom: '2rem' }}>Visit Portfolio</a>
            </footer>
			</div> 
		</div> 
	); 
}; 

export default Menu; 
