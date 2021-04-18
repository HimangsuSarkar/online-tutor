import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const EnrollList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [enrollList, setEnrollList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/enroll_list?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => setEnrollList(data))

    }, [enrollList, loggedInUser])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1> Students Enroll List</h1>
                <Container>
                    <Row>
                        {
                            enrollList.map(enList => <Col xs={12} md={4}> < Card style={{ width: '18rem' }} className="mb-4">
                                <Card.Header>Email: {enList?.enrollPayData.email}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Student Name: {enList?.enrollPayData.name}</Card.Title>
                                    <Card.Text>
                                        <p>Subject:{enList?.enrolls.subject}</p>
                                        <p>Course Duration: {enList?.enrolls.duration}</p>
                                        <p>Course fee: {enList?.enrolls.price}</p>
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
