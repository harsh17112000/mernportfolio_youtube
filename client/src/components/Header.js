import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px"
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <div className="hamburgur">
                        <i class="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{cursor:"pointer"}}></i>
                        <h2 className='mt-2 h2_right' style={{ color: "#6C63FF" }}>
                            <NavLink to="/" style={{ textDecoration: "none" }}>Harsh Pathak</NavLink>
                        </h2>
                    </div>

                    <Nav className="nav">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>
                        <div>
                            <Button variant="danger">YouTube</Button>
                        </div>

                    </Nav>
                </Container>

                        {/* side baar */}
                        <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='side_nav' onClick={() => setShow(false)}>
                            <NavLink to="/" className="text-decoration-none  mb-2" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none  mb-2" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none  mb-2" style={common}>Project</NavLink>
                            <NavLink to="/contact" className="text-decoration-none  mb-2" style={common}>Contact</NavLink>
                            <div>
                                <Button variant="danger" style={{ letterSpacing: ".5px", marginLeft: -15 }}><a href="https://www.youtube.com/c/HarshPathakNV" target="_blank" className="text-decoration-none text-light">Youtube</a></Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header