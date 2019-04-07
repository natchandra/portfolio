import React from 'react';
import project from '../img/project.jpg';

const Project = () => {
    return (
        <div>
            <main className="work">
                <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
                <h2 className="sm-heading">Check out some of my project</h2>
                <div className="projects">
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" width="100%"/>
                        </a>
                        <a href="" className="btn-light">
                            <i className="fas fa-eye"> Project</i>
                        </a>
                        <a href="" className="btn-dark">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" width="100%"/>
                        </a>
                        <a href="" className="btn-light">
                            <i className="fas fa-eye"> Project</i>
                        </a>
                        <a href="" className="btn-dark">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" width="100%"/>
                        </a>
                        <a href="" className="btn-light">
                            <i className="fas fa-eye"> Project</i>
                        </a>
                        <a href="" className="btn-dark">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" width="100%"/>
                        </a>
                        <a href="" className="btn-light">
                            <i className="fas fa-eye"> Project</i>
                        </a>
                        <a href="" className="btn-dark">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" width="100%"/>
                        </a>
                        <a href="" className="btn-light">
                            <i className="fas fa-eye"> Project</i>
                        </a>
                        <a href="" className="btn-dark">
                            <i className="fab fa-github"> Github</i>
                        </a>
                    </div>
                </div>
            </main>

            <footer id="main-footer">
                Copyright &copy; 2019
            </footer>
        </div>
    )
}

export default Project;