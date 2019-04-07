import React from 'react'

const Home = () => {
    return (
    <main className="home" >
        <h1 className="lg-heading">Natalia <span className="text-secondary">Chandra</span></h1>
        <h2 className="sm-heading">Web Front End Developer, UX Designer</h2>
        <div className="icons">
           <a href="https://www.xing.com/profile/Natalia_Chandra" target="_blank"><i className="fab fa-xing fa-2x"></i> </a>
           <a href="https://www.facebook.com/natalia.chandra" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
           <a href="https://www.linkedin.com/in/natalia-chandra-a1814591" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
           <a href="https://github.com/natchandra" target="_blank"><i className="fab fa-github fa-2x"></i></a>
        </div>
    </main>
    )
}

export default Home;