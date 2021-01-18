import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default function Body() {
    
    
    function Home() {
        return (
            <div class="home">
                <h2>Home</h2>
                <h3>Hello, I am Jonathan Humphrey</h3>
                <p className='homeAbout'>   I am a Web Developer/Computer Science Major at Texas State University. I have been learning javascript and React for a couple of months at this point and progressing well! I really enjoy learning new things and challenging myself.</p>
                <img className='personalImg'src={'images/githubPFP.jpg'} alt='Jonathan'/>
            </div>
        )
    }
    function About() {
        return (
            <div className='about'>
                <h2>About</h2>
                <div>
                    <ul className='aboutList'>Personal Info
                        <li>Avid Tech Enthusiast</li>
                        <li>Loves Video Games</li>
                        <li>Loves Problem Solving</li>
                        <li>Loves To Learn and Be Challenged</li>
                    </ul> 
                </div>
                <div>
                    <ul className='aboutList'>Skills
                        <li>Javascript</li>
                        <li>React</li>
                        <li>c++</li>
                    </ul>
                </div>
            </div>
        )
    }
    function Projects() {
        return (
            <div>
                <h2>Projects</h2>
                <p>Listed Here are the projects completed by Jonathan</p>
                <div className="link-holder">
                    <div className='row'>
                        <div className='links'>
                            <h3>Digital Clock</h3>
                            <img className='clockImg' src={'images/image1.jpg'} alt=""/><br/>
                            <sub>Adaptive Clock that highlights the current day, accurate to the second</sub><br/>
                            <a href="https://codepen.io/jonathanhumphrey/full/dypMwvm" target='blank'>Link to Project</a>
                        </div>
                        <div className='links'>
                            <h3>Weather App</h3>
                            <img className ='weatherImg' src={'images/image2.jpg'} alt=""/><br/>
                            <sub>Weather app that gets local positional data from APIs</sub><br/>
                            <a href="https://codepen.io/jonathanhumphrey/full/qBamXpz" target='blank'>Link to Project</a>
                        </div>
                        <div className='links'>
                            <h3>IQ test</h3>
                            <img src={'images/image3.jpg'} alt=""/><br/>
                            <sub>Silly IQ test used to learn about React</sub><br/>
                            <a href="https://frosty-brattain-fcd24c.netlify.app/" target='blank'>Link to Project</a><br/>
                            <a href="https://github.com/JonathanHumphrey/IQ-Test" target='blank'>Code</a>
                        </div>
                        <div className='links'>
                            <h3>Calculator</h3>
                            <img src={'images/image0.jpg'} alt=""/><br/>
                            <sub>A Calculator built using React</sub><br/>
                            <a href="https://eloquent-lewin-5e0d44.netlify.app/" target='blank'>Link to Project</a><br/>
                            <a href="https://github.com/JonathanHumphrey/react-calculator" target='blank'>Code</a>
                        </div>
                        <div className='links'>
                            <h3>Modern Site</h3>
                            <img src={'images/image4.jpg'} alt="" /><br />
                            <sub>A food website built to test my UI design</sub><br/>
                            <a href="https://blissful-poincare-9bb1e4.netlify.app/" target='blank'>Link to Project</a><br/>
                            <a href="https://github.com/JonathanHumphrey/modern-site" target='blank'>Code</a>
                        </div>
                        <div className='links'>
                            <h3>React Weather App</h3>
                            <img src={'images/image5.jpg'} alt="" /><br />
                            <sub>A food website built to test my UI design</sub><br/>
                            <a href="https://silly-bardeen-a515ba.netlify.app/" target='blank'>Link to Project</a><br/>
                            <a href="https://github.com/JonathanHumphrey/react-weather-app" target='blank'>Code</a>
                        </div>
                        <div className='links'>
                            <h3>Store/Shopping Cart</h3>
                            <img src={'images/image6.jpg'} alt="" /><br />
                            <sub>A food website built to test my UI design</sub><br/>
                            <a href="https://happy-lewin-3730e0.netlify.app/" target='blank'>Link to Project</a><br/>
                            <a href="https://github.com/JonathanHumphrey/shopping" target='blank'>Code</a>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
    return (
        <div className='body'>
            
            <div>
                <Router>
                    <div className='linksForNav'>
                        <div>
                            <Link className='link' exact='true' to='/'>Home</Link> <br/>
                            <Link className='link' to='/About'>About</Link><br/>
                            <Link className='link' to='/Projects'>Projects</Link>
                        </div>
                        <div>
                            <a href="https://github.com/JonathanHumphrey" target="blank"><img className='githubLogo'src={'images/githubLOGO.png'} alt='github logo that leads to github page'/></a>
                        </div>
                    </div>
                    <Switch>
                        <Route path='/About'>
                            <div>
                                <About />
                            </div>
                        </Route>
                        <Route path='/Projects'>
                            <div>
                                <Projects />
                            </div>
                        </Route>
                        <Route path='/'>
                            <div>
                                <Home />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
            
        </div>
    )
}
