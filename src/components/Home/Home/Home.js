import React from 'react';
import ServiceDetail from '../../Services/ServiceDetail';
import Services from '../../Services/Services';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services> </Services>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;
