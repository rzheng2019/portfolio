import { useRef } from "react";

import "../../components_css/about_css/AboutContent.css"

function AboutContent() {
    return(
        <div id="about-content">
            <div id="about-block">
                <div id="about-title">
                    <h1>About</h1>
                </div>
                <div id="about-info-block">
                    <p>
                        Hi there! I'm Ricky and I'm a Software and Systems Engineer
                        that has work on sensor networks and iOS Mobile Application
                        development. I graduated from Florida State University in 2019
                        with a Bachelors of Science in Computer Engineering but I always
                        had my goal set on working in the field of Software Engineering
                        development. Currently, I am pursuing a Masters of Software 
                        Development at Boston University Metropolitan College.
                    </p>
                </div>
                <div id="about-middle-content">
                    <div id="about-tech-stack-title">
                        <p>Tech Stack</p>
                    </div>
                    <div id="about-tech-stack-block">
                        <div id="about-tech-stack-left">
                            <p id="about-tech-stack-left-title">Languages</p>
                            <ul id="about-language-items">
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>C++</li>
                                <li>C</li>
                                <li>Swift</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div id="about-tech-stack-right">
                            <p id="about-tech-stack-right-title">Tools/Frameworks</p>
                            <ul id="about-language-items">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>XCode</li>
                                <li>Swift</li>
                                <li>SwiftUI</li>
                                <li>Firebase</li>
                                <li>IntelliJ IDEA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="about-hobbies-block">
                    <p>
                        Aside from work and tech experience, in my free time I enjoy rock
                        climbing, hanging out with my friends and family, video games, 
                        and just about any outdoors activities! Oh, and also hanging out
                        with my dog!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;