import { faCalendar, faClipboardList, faCommentAlt, faCreditCard, faGripHorizontal, faHome, faListAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser])


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
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/enroll/:key" className="text-white">
                        <FontAwesomeIcon icon={faCreditCard} /> <span>Enroll</span>
                    </Link>
                </li>
                <li>
                    <Link to="/enroll_list" className="text-white" >
                        <FontAwesomeIcon icon={faClipboardList} /> <span>Enroll List</span>
                    </Link>
                </li>
                {isAdmin &&
                    <div>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/students" className="text-white" >
                                <FontAwesomeIcon icon={faListAlt} /> <span>Students List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/student_enroll" className="text-white" >
                                <FontAwesomeIcon icon={faClipboardList} /> <span>Admin Enroll List </span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>

                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div >
    );
};

export default Sidebar;
