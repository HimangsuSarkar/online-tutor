import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
const Footer = () => {
    const know_us = [
        { name: "About Us", link: "/about" },
        { name: "Help Center", link: "/help" },
        { name: "Blog", link: "/blog" },
        { name: "Accessibility", link: "/accessibility" },
        { name: "Careers", link: "/careers" },
        { name: "Honor Code", link: "/honorCode" },
    ]
    const ourAddress = [
        { name: "Jiangsu- 12783 Wujin", link: "//google.com/map" },
        { name: "China", link: "//google.com/map" },

    ]
    const Learn_with_us = [
        { name: "Become a Tutor", link: "/becomeTutor" },
        { name: "Science", link: "/science" },
        { name: "Computer Science", link: "/computerScience" },
        { name: "Test Prep Course", link: "/testPrep" },
        { name: "Engineering", link: "/engineering" },
        { name: "Profession", link: "/profession" },
        { name: "Foreign Language", link: "/foreignLanguage" }
    ]
    const services = [
        { name: "Writing Tutors", link: "/writingTutor" },
        { name: "English Tutors", link: "/englishTutor" },
        { name: "Computer Science", link: "/computerScience" },
        { name: "Accounting Tutors", link: "/accountingTutor" },
        { name: "Finance Tutors", link: "/financeTutor" },
        { name: "Basic Math Tutors", link: "/mathTutor" },
        { name: "Chemistry Tutors", link: "/chemistryTutor" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Get To Know Us"} menuItems={know_us} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Learn With Us" menuItems={Learn_with_us} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8615695203280</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
