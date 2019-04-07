import React from 'react'
import photo from '../img/girl_avatar.jpg'
import Jobs from './Jobs';

const About = () => {
    return (
        <div>
            <main className="about">
                <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
                <h2 className="sm-heading">Let Me Tell You about Me</h2>
                <div className="about-info">
                    <img src={photo} alt="Natalia Chandra" className="bio-image"/>
                    
                    <div className="bio">
                        <p><i className="fas fa-envelope"></i> nchandra.natalia@gmail.com</p>
                        <p><i className="fas fa-phone-square"></i> (123) 4567890</p>
                        <p><i className="fas fa-map-marker-alt"></i> Adalbertsteinweg 107, 52070 Aachen</p>
                        <p>My Name is Natalia Chandra, I'm a Front-End Web Developer. I love to create and build websites which are mobile-first ready, fully responsive and user-friendly. I built my portfolio site from grounds up by using all the skills that I know. I'm always motivated and have desire to learn more.</p>
                        <p>While I'm not sitting in front of my computer, debugging some code or trying to position elements right, I love to hang out with my friends, watch movies, listen to music, eating, etc</p>
                    </div>
                    <div className="work">
                        <h3 className="text-secondary">Work Experiences <i className="fas fa-briefcase"></i></h3>
                    </div>
                    <Jobs cssName="job - job-1"
                        position="Coordinator - Computer Science Department, Bina Nusantara University"
                        year="October 2012 - April 2019"
                        jobDesc={<ul>
                                <li>Responsible for gathering and evaluating user requirements</li>
                                <li>Responsible for designing UX Wireframes and translating it into responsive and interactive features</li>
                                <li>Responsible for developing and enchancing functionalities of front-end application projects</li>
                                <li>Research and development related to current technologies</li>
                            </ul>}
                    />
                
                    <Jobs cssName="job job-2" 
                        position="Internship - Institute of Software Construction, RWTH Aachen University, Germany"
                        year="July 2011 - December 2011"
                        jobDesc={<ul><li>Developing a website using J2EE and EJB Server-side with SQL as a Database.</li>
                        <li>Design Components in website using JSF(Java Server Faces). </li></ul>}
                    />
                    <Jobs cssName="job job-3" 
                        position="Software Developer - Finance Directorate, Bina Nusantara University"
                        year="March 2010 - June 2010"
                        jobDesc={<ul>
                            <li>Develop and extend functionalities of a a desktop application for supporting the finance busines processes.</li>
                            <li>Develop database management system in Visual basic and SQL.</li>
                            <li>Excel data reports creation in Visual Basic.</li>
                            </ul>}
                    />
                    <Jobs cssName="job job-4" 
                        position="Subject Coordinator - Software Laboratory Center, Bina Nusantara University"
                        year="March 2010 - June 2010"
                        jobDesc={<ul>
                            <li>Responsible for teaching activity.</li>
                            <li>Responsible for laboratory material’s qualities including exam materials and examination criteria.</li>
                            <li>Coordinate teaching assistant for standarization on marking exam, project and other laboratory assignments.</li>
                            <li>Responsible for assisting creation and improvement of laboratory material.</li>
                            </ul>}
                    />
                    <Jobs cssName="job job-5" 
                        position="Teaching Assistant - Software Laboratory Center, Bina Nusantara University"
                        year="March 2010 - June 2010"
                        jobDesc={<ul>
                            <li>Teach and assist university students in Lab sessions such as C, Java, SQL Database.</li>
                            <li>Design laboratory materials and exam problems for university students.</li>
                            <li>Provide training for other assistants.</li>
                            </ul>}
                    />
                </div>

                <div className="edu-info">
                    <div className="edu">
                        <h3 className="text-secondary">Education <i className="fas fa-graduation-cap"></i></h3>
                    </div>
                    <div className="job edu-1">
                        <h3>Bachelor Of Science in Information System (B.Sc)</h3>
                        <h3>2006 - 2010</h3>
                        <h5>Bina Nusantara University, Indonesia</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati, molestias perferendis fuga incidunt architecto.</p>
                    </div>
                    <div className="job edu-2">
                        <h3>Master Of Science in Software System Engineering (M.Sc)</h3>
                        <h3>2010 - 2012</h3>
                        <h5>RWTH Aachen Univerity, Germany and King Mongkut's University of Technology North Bangkok, Thailand</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati, molestias perferendis fuga incidunt architecto.</p>
                    </div> 
                </div>
              
            </main>
            
            <footer id="main-footer">
                Copyright &copy; 2019
            </footer>
        </div>
    )
}

export default About;