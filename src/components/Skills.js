import React, {Component} from 'react';


class Skills extends Component {
    
    state = {
        percentage:0
    }
    componentDidMount = () =>{
        let elem = document.querySelectorAll('.bar');
        for(let i = 0; i< elem.length;i++){
            let width = 0;
            let flag = 0;
            if(elem[i].style.width.length === 3){
                flag = parseInt(elem[i].style.width.substring(0,2));
            } else{
                flag = parseInt(elem[i].style.width.substring(0,3));
            }
            console.log(flag);
            let id = setInterval(()=> {
                if(width >=flag){
                        clearInterval(id);
                }else{
                        width++;
                        elem[i].style.width = width + '%';
                        elem[i].innerHTML = width*1 +'%';
                }
            }, 20)
        }           
    }
    render(){
        return(
            <div>
                <main className="about">
                    <h1 className="lg-heading">My  <span className="text-secondary">Skills</span></h1>
                    <h2 className="sm-heading">These are the language that I speak and code</h2>
                    <div className="skill-info">
                        <div className="front skill-box">
                            <h1 style={{textAlign: "center"}}>Front End</h1>
                            <h2 className="text-third"><i className="fab fa-html5"></i> HTML5</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'90%'}}></div>
                            </div>
                            <h2 className="text-third"><i className="fab fa-css3-alt"></i> CSS3</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'80%'}}></div>
                            </div>
                            <h2 className="text-third"><i className="fab fa-react"></i> React</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'75%'}}></div>
                            </div>
                            <h2 className="text-third"><i className="fab fa-js-square"></i> JavaScript</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'80%'}}></div>
                            </div>
                        </div>
                        <div className="back skill-box">
                            <h1 style={{textAlign: "center"}}>Back End</h1>
                            <h2 className="text-third"><i className="fab fa-node"></i> Node.Js</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'50%'}}></div>
                            </div>
                            <h2 className="text-third"><i className="fas fa-database"></i> MySql</h2>
                            <div className="progress">
                                <div className="bar" style={{width:'70%'}}></div>
                            </div>
                        </div>
                        <div className="framework">
                            <h1 style={{textAlign: "center"}}>Frameworks</h1>
                            <div className="skill-box" style={{textAlign: "center"}}>
                                <h2 className="text-third"> 
                                <i class="devicon-jquery-plain" style={{fontSize:'3rem'}}></i>JQuery
                                </h2>
                                <h2 className="text-third"> <i class="devicon-bootstrap-plain" style={{fontSize: '2.5rem'}}></i> Bootstrap</h2>
                            </div>        
                            
                        </div>

                        <div className="programming">
                        <h1 style={{textAlign: "center"}}>Programmings</h1>
                            <div className="skill-box" style={{textAlign: "center"}}>
                                <h2 className="text-third"> <i className="devicon-java-plain" style={{fontSize: '2.5rem'}}></i> Java</h2>
                                <h2 className="text-third"> <i className="devicon-c-plain" style={{fontSize: '2.5rem'}}></i> C</h2>
                            </div>        
                        </div>

                        <div className="tools">
                        <h1 style={{textAlign: "center"}}>Tools</h1>
                            <div className="skill-box" style={{textAlign: "center"}}>
                                <h2 className="text-third"><i class="devicon-git-plain" style={{fontSize: '2.5rem'}}> </i>Git</h2>
                                <h2 className="text-third"><i class="devicon-github-plain" style={{fontSize: '2.5rem'}}></i> Github</h2>
                                <h2 className="text-third"><i class="devicon-visualstudio-plain"style={{fontSize: '2.5rem'}}></i> Visual Studio</h2>
                            </div>
                        </div>

                        {/*<div className="lang">
                            <div className="box">Languages that I Speak</div>
                            <h3 className="text-third"> Indonesian - Mother Tongue</h3>
                            <div className="progress">
                                <div className="bar" style={{width:'100%'}}></div>
                            </div>
                            <h3 className="text-third"> English</h3>
                            <div className="progress">
                                <div className="bar" style={{width:'80%'}}></div>
                            </div>
                            <h3 className="text-third"> German</h3>
                            <div className="progress">
                                <div className="bar" style={{width:'40%'}}>60</div>
                            </div>
                        </div>*/}
                    </div>
                </main>

            <footer id="main-footer">
                Copyright &copy; 2019
            </footer>
        </div>
        )
    }
    
}

export default Skills;