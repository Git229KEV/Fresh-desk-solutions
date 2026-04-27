import React, { useEffect } from 'react';
import './LegalPage.css'; // Import new modern styles

const TermsOfService = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page-wrapper">
            {/* Header Section */}
            <header className="legal-header-section">
                <div className="container">
                    <h1 className="legal-title">Terms of Service</h1>
                    <p className="legal-subtitle">Agreement and Conditions of Use</p>
                </div>
            </header>

            {/* Content Card */}
            <div className="legal-content-card">
                <span className="last-updated">Last Updated: {new Date().toLocaleDateString()}</span>

                <div className="legal-section">
                    <p className="legal-text">
                        Welcome to FreshDesk Solutions. By accessing our website or engaging our services, you agree to be bound by complying with these Terms of Service.
                        Please read them carefully ensuring understanding and acceptance.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">1. Services</h2>
                    <p className="legal-text">
                        FreshDesk Solutions provides facility management, property management, project execution, and related services ("Services").
                        The specific scope of work for any engagement will be detailed in a separate contract or service agreement.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">2. Use of Website</h2>
                    <p className="legal-text">
                        You agree to use our website only for lawful purposes. You represent that any information you provide to us is accurate and complete.
                        We reserve the right to modify or discontinue any aspect of our website at any time.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">3. Intellectual Property</h2>
                    <p className="legal-text">
                        All content on this website, including text, logos, images (excluding client logos), and graphics, is the property of FreshDesk Solutions or its content suppliers and is protected by intellectual property laws.
                        You may not reproduce or distribute any content without our prior written permission.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">4. Limitation of Liability</h2>
                    <p className="legal-text">
                        To the fullest extent permitted by law, FreshDesk Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">5. Indemnification</h2>
                    <p className="legal-text">
                        You agree to indemnify and hold harmless FreshDesk Solutions and its employees from any claims, damages, liabilities, and expenses arising out of your violation of these Terms.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">6. Governing Law</h2>
                    <p className="legal-text">
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai, India.
                    </p>
                </div>

                <div className="legal-section">
                    <h2 className="legal-section-title">7. Changes to Terms</h2>
                    <p className="legal-text">
                        We reserve the right to update these Terms of Service at any time. Your continued use of our services constitutes acceptance of the new Terms.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
