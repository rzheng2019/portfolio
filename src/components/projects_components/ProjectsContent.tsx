import "../../components_css/projects_css/ProjectsContent.css"

import EventDiary from "../../gifs/EventDiaryGif.gif"
import HobbyTracker from "../../gifs/HobbyTrackerGIF.gif"
import DessertRecipes from "../../gifs/DessertRecipesGif.gif"
import YuGiOhGIF from "../../gifs/YuGiOhDBGIF.gif"

function ProjectsContent() {
    return (
        <div id="projects-content">
            <div id="projects-block">
                <div id="projects-title-container">
                    <h1 id="project-title">Projects</h1>
                </div>
                <div id="projects-container">
                    <div id="projects-tiles">
                        <a id="project-tile" href="https://github.com/rzheng2019/EventDiary" target="_blank">
                            <div id="project-tile-content">
                                <h2 id="event-diary-title">Event Diary</h2>
                                <div id="project-image-container">
                                    <img id="project-gif" src={EventDiary} alt="loading" />
                                </div>
                                <p id="project-description">
                                    A native iOS application that allows users to track and log 
                                    daily events.
                                </p>
                            </div>
                        </a>
                        <a id="project-tile" href="https://github.com/rzheng2019/HobbyTracker" target="_blank">
                            <div id="project-tile-content">
                                <h2 id="hobby-tracker-title">Hobby Tracker</h2>
                                <div id="project-image-container">
                                    <img id="project-gif" src={HobbyTracker} alt="loading" />
                                </div>
                                <p id="project-description">
                                    A native iOS application that allows users to track personal hobbies 
                                    information.
                                </p>
                            </div>
                        </a>
                        <a id="project-tile" href="https://github.com/rzheng2019/DessertRecipes" target="_blank">
                            <div id="project-tile-content">
                                <h2 id="dessert-recipes-title">Dessert Recipes</h2>
                                <div id="project-image-container">
                                    <img id="project-gif" src={DessertRecipes} alt="loading" />
                                </div>
                                <p id="project-description">
                                    A native iOS application that displays a dessert recipe menu.
                                </p>                        
                            </div>
                        </a>
                        <a id="project-tile" href="https://github.com/rzheng2019/YuGiOhDB" target="_blank">
                            <div id="project-tile-content">
                                <h2 id="yugioh-title">YuGiOh DB</h2>
                                <div id="project-image-container">
                                    <img id="project-gif" src={YuGiOhGIF} alt="loading" />
                                </div>
                                <p id="project-description">
                                    A native iOS application that displays YGOPRODeck public API cards.
                                </p>                            
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsContent;