import * as React from 'react';
import "../../Projects/projects.css";
import "../Beatly/beatly.css"
import Card from '../../../../node_modules/@mui/material/Card'
import Banner from '../../../assets/Beatly/Banner-project.png'
import Paper1 from '../../../assets/Beatly/paper-1.png'
import Paper2 from '../../../assets/Beatly/paper-2.png'
import Paper3 from '../../../assets/Beatly/paper-3.png'
import Paper4 from '../../../assets/Beatly/paper-4.png'
import Paper5 from '../../../assets/Beatly/paper-5.png'
import Paper6 from '../../../assets/Beatly/paper-6.png'
import Paper7 from '../../../assets/Beatly/paper-7.png'
import Paper8 from '../../../assets/Beatly/paper-8.png'
import Paper9 from '../../../assets/Beatly/paper-9.png'
import Paper10 from '../../../assets/Beatly/paper-10.png'

function Beatly() {
    return(
    <div id="beatly" className="project project-container">
        <img src={Banner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">Beatly: Lyrics v Beats</h1>
                <h2 className="subtitle">Curating music based on a user's preference for the lyrics or beats of a song</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">UX/UI Designer</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Timeline</h4>
                        <h5 className="role-content">Dec 2022 - Ongoing</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Team</h4>
                        <h5 className="role-content">Solo Designer</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Skills</h4>
                        <h5 className="role-content">User Research</h5>
                        <h5 className="role-content">Figma</h5>
                        <h5 className="role-content">Logo AI</h5>
                        <h5 className="role-content">Chat GPT</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">Music-curating apps have revolutionized how we discover, listen, and enjoy music. With a vast library of songs, albums, and playlists, these apps make it easy to find the perfect tunes for any occasion. Whether users are looking for new releases, classic hits, or personalized recommendations based on their listening history, music-curating apps offer an unparalleled listening experience.</h5>

                <h5 className="body-text">Music has been a massive part of my life for as long as I can remember, and recently I realized that many songs in my playlist transcend through the years. Songs that I listen to over and over again without getting bored. I'm sure all users can relate to that - everyone must have songs like that. It just had me thinking - what makes these songs stick? What makes them so unique that we tend to keep them close to our hearts through time? What makes up a song? After talking to music enthusiasts across age groups, I realized the lyrics or beats make a song stick.</h5>

                <h5 className="body-text">With the integration of AI and Machine Learning algorithms, music-curating apps are getting better at understanding the user's taste and providing the music accordingly. I wanted to ideate an app that would curate music based on what the user is listening to in a song - the lyrics or the beats.</h5>

                <h2 className="section-header">Problems</h2>
                <h3 className="section-sub-header">Challenge</h3>
                <h5 className="body-text">Currently, most music curation apps don’t have algorithms to suggest music based on similar lyrics or beats. They offer music primarily based on favorite genres, previously liked songs, overall song similarity, and music that other people with similar tastes as the user listen to.</h5>

                <h3 className="section-sub-header">Objective</h3>
                <h5 className="body-text">How can I design a mobile application that would curate music based explicitly on whether the user prefers to listen to the Lyrics or Beats of a song?
                </h5>

                <h2 className="section-header">Currently Working On...</h2>
                <h5 className="body-text">I just completed sketching initial paper prototypes and am in the process of conducting user interviews and research to narrow down and iterate on the designs.</h5>

                <h2 className="section-header">Exploring Paper Prototype Designs</h2>
                <div className="beatly-image-container">
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Landing</h5>
                        <img src={Paper1} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Sign Up</h5>
                        <img src={Paper2} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Log In</h5>
                        <img src={Paper3} className="beatly-images"></img>
                    </div>
                </div>
                <div className="campfire-image-container">    
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Favorite Genres</h5>
                        <img src={Paper4} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Lyrics v Beats</h5>
                        <img src={Paper5} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Beats Selection</h5>
                        <img src={Paper6} className="beatly-images"></img>
                    </div>
                </div>
                <div className="campfire-image-container">    
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Lyrics Selection</h5>
                        <img src={Paper7} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Recommendations</h5>
                        <img src={Paper8} className="beatly-images"></img>
                    </div>
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Library</h5>
                        <img src={Paper9} className="beatly-images"></img>
                    </div>
                </div>
                <div className="campfire-image-container">    
                    <div className="beatly-column">
                        <h5 className="body-text text-bold">Discover More</h5>
                        <img src={Paper10} className="beatly-images"></img>
                    </div>
                </div>
                <h2 className="section-header">MORE COMING SOON...</h2>
            </div>
        </div>
    </div>
    )
}

export default Beatly;