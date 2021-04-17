import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const EnrollList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [enrollList, setEnrollList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/enroll_list')
            .then(res => res.json())
            .then(data => setEnrollList(data))

    }, [enrollList, loggedInUser])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>All Students Enroll List</h1>
                <Container>
                    <Row>
                        {
                            enrollList.map(enList => <Col xs={12} md={4}> < Card style={{ width: '18rem' }} className="mb-4">
                                <Card.Header>Student Name: {enList?.enrollPayData.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Subject: {enList?.enrolls.subject}</Card.Title>
                                    <Card.Text>
                                        <p>Status:{enList?.enrollPayData.status}</p>
                                        <p>Course Duration: {enList?.enrolls.duration}</p>
                                        <p>Enroll Time:{enList?.enrollTime}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            )
                        }
                    </Row>
                </Container>
            </div >
        </section >
    );
};

export default EnrollList;
