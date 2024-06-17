import "../../components_css/home_css/HomeContent.css"
import profile_photo from '../../photos/profile_photo.jpeg'

function HomeContent() {
    return(
        <div id="middle-info-content">
            <div id="content-block">
                <div id="info-block">
                    <div id="photo-block">
                        <img id="profile-photo" src={profile_photo}></img>
                    </div>
                    <div id="greeting-block">
                        <h1>Hello!</h1>
                    </div>
                    <div id="description-block">
                        <div id="profile-description">
                            I'm a Software and Systems Engineer who has worked on sensor
                            networks and iOS Mobile Applications.
                        </div>
                        <div id="status-description">
                            Currently, I'm in graduate school pursuing a Master 
                            of Software Development degree.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;