import React from 'react';
import './AboutUs.css';
import aboutHero from '../assets/about_v2/about_hero_v2.png';
import aboutValues from '../assets/about_v2/about_values_v2.png';

const AboutUs = () => {
    return (
        <div className="about-v2-page">
            {/* Hero Section */}
            <header className="about-v2-hero">
                <img src={aboutHero} alt="Sustainable Office Architecture" className="about-v2-hero-img" />
                <div className="about-v2-hero-overlay">
                    <div className="container hero-v2-content">
                        <span className="hero-v2-tag">Our Philosophy</span>
                        <h1 className="hero-v2-title">Orchestrating Excellence<br />In Every Space</h1>
                        <p className="hero-v2-subtitle">We don't just manage buildings. We curate environments where businesses thrive and people flourish.</p>
                    </div>
                </div>
            </header>

            {/* Vision & Mission Section */}
            <section className="about-v2-vision">
                <div className="container vision-grid">
                    <div className="vision-content">
                        <h2 className="section-v2-heading">Total Asset Management</h2>
                        <p className="section-v2-text">
                            At FreshDesk Solutions, we believe in a comprehensive approach to property management. We ensure that every aspect of your asset's lifecycle, from technical systems to the overall environment, is managed with precision and care.
                        </p>
                        <p className="section-v2-text">
                            Our unique "Asset-First" methodology combines rigorous operational discipline with strategic foresight, preserving capital value while enhancing the daily human experience within the space.
                        </p>
                    </div>
                    <div className="vision-visual">
                        <div className="visual-card">
                            <img src={aboutValues} alt="Innovation and Precision" className="vision-img" />
                            <div className="visual-card-badge">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - The Differentiators */}
            <section className="about-v2-why">
                <div className="container">
                    <div className="why-header">
                        <h2 className="section-v2-heading-light">Why Partner With FDS?</h2>
                        <p className="section-v2-subheading-light">The difference lies in our approach.</p>
                    </div>

                    <div className="differentiators-grid">
                        <div className="diff-card">
                            <div className="diff-number">01</div>
                            <h3 className="diff-title">Proactive vs. Reactive</h3>
                            <p className="diff-desc">
                                Most companies fix things when they break. We prevent them from breaking. Our predictive maintenance protocols identify risks and resolve them before they impact your operations, ensuring seamless continuity.
                            </p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-number">02</div>
                            <h3 className="diff-title">Radical Transparency</h3>
                            <p className="diff-desc">
                                We believe you should know what we know. Our digital-first reporting gives you real-time access to compliance audits, service statuses, and energy consumption data. No hidden costs, no surprises.
                            </p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-number">03</div>
                            <h3 className="diff-title">The Human Element</h3>
                            <p className="diff-desc">
                                Technology is our tool, but service is our craft. Our teams are trained not just in technical skills but in hospitality. We create a welcoming, professional atmosphere that reflects positively on your brand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Ribbon */}
            <section className="about-v2-values">
                <div className="container values-flex">
                    <div className="value-item">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </span>
                        <span className="value-name">Integrity</span>
                    </div>
                    <div className="values-divider"></div>
                    <div className="value-item">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                        </span>
                        <span className="value-name">Innovation</span>
                    </div>
                    <div className="values-divider"></div>
                    <div className="value-item">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20" /><path d="M12 22v-9" /><path d="M9 13a6 6 0 0 1 6-6h1" /><path d="M15 13a6 6 0 0 0-6-6H8" /></svg>
                        </span>
                        <span className="value-name">Sustainability</span>
                    </div>
                    <div className="values-divider"></div>
                    <div className="value-item">
                        <span className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </span>
                        <span className="value-name">Excellence</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
