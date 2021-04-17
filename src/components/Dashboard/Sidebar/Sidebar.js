import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/enroll/:key" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Enroll</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="enroll_list" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Enroll List</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
