import React from 'react';
import './InformativeSection.css';
import ScrollReveal from './ScrollReveal';

const InformativeSection = () => {
    return (
        <section className="info-section">
            <div className="container">
                <ScrollReveal className="info-header">
                    <h3 className="section-heading">The FreshDesk Advantage</h3>
                    <p className="section-subtext">Elevating property management through intelligence and integrity.</p>
                </ScrollReveal>

                <div className="info-grid">
                    <ScrollReveal className="info-item">
                        <span className="info-number">01</span>
                        <h4>Legacy of Excellence</h4>
                        <p>Decades of refined expertise in managing premium edifices, ensuring your assets appreciate in value and stature.</p>
                    </ScrollReveal>
                    <ScrollReveal className="info-item">
                        <span className="info-number">02</span>
                        <h4>Intelligent Infrastructure</h4>
                        <p> Leveraging data-driven insights and cutting-edge technology to optimize operational efficiency and tenant satisfaction.</p>
                    </ScrollReveal>
                    <ScrollReveal className="info-item">
                        <span className="info-number">03</span>
                        <h4>Bespoke Strategies</h4>
                        <p>Curating customized management solutions that align perfectly with your unique business objectives and property requirements.</p>
                    </ScrollReveal>
                </div>

                <ScrollReveal className="values-wrapper">
                    <div className="values-content">
                        <h3 className="section-heading small-heading">Our Ethos</h3>
                        <div className="values-list">
                            <div className="value-point">
                                <h5>Reliability</h5>
                                <p>Unwavering commitment to service excellence.</p>
                            </div>
                            <div className="value-point">
                                <h5>Innovation</h5>
                                <p>Pioneering the future of property care.</p>
                            </div>
                            <div className="value-point">
                                <h5>Stewardship</h5>
                                <p>Responsible management for a sustainable future.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default InformativeSection;
