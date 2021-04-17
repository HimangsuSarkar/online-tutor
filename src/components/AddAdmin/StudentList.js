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
            <h3>order page</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{
                    students.map(student =>
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.enrolls.subject}</td>
                            <td>{student.enrollPayData.status}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </section >
    );
};

export default StudentList;
