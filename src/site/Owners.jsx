import React from 'react';
import { Building2, ShieldCheck, Trophy } from 'lucide-react';
import './Owners.css';

const Owners = () => {
    const ownersData = [
        {
            name: "Surya Jeyaraman",
            role: "Co-Founder & Managing Director"
        },
        {
            name: "Subramanian",
            role: "Co-Founder & Director of Operations"
        }
    ];

    return (
        <div className="owners-page">
            {/* Hero Section */}
            <header className="owners-hero">
                <div className="container owners-hero-content">
                    <span className="owners-hero-tag">Our Leadership</span>
                    <h1 className="owners-hero-title">The Minds Steering Our Vision</h1>
                    <p className="owners-hero-subtitle">
                        Meet the co-founders of FreshDesk Solutions, dedicated to redefining property management and facility operations with transparency, technology, and absolute reliability.
                    </p>
                </div>
            </header>

            {/* Profile Cards Section */}
            <section className="owners-section container">
                <div className="owners-grid">
                    {ownersData.map((owner, index) => (
                        <div className="owner-card" key={index}>
                            <div className="owner-details">
                                <span className="owner-role">{owner.role}</span>
                                <h2 className="owner-name">{owner.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shared Vision Section */}
            <section className="shared-vision container">
                <div className="vision-glass-panel">
                    <h3 className="vision-title">Our Operational Philosophy</h3>
                    <p className="vision-text">
                        "At FreshDesk Solutions, we believe that exceptional facility management is not just about solving problems as they arise. It is about anticipating challenges, engineering robust digital frameworks, and cultivating trusted partnerships with our clients. We strive to be the single source of truth for your physical and digital assets."
                    </p>
                    <div className="vision-pillars">
                        <div className="pillar">
                            <Building2 className="pillar-icon" />
                            <h4>Asset Preservation</h4>
                            <p>Maximizing long-term property valuation and durability through preventive care.</p>
                        </div>
                        <div className="pillar">
                            <ShieldCheck className="pillar-icon" />
                            <h4>100% Compliance</h4>
                            <p>Ensuring absolute alignment with building, environmental, and safety regulations.</p>
                        </div>
                        <div className="pillar">
                            <Trophy className="pillar-icon" />
                            <h4>Service Hospitality</h4>
                            <p>Cultivating welcoming, professional environments that enhance client brand value.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Owners;
