import React from 'react'

const Contact = () => {
    return (
    <div>
        <main className="about">
            <h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
            <h2 className="sm-heading">This is how you can reach Me</h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email: </span> nchandra.natalia@gmail.com
                </div>
                <div>
                    <span className="text-secondary">Phone: </span> (123) 123456
                </div>
                    
                <div>
                    <span className="text-secondary">Address: </span> Testing Address
                </div>
            </div>
        </main>

        <footer id="main-footer">
            Copyright &copy; 2019
        </footer>
    </div>
    
    )
}

export default Contact;