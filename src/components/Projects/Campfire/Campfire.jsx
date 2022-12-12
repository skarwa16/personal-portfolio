import * as React from 'react';
import "../../Projects/projects.css";
import "../Campfire/campfire.css"
import Sketch1 from "../../../assets/Campfire/sketch1.png"
import Sketch2 from "../../../assets/Campfire/sketch2.png"
import Sketch3 from "../../../assets/Campfire/sketch3.png"
import Sketch4 from "../../../assets/Campfire/sketch4.png"
import Banner from '../../../assets/Barsaat/PortfolioImages/banner.png'
import Research from '../../../assets/Barsaat/PortfolioImages/interviews.png'
import FinalFrame from '../../../assets/Barsaat/PortfolioImages/bottom.png'
import Competitve from '../../../assets/Barsaat/PortfolioImages/competitive.png'
import Wireframes from '../../../assets/Campfire/wireframes.png'
import Card from '../../../../node_modules/@mui/material/Card'

function Campfire() {

  return (
    <div id="campfire" className="project project-container">
        <img src={Banner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">Y Combinator: Campfire</h1>
                <h2 className="subtitle">Iterative Design Assignment for Campfire, a Y Combinator start-up</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">UX/UI Designer</h5>
                        <h5 className="role-content">Web Designer</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Timeline</h4>
                        <h5 className="role-content">Oct 2022</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Team</h4>
                        <h5 className="role-content">Aanchal Sheth</h5>
                        <h5 className="role-content">Suyash Kothari</h5>
                        <h5 className="role-content">Vandana Ramesh</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Skills</h4>
                        <h5 className="role-content">UX/UI Design</h5>
                        <h5 className="role-content">UX Research</h5>
                        <h5 className="role-content">Class Assignment</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">Dubbed as the software that facilitates “Actually fun remote team socials”, Campfire (accessible at Campfire.to) is levelling up the fun and interaction you’re able to have when bonding with team members in a distributed work environment. As a SaaS (Software-as-a-Service) business, Campfire caters to companies looking to have innovative team socials that go beyond all-too-frequently-used Zoom breakout rooms. On Campfire, games, TV, music and multi-person video calling are embedded onto one platform, creating an interactive and immersive experience. Campfire was founded in 2021 by Siamak Freydoonnejad and Sina Zargaran, and has been supported by YCombinator as part of their Winter 2022 Batch.

                For our project, we had to choose a startup with a clear concept and design their web or mobile application from scratch without viewing any interfaces they built.</h5>
                
                <h2 className="section-header">Exploring Paper Prototype Designs</h2>
                <div className="campfire-image-container">
                    <div className="campfire-column">
                        <h5 className="body-text text-bold">Idea 1</h5>
                        <img src={Sketch1} className="campfire-images"></img>
                    </div>
                    <div className="campfire-column">
                        <h5 className="body-text text-bold">Idea 2</h5>
                        <img src={Sketch2} className="campfire-images"></img>
                    </div>
                </div>
                <div className="campfire-image-container">    
                    <div className="campfire-column">
                        <h5 className="body-text text-bold">Idea 3</h5>
                        <img src={Sketch3} className="campfire-images"></img>
                    </div>
                    <div className="campfire-column">
                        <h5 className="body-text text-bold">Idea 4</h5>
                        <img src={Sketch4} className="campfire-images"></img>
                    </div>
                </div>

                <h5 className="body-text">These sets of sketches are distinctly different from one another, having been completed by different individuals without seeing others’ designs.</h5>
                
                <ul>
                    <li><h5 className="body-text">Idea #2 has a traditional webpage header bar with dropdown menu items that is consistent through each of its pages. Contrast this with the other ideas, which do not have a header bar and thus makes the experience more immersive.</h5></li>
                    <li><h5 className="body-text">Ideas #1, #2 and #3 try to incorporate the idea of a campfire into the platform: Idea #1 places people’s video call windows around a campfire backdrop to mimic a gathering around a real campfire; Idea #2 has a stand-alone campfire graphic, creating a separation between the idea of a campfire and the website itself; and Idea #3 uses a campfire as a button to call friends. Contrast this with Idea #4, which focuses on the more mechanical components of selecting and engaging in an activity.</h5></li>
                    <li><h5 className="body-text">Idea #2 is the only one that incorporates testimonials as part of a way to draw customers in (remember that Campfire is a SaaS company). This is distinctly different from the other ideas which are more inwards-facing (towards existing rather than prospective customers).</h5></li>
                    <li><h5 className="body-text">Idea #3 distinctly suggests a chat feature to complement video calling, which the other Ideas do not suggest.</h5></li>
                </ul>

                <h2 className="section-header">Process</h2>
                <h3 className="section-sub-header">Wireframing & Testing</h3>
                <h5 className="body-text"></h5>
                <img src={Wireframes} className="content-images"></img>

                <h3 className="section-sub-header">Visual Style Guide</h3>
               
                <h3 className="section-sub-header">Iterations & Feedback</h3>
                <h3 className="section-sub-sub-header">Iteration 1</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Inform potential Barsaatees</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 2: Call-to-Action for Non-Brown University Organizations</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 3: Create a more permanent online presence</h5>
                {/* insert gif / video for iteration 1 */}
                <h5 className="body-text">During this stage, I hit a block. I could not fill the empty space on each page (Upcoming, Performances, Members etc.). As a result, I ended up focusing only on the UI elements instead of the UX. I realized this drew user attention away from the content to only visual design, which defeated the website's purpose. I wanted to completely change up the designs but decided to user-test them before to gain more insight into the direction in which the changes should be. Here's a summary of the feedback:</h5>

                <h5 className="body-text"><span role="img" aria-label="hi">👨‍🎓</span> Members & Alumni pages did not need to be separated and could be under the same bucket.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">⬛</span> Black as a background is too overwhelming.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">📃</span> The purpose of the Landing page and About page is too similar</h5>

                {/* insert gif / video for iteration 1 */}

                <h2 className="section-header">User Testing</h2>

                <h3 className="section-sub-header">Tasks</h3>
                <ul>
                    <li><h5 className="body-text">To create a room for a team bonding social.</h5></li>
                    <li><h5 className="body-text">Success: Yes, No 5-point rating scale: Very difficult to Very easy</h5></li>
                    <li><h5 className="body-text">Do you have any feedback regarding the screens you interacted with to create the room? If there was anything you particularly liked, please let us know! Do you have any feedback about the interface? Was there anything confusing or unintuitive about the process?</h5></li>
                    <li><h5 className="body-text">Your task is to join a room for a team bonding social. While this prototype doesn't allow you to type in information in text boxes, you should be able to complete other necessary steps.</h5></li>
                </ul>

                <h3 className="section-sub-sub-header">Post Task Questions</h3>
                <ul>
                    <li><h5 className="body-text">Do you have any feedback regarding the screens you interacted with to create the room? If there was anything you particularly liked, please let us know! Do you have any feedback about the interface? Was there anything confusing or unintuitive about the process?</h5></li>
                    <li><h5 className="body-text">Do you have any feedback regarding the screens you interacted with to join a room?</h5></li>
                    <li><h5 className="body-text">What frustrated you most about this site?</h5></li>
                    <li><h5 className="body-text">If you had a magic wand, how would you improve this site?.</h5></li>
                    <li><h5 className="body-text">What did you like about the site?</h5></li>
                    <li><h5 className="body-text">How likely are you to recommend this site to a friend or colleague (0=Not at all likely, and 10=Very likely)?</h5></li>
                </ul>


                <h3 className="section-sub-header">Analysis</h3>
                <h3 className="section-sub-sub-header">Our Expectations</h3>
                
                <h5 className="body-text">We designed our interface to be as simple and intuitive as possible, and expected users to find it easy to use. We also used the startup’s name as a unifying them in our design choices when designing the protoype, and even tried to link the language we used to the unifying theme. To that end, we used the company’s logo as the home button. We expected users to connect the logo with returning to some sort of home page, since this tends to be a convention among web interfaces.</h5>

                <h3 className="section-sub-sub-header">User Feedback</h3>

                <li><h5 className="body-text">We received overwhelmingly positive feedback about our branding, design, and colour scheme, though some users noted that the design might be better suited for younger users</h5></li>
                <li><h5 className="body-text">All users reported that the interface was easy to use, with all of them giving a rating of “easy” or very easy” after each task</h5></li>
                <li><h5 className="body-text">Surprisingly, most users didn’t find the logo to be an intuitive “home button”. One user said this was because it didn’t immediately draw their eye, and that having some accompanying text would be helpful</h5></li>
                <li><h5 className="body-text">Some users also noted that having pop-ups or instructions of some sort would be helpful for first-time users, though others noted that the interface was quite intuitive and accessible even to people with limited technological experience</h5></li>
                <li><h5 className="body-text">A user also noted that being able to resize the video gallery would be helpful</h5></li>
                <li><h5 className="body-text">All users reported being very likely (8 or above) to recommend the website to a friend, with one user reporting a 10 on this scale</h5></li>

                <h3 className="section-sub-sub-header">Final Observations</h3>
                <li><h5 className="body-text">Users in general completed the tasks quickly, stopping only to talk or provide feedback on the interface</h5></li>
                <li><h5 className="body-text">We did have to disregard some tests because of the users not reading the tests’ instructions correctly and completing the wrong task. However, given that the majority of users were able to complete all tasks correctly, we believe this is due to the individual user’s disposition and not because of a flaw in the interface or test instructions.</h5></li>

                <h2 className="section-header">Reflection</h2>
                <h3 className="section-sub-header">What's better now?</h3>
                <ul>
                    <li><h5 className="body-text">Usability: Clearer Navigation flow</h5></li>
                    <li><h5 className="body-text">Hierarchy: Made color less pronounced and allowed for better user hierarchy</h5></li>
                    <li><h5 className="body-text">Efficiency: More affordances guiding user flow</h5></li>
                </ul>
            </div>
        </div>
        <img src={FinalFrame} className="banner-image"></img>
    </div>
  );
}

export default Campfire;
