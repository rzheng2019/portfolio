import "../../components_css/resume_css/ResumeContent.css"

function ResumeContent() {
    return(
        <div id="resume-content">
            <div id="resume-block">
                <div id="resume-title">
                    <h1>Ricky Zheng</h1>
                    <div id="resume-contact-info">
                        <p id="resume-email">rickzheng19@gmail.com</p>
                        <p id="resume-contact-divider">|</p>
                        <p id="resume-location">Miami, FL</p>
                        <p id="resume-contact-divider">|</p>
                        <a id="resume-profile-link" href="https://www.linkedin.com/in/ricky-zheng-profile/" target="_blank" rel="noreferrer">
                            https://www.linkedin.com/in/ricky-zheng-profile/
                        </a>
                    </div>
                </div>
                <div id="resume-summary">
                    <p>
                        Software Engineer with 3 years of experience in agile application
                        and test development. I have created a C++ maintenance tests framework
                        for a sensor network program, native iOS mobile applications, and analyzed
                        system software test data and requirements.
                    </p>
                </div>
                <div id="resume-education">
                    <div id="resume-education-title">
                        <h2>Education</h2>
                    </div>
                    <div id="resume-education-content">
                            <ul id="resume-education-content-left">
                                <li id="school-names">Florida State University</li>
                                <li>Bachelor of Science in Computer Engineering</li>
                                <br></br>
                                <li id="school-names">Boston University</li>
                                <li>Master of Science in Software Development</li>
                            </ul>
                            <ul id="resume-education-content-right">
                                <li>Tallahassee, FL</li>
                                <li>2015 - 2019</li>
                                <br></br>
                                <li>Boston, MA</li>
                                <li>2024 - Present</li>
                            </ul>
                    </div>
                </div>
                <div id="resume-experience">
                    <div id="resume-experience-title">
                        <h2>Experience</h2>
                    </div>
                    <div id="resume-experience-content">
                        <div id="resume-job-content">
                            <ul id="resume-job-content-left">
                                <li id="job-names">Software Engineer</li>
                                <li>Epsilon Systems Solutions (Subcontracted to Raytheon Technologies)</li>
                                <ul id="job-description">
                                    <li>
                                        Designed and integrated C++ unit test framework for sensor network capabilities
                                        which ensured new capabilities were not breaking existing functionality.
                                    </li>
                                    <li>
                                        Led massive code migration that transferred codebases to a new Git based version 
                                        control system. 
                                    </li>
                                    <li>
                                        Created new compilation dependencies framework that improved compile time efficiency.
                                    </li>
                                    <li>
                                        Documented and analyzed test data which led to an increase of new capabilities 
                                        released to the customer.
                                    </li>
                                </ul>
                            </ul>
                            <ul id="resume-job-content-right">
                                <li>St. Petersburg & Largo, FL</li>
                                <li>Jun. 2015 - Jan. 2019</li>
                            </ul>
                        </div>
                        <div id="resume-job-content">
                            <ul id="resume-job-content-left">
                                <li id="job-names">Software Researcher</li>
                                <li>Florida State University</li>
                                <ul id="job-description">
                                    <li>
                                        Detected, collected, and fixed over 100 C++ performance and compatibility bugs found on Bugzilla
                                        using non-intrusive solutions.
                                    </li>
                                    <li>
                                        Data analyzed was used as test data for principal investigators research paper regarding fixing
                                        performance problems with non-intrusive fixes.
                                    </li>
                                </ul>
                            </ul>
                            <ul id="resume-job-content-right">
                                <li>Tallahassee, FL</li>
                                <li>May. 2015 - Aug. 2017</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="resume-projects">
                    <div id="resume-project-title">
                        <h2>Projects</h2>
                        <a href="https://github.com/rzheng2019?tab=repositories" target="_blank" rel="noreferrer">Visit My GitHub Profile</a>
                    </div>
                    <div id="resume-project-content">
                        <div id="resume-project-item-content">
                            <ul id="resume-project-content-left">
                                <li id="resume-project-name">Dessert Recipes</li>
                                <li>Native iOS Application, Swift, SwiftUI, XCTest</li>
                                <ul id="resume-project-description">
                                    <li>
                                        Decoded JavaScript Object Notation (JSON) data from public REST API endpoints and 
                                        displayed a list of dessert recipes with SwiftUI.
                                    </li>
                                    <li>
                                        Utilized Model-View-ViewModel (MVVM) architecture pattern which improved functionality
                                        testing.
                                    </li>
                                    <li>
                                        Implemented unit tests with XCTest framework that ensured URL calls are currently valid.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div id="resume-project-item-content">
                            <ul id="resume-project-content-left">
                                <li id="resume-project-name">Event Diary</li>
                                <li>Native iOS Application, Swift, SwiftUI, Firebase, Firestore, Authentication</li>
                                <ul id="resume-project-description">
                                    <li>
                                        Created a SwiftUI diary application that efficiently recorded user’s daily event logs with MVVM.
                                    </li>
                                    <li>
                                        Integrated Firebase authentication and cloud Firestore which allowed users to save data effortlessly.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="resume-skills">
                    <div id="resume-skills-title">
                        <h2>Technical Skills</h2>
                    </div>
                    <div id="resume-skills-content">
                        <div id="resume-skills-item-content">
                            <div id="resume-skills-content-left">
                                <li id="skill-name">Languages:</li>
                                <li>C/C++, Python, Swift, HTML5, CSS3, JavaScript</li>
                            </div>
                            <div id="resume-skills-content-left">
                                <li id="skill-name">Developer Tools:</li>
                                <li>XCode, VS Code, PyCharm, Visual Studio, Git, Eclipse, Bitbucket</li>
                            </div>
                            <div id="resume-skills-content-left">
                                <li id="skill-name">Frameworks:</li>
                                <li>SwiftUI, Firebase, Core Data, XCTest</li>
                            </div>
                            <div id="resume-skills-content-left">
                                <li id="skill-name">Data Analysis Tools:</li>
                                <li>Jira, Confluence, IBM DOORS, Microsoft Office Tools (Word, Excel), MATLAB</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeContent;