import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import fdsLogo from '../assets/fds_logo_footer.png';

const ChevronDown = () => (
    <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
    >
        <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Logo = () => (
    <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
        <div className="logo-icon">
            <img src={fdsLogo} alt="FreshDesk Solutions Logo" className="navbar-brand-logo" />
        </div>
        <div className="logo-text">
            <span className="logo-main">FreshDesk</span>
            <span className="logo-sub">Solutions</span>
        </div>
    </Link>
);

const MegaDropdown = ({ title, description, links }) => (
    <div className="mega-menu">
        <div className="mega-menu-content">
            <div className="mega-menu-left">
                <h3 className="mega-menu-title">{title}</h3>
                <p className="mega-menu-description">{description}</p>
            </div>
            <div className="mega-menu-right">
                <ul className="mega-menu-list">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Solutions Links
    const solutionLinks = [
        { to: "/solutions/facility-property-management", label: "Facility & Property Management" },
        { to: "/solutions/office-refurbishment", label: "Office Refurbishment" },
        { to: "/solutions/equipment-management", label: "Equipment Management" },
        { to: "/solutions/asset-management", label: "Asset Management" },
        { to: "/solutions/solar-solutions", label: "Solar Solutions" },
        { to: "/solutions/spares-management", label: "Spares Management" }
    ];

    // Target Links
    const targetLinks = [
        { to: "/target/seamless-operations", label: "Seamless Building Operations" },
        { to: "/target/employee-wellbeing", label: "Employee Wellbeing" },
        { to: "/target/employee-engagement", label: "Employee Engagement" },
        { to: "/target/diversity-execution", label: "Diversity in Execution" },
        { to: "/target/onestop-service", label: "One-stop for Everything" },
        { to: "/target/audits-compliance", label: "Audits and Compliance" }
    ];

    // Presence Links
    const presenceLinks = [
        { to: "/presence/chennai", label: "Chennai" },
        { to: "/presence/coimbatore", label: "Coimbatore" }
    ];

    // Software Platform Links
    const softwarePlatformLinks = [
        { to: "/software/material-coding", label: "Updated Material Coding & Cataloguing" },
        { to: "/software/bom", label: "Bill Of Materials (BOM)" },
        { to: "/software/asset-management", label: "Asset Management" },
        { to: "/software/preventive-maintenance", label: "Preventive Maintenance" }
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-content container">
                <div className="navbar-logo">
                    <Logo />
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
                </button>

                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    {/* Target Mega Menu */}
                    <li className="dropdown-item">
                        <span className="nav-link">Our Target <ChevronDown /></span>
                        <div className="mobile-dropdown-links">
                            {targetLinks.map((link, idx) => (
                                <Link key={idx} to={link.to} onClick={closeMenu}>{link.label}</Link>
                            ))}
                        </div>
                        <MegaDropdown
                            title="Key Targets"
                            description="Focused areas of impact where we deliver exceptional value, ensuring operational excellence and occupant satisfaction."
                            links={targetLinks}
                        />
                    </li>

                    {/* Solutions Mega Menu */}
                    <li className="dropdown-item">
                        <span className="nav-link">Solutions <ChevronDown /></span>
                        <div className="mobile-dropdown-links">
                            {solutionLinks.map((link, idx) => (
                                <Link key={idx} to={link.to} onClick={closeMenu}>{link.label}</Link>
                            ))}
                        </div>
                        <MegaDropdown
                            title="Our Solutions"
                            description="Comprehensive facility and property management services tailored to maintain, optimize, and enhance your built environment."
                            links={solutionLinks}
                        />
                    </li>

                    {/* Software Platform Mega Menu */}
                    <li className="dropdown-item">
                        <span className="nav-link">Software Platform <ChevronDown /></span>
                        <div className="mobile-dropdown-links">
                            {softwarePlatformLinks.map((link, idx) => (
                                <Link key={idx} to={link.to} onClick={closeMenu}>{link.label}</Link>
                            ))}
                        </div>
                        <MegaDropdown
                            title="Software Platform"
                            description="Digital solutions to streamline your facility management, cataloguing, and maintenance operations with precision."
                            links={softwarePlatformLinks}
                        />
                    </li>

                    {/* Presence Mega Menu */}
                    <li className="dropdown-item">
                        <span className="nav-link">Our Presence <ChevronDown /></span>
                        <div className="mobile-dropdown-links">
                            {presenceLinks.map((link, idx) => (
                                <Link key={idx} to={link.to} onClick={closeMenu}>{link.label}</Link>
                            ))}
                        </div>
                        <MegaDropdown
                            title="Locations"
                            description="Locate our strategic operational hubs and offices across key regions in South India."
                            links={presenceLinks}
                        />
                    </li>

                    <li className="dropdown-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                const contactSection = document.getElementById('contact-us');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                                closeMenu();
                            }}
                        >
                            Contact Us
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
