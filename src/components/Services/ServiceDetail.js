import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const ServiceDetail = (props) => {
    const { key, name, profession, subject, details, price, duration, imageURL } = props.service;
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory()
    const handleEnroll = (key) => {
        history.push(`/enroll/${key}`);
    }
    return (
        <section className="container-fluid row">
            <div>
                <Card style={{ width: '18rem' }} className="mb-4">
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{name} || {profession}</Card.Title>
                        <p>Subject:{subject} || Price: {price} || Class Duration:{duration}</p>
                        <Card.Text>{details}</Card.Text>
                        <Button variant="primary" onClick={() => handleEnroll(key, loggedInUser)}>Buy Course</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default ServiceDetail;
