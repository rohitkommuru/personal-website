import './NavBar.css'
import React from 'react'

function NavBar() { 
    return (
    <nav className="navbar">
        <div className="logo">RK</div>
        <ul className="navbar-list">
            <li className="navbar-item"><a href="#intro">Intro</a></li>
            <li className="navbar-item"><a href="#experience">Experience</a></li>
            <li className="navbar-item"><a href="#projects">Projects</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
            <li className="navbar-item"><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
    </nav>
    );
    
}

export default NavBar; 