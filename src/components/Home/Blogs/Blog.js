import React from 'react';
import './Blog.css';
import tutor1 from '../../../image/tutor_5.jpg'
import tutor2 from '../../../image/review_3.jpg'
import tutor3 from '../../../image/tutor_4.jpg'
import BlogPost from './BlogPost';
const blogData = [
    {
        title: 'On-demand tutoring',
        description: "Connect with an online tutor in less than 30 seconds, 24/7. It doesn’t matter if you want help with a single problem or you need a 3-hour lesson.",
        author: 'Mr.Xiayi',
        authorImg: tutor1,
        date: '2 January 2021'
    },
    {
        title: 'Learn from the best tutors',
        description: 'Highly qualified tutors from the best universities across the globe ready to help.An acceptance rate  of 4% means all our tutors are thoroughly screened.  ',
        author: 'Mr.Zhang',
        authorImg: tutor2,
        date: '23 March 2021'
    },
    {
        title: 'All the tools you need',
        description: 'Our lesson space features a virtual whiteboard, text editor, audio/ video chat, screensharing and so much more.All lessons are archived for your convenience. ',
        author: 'Mr Xu',
        authorImg: tutor3,
        date: '13 April 2021'
    },
]
const Blog = () => {

    return (
        <section className="blogs my-5">
            <div className="container pb-5">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase ">Our Blog</h5>
                    <h1 >From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Blog;
