import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const StudentList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/enroll_list')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [students, loggedInUser])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3>Student List</h3>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Enroll Time</th>
                        </tr>
                    </thead>
                    <tbody>{
                        students.map(student =>
                            <tr>
                                <td>{student?.enrollPayData.name}</td>
                                <td>{student?.enrollPayData.email}</td>
                                <td>{student?.enrolls.subject}</td>
                                <td>{student?.enrollTime}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </section >
    );
};

export default StudentList;
