import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className="text-center">Our Valuable Tutor And Courses</h1>
            <Container className="pt-5">
                <Row>
                    {
                        services.map(service => <Col xs={12} md={4}>< ServiceDetail service={service} key={service.name}></ServiceDetail></Col>)
                    }
                </Row>
            </Container >

        </div >
    );
};

export default Services;
