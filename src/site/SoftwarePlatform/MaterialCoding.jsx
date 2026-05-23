import React from 'react';
import './MaterialCoding.css';
import heroImg from '../../assets/software/material_coding_hero.png';
import {
    Ruler,
    Factory,
    ClipboardList,
    Database,
    Tags,
    Link as LinkIcon,
    FileText,
    MessageSquare,
    DollarSign,
    Settings,
    CheckCircle2,
    Shuffle,
    Layers,
    Activity
} from 'lucide-react';

const MaterialCoding = () => {
    const masters = [
        { title: "UOM Master", icon: <Ruler size={24} /> },
        { title: "Manufacturer/Vendor Master", icon: <Factory size={24} /> },
        { title: "Attribute Master", icon: <ClipboardList size={24} /> },
        { title: "Item Values Master", icon: <Database size={24} /> },
        { title: "Noun & Modifier Master", icon: <Tags size={24} /> },
        { title: "Reference Type Master", icon: <LinkIcon size={24} /> },
        { title: "Standard Formats for Data Entry", icon: <FileText size={24} /> }
    ];

    const advantages = [
        {
            title: "Removal of duplication",
            description: "Eliminate duplicate records and catalog entries, reducing inventory bloat and ordering confusion.",
            icon: <Shuffle size={24} />
        },
        {
            title: "Data enrichment",
            description: "Enhance material descriptions with manufacturer names, model numbers, and technical specifications.",
            icon: <Database size={24} />
        },
        {
            title: "Data classification",
            description: "Categorize materials using international standards like UNSPSC or custom taxonomies for structured analysis.",
            icon: <Layers size={24} />
        },
        {
            title: "Data cleansing",
            description: "Standardize units of measure, abbreviations, and formatting for clean, searchable database records.",
            icon: <Activity size={24} />
        },
        {
            title: "Structuring the buying description",
            description: "Create clear, unambiguous purchase specifications that ensure vendors deliver the exact required items.",
            icon: <FileText size={24} />
        },
        {
            title: "Overall consistency",
            description: "Establish a single source of truth across engineering, procurement, and warehouse operations.",
            icon: <CheckCircle2 size={24} />
        }
    ];

    return (
        <div className="material-coding-page">

            {/* ── Hero ── */}
            <div className="mc-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="mc-hero-overlay">
                    <div className="container">
                        <h1 className="mc-title">Material Coding &amp; Cataloguing</h1>
                        <p className="mc-subtitle">Optimizing Operational Intelligence through Strategic Data Management</p>
                    </div>
                </div>
            </div>

            {/* ── Intro ── */}
            <section className="mc-intro-section container">
                <div className="mc-card intro-card">
                    <h2>The Foundation of Excellence</h2>
                    <p>
                        The material catalog contains key information that is used to describe the materials used for the operation of the business.
                        It is truly cross-domain and is the primary means to ensure effective communication across your entire organization.
                    </p>
                    <div className="mc-grid">
                        <div className="mc-feature"><CheckCircle2 size={18} className="feature-icon" /><p>Spares used by the maintenance department</p></div>
                        <div className="mc-feature"><CheckCircle2 size={18} className="feature-icon" /><p>Materials used for manufacturing</p></div>
                        <div className="mc-feature"><CheckCircle2 size={18} className="feature-icon" /><p>Materials held in the warehouse</p></div>
                        <div className="mc-feature"><CheckCircle2 size={18} className="feature-icon" /><p>Procurement and vendor supply management</p></div>
                    </div>
                </div>
            </section>

            {/* ── Value Cards ── */}
            <section className="mc-value-section container">
                <div className="mc-value-grid">
                    <div className="mc-value-card">
                        <div className="value-icon-box"><MessageSquare size={32} /></div>
                        <h3>Vital Communication</h3>
                        <p>Good communication is vital to ensure that critical production materials and spares are available when required.</p>
                    </div>
                    <div className="mc-value-card highlight">
                        <div className="value-icon-box"><DollarSign size={32} /></div>
                        <h3>Cost Optimization</h3>
                        <p>A good quality material catalog prevents unnecessary expense through the selection of correct materials, reducing expediting and excessive stock holdings.</p>
                    </div>
                    <div className="mc-value-card">
                        <div className="value-icon-box"><Settings size={32} /></div>
                        <h3>Operational Efficiency</h3>
                        <p>Proper cataloguing eliminates rework and ensures that inventory controllers can manage assets with 100% accuracy.</p>
                    </div>
                </div>
            </section>

            {/* ── Standard Masters ── */}
            <section className="mc-masters-section container">
                <h2 className="section-title">Standard Masters</h2>
                <p className="section-subtitle">A comprehensive suite of masters used in professional Material Cataloguing</p>
                <div className="masters-grid">
                    {masters.map((master, index) => (
                        <div key={index} className="master-card">
                            <div className="master-icon">{master.icon}</div>
                            <h3>{master.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Workflow SVG ── */}
            <section className="mc-workflow-section container">
                <h2 className="section-title">Material Master-Work Flow</h2>
                <p className="section-subtitle">Our structured, iterative process for building high-fidelity material catalogs</p>

                <div className="workflow-legend">
                    <span className="legend-item legend-standard"><span className="legend-line dark"></span>Standard Flow</span>
                    <span className="legend-item"><span className="legend-line orange"></span>Client / Exception</span>
                    <span className="legend-item"><span className="legend-line green"></span>Approval / Loop</span>
                    <span className="legend-item"><span className="legend-line blue dashed"></span>Iteration Feedback</span>
                </div>

                <div className="workflow-scroll-wrapper">
                    <svg
                        viewBox="0 0 1060 540"
                        xmlns="http://www.w3.org/2000/svg"
                        className="workflow-svg"
                        overflow="visible"
                    >
                        <defs>
                            {/* ── Gradients ── */}
                            <linearGradient id="g-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="#d97706" />
                            </linearGradient>
                            <linearGradient id="g-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#2180f0" />
                                <stop offset="100%" stopColor="#0056b3" />
                            </linearGradient>
                            <linearGradient id="g-green" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                            <linearGradient id="g-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#38bdf8" />
                                <stop offset="100%" stopColor="#0891b2" />
                            </linearGradient>
                            <linearGradient id="g-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                            <linearGradient id="g-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fcd34d" />
                                <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                            <linearGradient id="g-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f472b6" />
                                <stop offset="100%" stopColor="#db2777" />
                            </linearGradient>

                            {/* ── Drop Shadow ── */}
                            <filter id="wf-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.20)" />
                            </filter>

                            {/* ── Arrowhead Markers ── */}
                            <marker id="arr-dark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
                            </marker>
                            <marker id="arr-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#ea580c" />
                            </marker>
                            <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#059669" />
                            </marker>
                            <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0056b3" />
                            </marker>
                        </defs>

                        {/* ══════════════════════════════════════ */}
                        {/*             SWIM LANE BANDS            */}
                        {/* ══════════════════════════════════════ */}
                        {/* Left lane  – Intake & Exceptions */}
                        <rect x="18" y="30" width="230" height="492" rx="18" fill="#eff6ff" fillOpacity="0.75" stroke="#bfdbfe" strokeWidth="1" />
                        {/* Centre lane – Standardisation */}
                        <rect x="262" y="30" width="330" height="492" rx="18" fill="#f0fdf4" fillOpacity="0.80" stroke="#a7f3d0" strokeWidth="1" />
                        {/* Right lane  – Quality Assurance */}
                        <rect x="712" y="142" width="330" height="380" rx="18" fill="#fdf4ff" fillOpacity="0.80" stroke="#e9d5ff" strokeWidth="1" />

                        {/* Lane Labels */}
                        <text x="133" y="20" textAnchor="middle" fill="#2563eb" fontSize="9" fontWeight="800" letterSpacing="1.8">INTAKE &amp; EXCEPTIONS</text>
                        <text x="427" y="20" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="800" letterSpacing="1.8">STANDARDISATION</text>
                        <text x="877" y="136" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="800" letterSpacing="1.8">QUALITY ASSURANCE</text>

                        {/* ══════════════════════════════════════ */}
                        {/*          CONNECTION / ARROW LINES      */}
                        {/* ══════════════════════════════════════ */}

                        {/* 1 ▶ Collect Existing Data → Analyze Data */}
                        <path d="M 203,75 L 337,75"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />

                        {/* 2 ▶ Analyze Data → Identify Class Characteristics */}
                        <path d="M 432,100 L 432,176"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />

                        {/* 3 ▶ Identify Class Characteristics → Freezing Templates */}
                        <path d="M 432,225 L 432,301"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />

                        {/* 4 ▶ Freezing Templates → Populate Values */}
                        <path d="M 432,350 L 432,408"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />

                        {/* 5 ▶ Identify Class → Submit to Client [top, orange] */}
                        <path d="M 543,200 L 713,200"
                            stroke="#ea580c" strokeWidth="2.5" fill="none" markerEnd="url(#arr-orange)" />

                        {/* 6 ▶ Identify Class → Identify Missing Info [orange L-shape] */}
                        <path d="M 322,210 L 254,210 L 254,284 L 214,284"
                            stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" markerEnd="url(#arr-orange)" />

                        {/* 7 ▶ Freezing Templates → Identify Missing Info [orange] */}
                        <path d="M 332,328 L 254,328 L 254,298 L 214,298"
                            stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" markerEnd="url(#arr-orange)" />

                        {/* 8 ▶ Submit to Client [top] → Suggestion/Feedback [orange] */}
                        <path d="M 787,234 L 787,288"
                            stroke="#ea580c" strokeWidth="2.5" fill="none" markerEnd="url(#arr-orange)" />

                        {/* 9 ▶ Suggestion/Feedback → Approval ["No", dark] */}
                        <path d="M 787,392 L 787,438"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />
                        <text x="796" y="420" fill="#64748b" fontSize="11" fontWeight="700">No</text>

                        {/* 10 ▶ Approval → Populate Values ["Yes", green] */}
                        <path d="M 724,469 L 479,461"
                            stroke="#059669" strokeWidth="2.5" fill="none" markerEnd="url(#arr-green)" />
                        <text x="598" y="452" fill="#059669" fontSize="11" fontWeight="700">Yes</text>

                        {/* 11 ▶ Identify Missing Info → Submit to Client [bottom] */}
                        <path d="M 132,315 L 132,388"
                            stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#arr-dark)" />

                        {/* 12 ▶ Submit to Client [bottom] → Populate Values ["Yes", green curved] */}
                        <path d="M 200,420 C 296,420 340,454 386,454"
                            stroke="#059669" strokeWidth="2.5" fill="none" markerEnd="url(#arr-green)" />
                        <text x="248" y="411" fill="#059669" fontSize="11" fontWeight="700">Yes</text>

                        {/* 13 ▶ Populate Values → Analyze Data [iteration feedback, blue dashed] */}
                        <path d="M 386,444 L 251,444 L 251,75 L 337,75"
                            stroke="#0056b3" strokeWidth="2" strokeDasharray="8 4"
                            strokeLinecap="round" strokeLinejoin="round" fill="none" markerEnd="url(#arr-blue)" />

                        {/* ══════════════════════════════════════ */}
                        {/*         SHAPE NODES (drawn last)       */}
                        {/* ══════════════════════════════════════ */}

                        {/* ① Collect Existing Data — Parallelogram (amber) */}
                        <polygon
                            points="78,52 218,52 188,98 48,98"
                            fill="url(#g-amber)" filter="url(#wf-shadow)"
                        />
                        <text x="133" y="72" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Collect</text>
                        <text x="133" y="88" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Existing Data</text>

                        {/* ② Analyze Data — Rounded rect (blue) */}
                        <rect x="337" y="51" width="190" height="49" rx="12" fill="url(#g-blue)" filter="url(#wf-shadow)" />
                        <text x="432" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">Analyze Data</text>

                        {/* ③ Identify Class Characteristics — Rounded rect (blue) */}
                        <rect x="322" y="176" width="221" height="49" rx="12" fill="url(#g-blue)" filter="url(#wf-shadow)" />
                        <text x="432" y="196" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Identify Class</text>
                        <text x="432" y="213" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Characteristics</text>

                        {/* ④ Freezing Templates — Rounded rect (blue) */}
                        <rect x="332" y="301" width="200" height="49" rx="12" fill="url(#g-blue)" filter="url(#wf-shadow)" />
                        <text x="432" y="321" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Freezing</text>
                        <text x="432" y="338" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Templates</text>

                        {/* ⑤ Populate Values — Hexagon (green) */}
                        {/* flat-top hexagon: r=52, cx=432, cy=460 */}
                        <polygon
                            points="477,486 432,512 387,486 387,434 432,408 477,434"
                            fill="url(#g-green)" filter="url(#wf-shadow)"
                        />
                        <text x="432" y="457" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Populate</text>
                        <text x="432" y="473" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Values</text>

                        {/* ⑥ Submit to Client (top) — Ellipse (cyan) */}
                        <ellipse cx="787" cy="200" rx="74" ry="34" fill="url(#g-cyan)" filter="url(#wf-shadow)" />
                        <text x="787" y="196" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Submit to</text>
                        <text x="787" y="213" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Client</text>

                        {/* ⑦ Suggestion / Feedback — Hexagon (yellow) */}
                        {/* flat-top hexagon: r=52, cx=787, cy=340 */}
                        <polygon
                            points="832,366 787,392 742,366 742,314 787,288 832,314"
                            fill="url(#g-yellow)" filter="url(#wf-shadow)"
                        />
                        <text x="787" y="337" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="700">Suggestion/</text>
                        <text x="787" y="353" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="700">Feedback</text>

                        {/* ⑧ Approval — Ellipse (pink) */}
                        <ellipse cx="787" cy="470" rx="63" ry="32" fill="url(#g-pink)" filter="url(#wf-shadow)" />
                        <text x="787" y="474" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">Approval</text>

                        {/* ⑨ Identify Missing Info — Rounded rect (violet) */}
                        <rect x="50" y="267" width="164" height="49" rx="12" fill="url(#g-violet)" filter="url(#wf-shadow)" />
                        <text x="132" y="287" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Identify</text>
                        <text x="132" y="304" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Missing Info</text>

                        {/* ⑩ Submit to Client (bottom) — Ellipse (cyan) */}
                        <ellipse cx="132" cy="420" rx="68" ry="32" fill="url(#g-cyan)" filter="url(#wf-shadow)" />
                        <text x="132" y="416" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Submit to</text>
                        <text x="132" y="432" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Client</text>

                    </svg>
                </div>
            </section>

            {/* ── Advantages ── */}
            <section className="mc-advantages-section container">
                <h2 className="section-title">Advantages</h2>
                <p className="section-subtitle">Key business benefits of professional Material Coding and Cataloguing</p>
                <div className="advantages-grid">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="advantage-card">
                            <div className="advantage-icon-box">{advantage.icon}</div>
                            <div className="advantage-content">
                                <h3>{advantage.title}</h3>
                                <p>{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default MaterialCoding;
