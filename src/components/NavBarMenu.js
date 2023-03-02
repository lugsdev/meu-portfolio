import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"




function NavBarMenu() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, seScrolled] = useState (false)

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50){
                seScrolled(true)
            } else{
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Inicio" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src={github} alt=""/></a>
                <a href="#"><img src={linkedin} alt=""/></a>
                <a href="#"><img src={instagram} alt=""/></a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}><span>Let`s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;