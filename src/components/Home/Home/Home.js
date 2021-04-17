import React from 'react';
import EnrollList from '../../Enroll/EnrollList';
import Services from '../../Services/Services';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services> </Services>
            <Review></Review>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;
