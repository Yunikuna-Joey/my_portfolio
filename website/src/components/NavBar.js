import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/github.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        // scroll effect to trigger only when we past 50 Y elements
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else { 
                setScrolled(false);
            }
        }
        // this will listen for the scrolling event 
        window.addEventListener("scroll", onScroll);

        // we have to remove the event listener once the element is removed from the DOM
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='Brand Here'></img>    
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"> Place an icon here maybe </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick={() => updateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onclick={() => updateActiveLink('skils')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onclick={() => updateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="icon"></img></a>
                    <a href="#"><img src={navIcon2} alt="icon"></img></a>
                </div>
                <button className="contact-btn" onClick={() => console.log('Contact button pressed')}><span>Connect with me! </span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}