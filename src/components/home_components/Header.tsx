import { Link } from "react-router-dom"

import "../../components_css/home_css/Header.css"

function Header() {
    return (
        <div id="header">
            <div id="name-section">
                <Link id="name" to="./about">Ricky Zheng</Link>
            </div>
            <div id="nav-bar">
                <Link id="about" to="./about">About</Link>
                <Link id="resume" to="./resume">Resume</Link>
                <Link id="projects" to="./projects">Projects</Link>
                <Link id="contact" to="./contact">Contact</Link>
            </div>
        </div>
    );  
}

export default Header;