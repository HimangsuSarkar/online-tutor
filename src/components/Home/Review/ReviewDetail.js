import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewDetail = (props) => {
    const { key, name, address, quote, imageURL } = props.review;
    return (
        <section className="container-fluid row">
            <div>
                <Card style={{ width: '18rem' }} className="mb-4">
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{name} || {address}</Card.Title>
                        <Card.Text>{quote}</Card.Text>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalf} />
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default ReviewDetail;