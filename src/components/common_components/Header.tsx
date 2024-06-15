import { Link } from "react-router-dom"

import "../../components_css/common_css/Header.css"

function Header() {
    return (
        <div id="header">
            <div id="name-section">
                <Link id="name" to="/portfolio/">Ricky Zheng</Link>
            </div>
            <div id="nav-bar">
                <Link id="about" to="/portfolio/about">About</Link>
                <Link id="resume" to="/portfolio/resume">Resume</Link>
                <Link id="projects" to="/portfolio/projects">Projects</Link>
                <Link id="contact" to="/portfolio/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Header;