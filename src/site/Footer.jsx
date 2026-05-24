import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerLogo from '../assets/fds_logo_footer.png';

const Footer = () => {
    return (
        <footer className="footer-section" id="contact-us">
            <div className="container footer-wrapper">

                <div className="footer-content-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-col brand-col">
                        <div className="brand-header">
                            <img src={footerLogo} alt="FDS Logo" className="footer-logo" />
                            <div className="brand-text">
                                <span className="brand-main">FreshDesk</span>
                                <span className="brand-sub highlight">Solutions</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="footer-col">
                        <h3 className="footer-col-title">Company</h3>
                        <ul className="footer-links-list">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/owners">Our Owners</Link></li>
                            <li><Link to="/clients">Our Clients</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Projects */}
                    <div className="footer-col">
                        <h3 className="footer-col-title">Projects</h3>
                        <ul className="footer-links-list">
                            <li><a href="/projects/commercial">Commercial</a></li>
                            <li><a href="/projects/residential">Residential</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="footer-col contact-col">
                        <h3 className="footer-col-title">Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <span className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <span>+91 73589 75475</span>
                            </li>
                            <li>
                                <span className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                </span>
                                <span>freshdesk.in@gmail.com</span>
                            </li>
                            <li>
                                <span className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </span>
                                <span>F-1, Anu Arches, Mag Enclave, Srinivasa Nagar Extn, Selaiyur, Chennai - 600 073</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} FreshDesk Solutions. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
