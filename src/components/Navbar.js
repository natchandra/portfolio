import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import photo from '../img/girl_avatar.jpg';

class Navbar extends Component{
    state = {
        showMenu: false
    }
    handleClick = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuBranding = document.querySelector('.menu-branding');
        const navItem = document.querySelectorAll('.nav-item');
        //let showMenu = false;
    
        if(!this.state.showMenu){
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItem.forEach(item => {
                item.classList.add('show');
            })
            this.setState({
                showMenu: !this.state.showMenu
            })
            
        }else{
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItem.forEach(item => {
                item.classList.remove('show');
            })
            this.setState({
                showMenu:!this.state.showMenu
            })
        }
    }
    render(){
        return (
            <header>
                <div className="menu-btn" onClick={this.handleClick}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu" >
                    <div className="menu-branding"> 
                        <img src={photo} alt="Profile"className="potrait"/>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item">
                           <Link to="/" className="nav-link" onClick={this.handleClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link" onClick={this.handleClick}>About Me</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/Project" className="nav-link" onClick={this.handleClick}>My Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link" onClick={this.handleClick}>How To Reach Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Skills" className="nav-link" onClick={this.handleClick}>Skills</Link>
                        </li>
                    </ul>    
                </nav>
            </header>
        )
    }
    
}

export default Navbar;