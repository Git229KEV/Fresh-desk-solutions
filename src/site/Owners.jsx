import React from 'react';
import { Mail, Phone, Building2, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import './Owners.css';
import founderImg from '../assets/leads/founder.png';
import directorImg from '../assets/leads/director.png';

const Linkedin = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);


const Owners = () => {
    const ownersData = [
        {
            name: "Surya Jeyaraman",
            role: "Co-Founder & Managing Director",
            image: founderImg,
            bio: "Surya Jeyaraman is a visionary leader with over 15 years of experience in enterprise asset management, engineering operations, and industrial facility optimization. As the Managing Director, he spearheads the company's strategic growth, digital initiatives, and technological partnerships. Under his guidance, FreshDesk Solutions has integrated state-of-the-art software systems to offer proactive maintenance and unparalleled analytics to clients, transforming standard workspaces into highly efficient ecosystems.",
            email: "surya.jeyaraman@freshdesksolutions.com",
            phone: "+91 98405 12345",
            linkedin: "https://linkedin.com/in/surya-jeyaraman",
            highlight: "Technology & Strategy"
        },
        {
            name: "Subramanian",
            role: "Co-Founder & Director of Operations",
            image: directorImg,
            bio: "Subramanian brings a wealth of hands-on expertise in project execution, property refurbishments, and facilities compliance. As Director of Operations, he manages the ground-level execution, vendor networks, and rigorous safety audits that FreshDesk Solutions is renowned for. Subramanian's dedication to operational perfection, regulatory adherence, and human-centric service design ensures that every managed property maintains peak asset value while delivering a safe and productive environment.",
            email: "subramanian@freshdesksolutions.com",
            phone: "+91 98405 67890",
            linkedin: "https://linkedin.com/in/subramanian-fds",
            highlight: "Execution & Excellence"
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
                            <div className="owner-image-wrapper">
                                <img src={owner.image} alt={owner.name} className="owner-image" />
                                <span className="owner-highlight-badge">
                                    <Sparkles className="badge-icon" size={14} />
                                    {owner.highlight}
                                </span>
                            </div>
                            <div className="owner-details">
                                <span className="owner-role">{owner.role}</span>
                                <h2 className="owner-name">{owner.name}</h2>
                                <p className="owner-bio">{owner.bio}</p>
                                
                                <div className="owner-contact-info">
                                    <a href={`mailto:${owner.email}`} className="contact-link" title="Send Email">
                                        <Mail size={18} />
                                        <span>{owner.email}</span>
                                    </a>
                                    <a href={`tel:${owner.phone}`} className="contact-link" title="Call">
                                        <Phone size={18} />
                                        <span>{owner.phone}</span>
                                    </a>
                                    <a href={owner.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link" title="LinkedIn Profile">
                                        <Linkedin size={18} />
                                        <span>LinkedIn Profile</span>
                                    </a>
                                </div>
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
