import React from 'react';
import Clock from './Clock';


class Header extends React.Component {
    constructor() {
        super();
        this.state = { 
            showMenu: false,
            navBackground: false
        }
    }

    componentDidMount() { 
        window.addEventListener('scroll', this.scrollNavbar)

    }

    componentWillMount() { 
        window.removeEventListener('scroll', this.scrollNavbar)
        
    }

    scrollNavbar = () => {
        /* console.log(window.scrollY); */
        const backgroundcolor = window.scrollY < 120 ? false : true ;
        this.setState({ navBackground: backgroundcolor });
    }

    toggleMenu = () => {
        this.setState({
        showMenu: !this.state.showMenu
        })
    }


    render() {
        const menuActive = this.state.showMenu ? 'active' : 'close';
        const burgerActive = this.state.showMenu ? 'active' : '';
        const headerActive = this.state.navBackground ? 'menuShowing' : 'menuHidden';

        return (
            
            <section id="header">
                <div className="header container"> 
                <div className={`${headerActive}`}></div>
                <div className="nav-bar">
                    
                    <div>
                        <a href="#hero" className="logo"> </a>
                    </div>

                    <div className="clock1">
                        <Clock />
                    </div>

                    <div className="nav-list">
                    <div className={`header nav-bar nav-list hamburger ${burgerActive}`} onClick={this.toggleMenu}>
                        <div className="bar">
                        </div>
                    </div>
                    <ul className={`header nav-bar nav-list ${menuActive}`} onClick={this.toggleMenu}> 
                        <li><a href="#hero" data-after="Home">Home</a></li>
                        <li><a href="#services" data-after="Service">Services</a></li>
                        <li><a href="#skills" data-after="Skills">Skills</a></li>
                        <li><a href="#projects" data-after="Projects">Projects</a></li>
                        <li><a href="#about" data-after="About">About</a></li>
                        <li><a href="#contact" data-after="Contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
        
export default Header;