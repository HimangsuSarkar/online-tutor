import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    return (

        <Navbar bg='info' expand="lg">
            <Navbar.Brand href="#home">Online Tutor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/productManage">Reviews</Link>
                    <Link to="/productManage">Blogs</Link>
                    <Link to="/productManage">Contact Us</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar >
        // <nav className="navbar navbar-expand-lg navbar-light">

        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link mr-5 text-white" href="/home">Home</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="/login">login</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="/dashboard">Dashboard</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="/home">Reviews</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="/home">Blogs</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="/home">Contact Us</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default HeaderNav;
