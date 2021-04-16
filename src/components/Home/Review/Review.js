import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ReviewDetail from './ReviewDetail';
import './Review.css';
const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <section className="reviews my-5">
            <div>
                <h1 className="text-center">Our Valuable Students And Guardian Review</h1>
                <Container className="pt-5">
                    <Row>
                        {
                            reviews.map(review => <Col xs={12} md={4}><ReviewDetail review={review} key={review.name}></ReviewDetail></Col>)
                        }
                    </Row>
                </Container >
            </div >
        </section>
    );
};

export default Review;
