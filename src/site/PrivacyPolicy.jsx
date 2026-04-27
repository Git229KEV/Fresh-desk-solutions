import React, { useEffect } from 'react';
import './LegalPage.css'; // Import new modern styles

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page-wrapper">
            {/* Header Section */}
            <header className="legal-header-section">
                <div className="container">
                    <h1 className="legal-title">Privacy Policy</h1>
                    <p className="legal-subtitle">Transparency and Trust at FreshDesk Solutions</p>
                </div>
            </header>

            {/* Content Card */}
            <div className="legal-content-card">
                <span className="last-updated">Last Updated: {new Date().toLocaleDateString()}</span>

                <div className="legal-section">
                    <p className="legal-text">
                        At FreshDesk Solutions ("FDS", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data.
                        This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our facility and property management services.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">1. Information We Collect</h2>
                    <p className="legal-text">We may collect the following types of information:</p>
                    <ul className="legal-list">
                        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company name when you request a quote or contact us.</li>
                        <li><strong>Property Data:</strong> Details about your facilities or properties relevant to our service delivery.</li>
                        <li><strong>Usage Data:</strong> Information on how you access and use our website, including IP address, browser type, and pages visited.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">2. How We Use Your Information</h2>
                    <p className="legal-text">We utilize your data for the following purposes:</p>
                    <ul className="legal-list">
                        <li>To provide and manage our facility and property management services.</li>
                        <li>To process quotes, potential contracts, and client communications.</li>
                        <li>To allow our "One-stop for Everything" service coordinators to better assist you.</li>
                        <li>To improve our website functionality and user experience.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">3. Data Protection</h2>
                    <p className="legal-text">
                        We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                        This includes secure servers, firewalls, and limited personnel access to sensitive information.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">4. Third-Party Sharing</h2>
                    <p className="legal-text">
                        We do not sell or rent your personal information to third parties. We may share data with trusted service providers who assist us in our operations (e.g., IT support, auditing partners) under strict confidentiality agreements.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">5. Contact Us</h2>
                    <div className="contact-box">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <br /><br />
                            <strong>Email:</strong> freshdesk.in@gmail.com <br />
                            <strong>Phone:</strong> +91 73589 75475
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
