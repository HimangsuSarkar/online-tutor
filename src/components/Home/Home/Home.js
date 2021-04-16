import React from 'react';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;
