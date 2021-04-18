import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const StudentEnroll = () => {
    const [loggedInUser] = useContext(UserContext);
    const [studentList, SetStudentList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => SetStudentList(data))

    }, [studentList, loggedInUser])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1> Students Enroll List</h1>

                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Status</th>
                            {/* <th>Enroll Time</th> */}
                        </tr>
                    </thead>
                    <tbody>{
                        studentList.map(students =>
                            <tr>
                                <td>{students?.enrollPayData.name}</td>
                                <td>{students?.enrollPayData.email}</td>
                                <td>{students?.enrolls.subject}</td>
                                <td>{students?.enrollPayData.address}</td>
                                <td>{students?.enrollPayData.phone}</td>
                                <td>{students?.enrollPayData.status}</td>
                                {/* <td>{students?.enrollTime}</td> */}
                            </tr>
                        )
                    }
                    </tbody>
                </Table>

            </div >
        </section >
    );
};

export default StudentEnroll;

