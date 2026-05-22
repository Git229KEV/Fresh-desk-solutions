import React, { useState } from 'react';
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
    FolderDown,
    Search,
    Eye,
    AlertCircle,
    Lock,
    Send,
    Edit3,
    MessageCircle,
    ThumbsUp,
    Shuffle,
    Layers,
    Activity
} from 'lucide-react';

const MaterialCoding = () => {
    const [activeStep, setActiveStep] = useState('collect');

    const masters = [
        { title: "UOM Master", icon: <Ruler size={24} /> },
        { title: "Manufacturer/Vendor Master", icon: <Factory size={24} /> },
        { title: "Attribute Master", icon: <ClipboardList size={24} /> },
        { title: "Item Values Master", icon: <Database size={24} /> },
        { title: "Noun & Modifier Master", icon: <Tags size={24} /> },
        { title: "Reference Type Master", icon: <LinkIcon size={24} /> },
        { title: "Standard Formats for Data Entry", icon: <FileText size={24} /> }
    ];

    const workflowSteps = [
        {
            id: "collect",
            title: "Collect Existing Data",
            description: "Gather legacy catalogs, spreadsheets, PDFs, and unstructured data streams across all departments.",
            laneName: "Data Collection",
            color: "peach",
            icon: <FolderDown size={20} />,
            coords: ['50px', '25px']
        },
        {
            id: "missing-info",
            title: "Identify Missing Info",
            description: "Scan data for missing manufacturers, part numbers, raw material grades, and critical dimensions.",
            laneName: "Exception Handling",
            color: "purple",
            icon: <AlertCircle size={20} />,
            coords: ['50px', '175px']
        },
        {
            id: "submit-client-missing",
            title: "Submit to Client (Query)",
            description: "Package and submit missing information requests directly to the client's engineering desk.",
            laneName: "Exception Handling",
            color: "blue",
            icon: <Send size={20} />,
            coords: ['50px', '325px']
        },
        {
            id: "analyze",
            title: "Analyze Data",
            description: "Examine cleaned and unified data to determine parent-child links and catalog relationships.",
            laneName: "Standardisation",
            color: "green",
            icon: <Search size={20} />,
            coords: ['400px', '25px']
        },
        {
            id: "class-char",
            title: "Identify Class Characteristics",
            description: "Map materials to standard classifications (UNSPSC/FDS) and define attribute templates.",
            laneName: "Standardisation",
            color: "green",
            icon: <Eye size={20} />,
            coords: ['400px', '175px']
        },
        {
            id: "freezing",
            title: "Freezing Templates",
            description: "Lock down data schemas, naming conventions, nouns, modifiers, and character lengths.",
            laneName: "Standardisation",
            color: "green",
            icon: <Lock size={20} />,
            coords: ['400px', '325px']
        },
        {
            id: "populate",
            title: "Populate Values",
            description: "Enrich the database by filling values into frozen structures with maximum accuracy.",
            laneName: "Standardisation",
            color: "yellow",
            icon: <Edit3 size={20} />,
            coords: ['400px', '475px']
        },
        {
            id: "submit-client-review",
            title: "Submit to Client (Review)",
            description: "Send standardized draft catalogs to client departments for user acceptance testing.",
            laneName: "Quality Assurance",
            color: "blue",
            icon: <Send size={20} />,
            coords: ['750px', '175px']
        },
        {
            id: "feedback",
            title: "Suggestion / Feedback",
            description: "Collect design tweaks, nomenclature revisions, and special formatting requests.",
            laneName: "Quality Assurance",
            color: "yellow",
            icon: <MessageCircle size={20} />,
            coords: ['750px', '325px']
        },
        {
            id: "approval",
            title: "Approval Gateway",
            description: "Sign-off on the catalog from procurement, engineering, and plant management leads.",
            laneName: "Quality Assurance",
            color: "pink",
            icon: <ThumbsUp size={20} />,
            coords: ['750px', '475px']
        }
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
            <div className="mc-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="mc-hero-overlay">
                    <div className="container">
                        <h1 className="mc-title">Material Coding & Cataloguing</h1>
                        <p className="mc-subtitle">Optimizing Operational Intelligence through Strategic Data Management</p>
                    </div>
                </div>
            </div>

            <section className="mc-intro-section container">
                <div className="mc-card intro-card">
                    <h2>The Foundation of Excellence</h2>
                    <p>
                        The material catalog contains key information that is used to describe the materials used for the operation of the business. 
                        It is truly cross-domain and is the primary means to ensure effective communication across your entire organization.
                    </p>
                    <div className="mc-grid">
                        <div className="mc-feature">
                            <CheckCircle2 size={18} className="feature-icon" />
                            <p>Spares used by the maintenance department</p>
                        </div>
                        <div className="mc-feature">
                            <CheckCircle2 size={18} className="feature-icon" />
                            <p>Materials used for manufacturing</p>
                        </div>
                        <div className="mc-feature">
                            <CheckCircle2 size={18} className="feature-icon" />
                            <p>Materials held in the warehouse</p>
                        </div>
                        <div className="mc-feature">
                            <CheckCircle2 size={18} className="feature-icon" />
                            <p>Procurement and vendor supply management</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mc-value-section container">
                <div className="mc-value-grid">
                    <div className="mc-value-card">
                        <div className="value-icon-box">
                            <MessageSquare size={32} />
                        </div>
                        <h3>Vital Communication</h3>
                        <p>Good communication is vital to ensure that critical production materials and spares are available when required.</p>
                    </div>
                    <div className="mc-value-card highlight">
                        <div className="value-icon-box">
                            <DollarSign size={32} />
                        </div>
                        <h3>Cost Optimization</h3>
                        <p>A good quality material catalog prevents unnecessary expense through the selection of correct materials, reducing expediting and excessive stock holdings.</p>
                    </div>
                    <div className="mc-value-card">
                        <div className="value-icon-box">
                            <Settings size={32} />
                        </div>
                        <h3>Operational Efficiency</h3>
                        <p>Proper cataloguing eliminates rework and ensures that inventory controllers can manage assets with 100% accuracy.</p>
                    </div>
                </div>
            </section>

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

            {/* Workflow Section */}
            <section className="mc-workflow-section container">
                <h2 className="section-title">Material Master-Work Flow</h2>
                <p className="section-subtitle">Our structured, iterative process for constructing high-fidelity material catalogs</p>
                
                {/* Desktop Flowchart */}
                <div className="mc-flowchart-desktop">
                    <div className="mc-flowchart-canvas">
                        <svg className="mc-flowchart-svg" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
                                </marker>
                                <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
                                </marker>
                                <marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#e28a5c" />
                                </marker>
                                <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8b5cf6" />
                                </marker>
                            </defs>
                            
                            {/* Connection Lines */}
                            {/* Collect -> Analyze */}
                            <path d="M 250,70 L 390,70" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                            
                            {/* Collect -> Identify Missing */}
                            <path d="M 150,115 L 150,165" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                            
                            {/* Identify Missing -> Submit Client (Query) */}
                            <path d="M 150,265 L 150,315" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                            
                            {/* Submit Client (Query) -> Feedback loop to Collect */}
                            <path d="M 150,415 L 150,440 L 30,440 L 30,70 L 40,70" stroke="#e28a5c" strokeWidth="2" fill="none" strokeDasharray="5 5" markerEnd="url(#arrow-orange)" />
                            
                            {/* Identify Class Characteristics -> Identify Missing */}
                            <path d="M 400,220 L 260,220" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrow-purple)" />
                            
                            {/* Analyze -> Class Characteristics */}
                            <path d="M 500,115 L 500,165" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
                            
                            {/* Class Characteristics -> Freezing Templates */}
                            <path d="M 500,265 L 500,315" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
                            
                            {/* Class Characteristics -> Submit Client (Review) */}
                            <path d="M 600,220 L 740,220" stroke="#e28a5c" strokeWidth="2" fill="none" markerEnd="url(#arrow-orange)" />
                            
                            {/* Freezing Templates -> Populate Values */}
                            <path d="M 500,415 L 500,465" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
                            
                            {/* Submit Client (Review) -> Suggestion/Feedback */}
                            <path d="M 850,265 L 850,315" stroke="#e28a5c" strokeWidth="2" fill="none" markerEnd="url(#arrow-orange)" />
                            
                            {/* Suggestion/Feedback -> Approval */}
                            <path d="M 850,415 L 850,465" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                            <text x="860" y="445" fill="#64748b" className="svg-text">No</text>
                            
                            {/* Approval -> Populate Values */}
                            <path d="M 750,520 L 610,520" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-green)" />
                            <text x="675" y="505" fill="#10b981" className="svg-text">Yes</text>
                            
                            {/* Populate Values -> Analyze Feedback Loop */}
                            <path d="M 400,520 L 330,520 L 330,70 L 390,70" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="5 5" markerEnd="url(#arrow-green)" />
                            <text x="340" y="295" fill="#10b981" className="svg-text rotate-text">Validation</text>
                        </svg>

                        {/* Interactive Workflow Cards */}
                        {workflowSteps.map((step) => {
                            const [left, top] = step.coords;
                            return (
                                <div 
                                    key={step.id} 
                                    className={`flow-node ${step.color} ${activeStep === step.id ? 'active' : ''}`}
                                    style={{ 
                                        position: 'absolute', 
                                        left: left, 
                                        top: top,
                                        width: '200px',
                                        height: '90px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setActiveStep(step.id)}
                                >
                                    <div className="flow-node-icon">{step.icon}</div>
                                    <div className="flow-node-content">
                                        <h4>{step.title}</h4>
                                        <span className="flow-node-lane">{step.laneName}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Active Step Panel */}
                    <div className="active-step-panel">
                        <div className={`active-step-header ${workflowSteps.find(s => s.id === activeStep).color}`}>
                            <div className="active-step-icon">
                                {workflowSteps.find(s => s.id === activeStep).icon}
                            </div>
                            <h3>{workflowSteps.find(s => s.id === activeStep).title}</h3>
                        </div>
                        <p className="active-step-description">
                            {workflowSteps.find(s => s.id === activeStep).description}
                        </p>
                    </div>
                </div>

                {/* Mobile Flowchart */}
                <div className="mc-flowchart-mobile">
                    <p className="mobile-instruction">Tap on steps to explore our material flow process:</p>
                    <div className="mobile-timeline">
                        {workflowSteps.map((step, idx) => (
                            <React.Fragment key={step.id}>
                                <div 
                                    className={`mobile-node ${step.color} ${activeStep === step.id ? 'active' : ''}`}
                                    onClick={() => setActiveStep(step.id)}
                                >
                                    <div className="mobile-node-header">
                                        <div className="mobile-node-icon">{step.icon}</div>
                                        <h4>{step.title}</h4>
                                    </div>
                                    {activeStep === step.id && (
                                        <p className="mobile-node-desc">{step.description}</p>
                                    )}
                                </div>
                                {idx < workflowSteps.length - 1 && (
                                    <div className="mobile-connector">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <polyline points="19 12 12 19 5 12"></polyline>
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="mc-advantages-section container">
                <h2 className="section-title">Advantages</h2>
                <p className="section-subtitle">Key business benefits of professional Material Coding and Cataloguing</p>
                <div className="advantages-grid">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="advantage-card">
                            <div className="advantage-icon-box">
                                {advantage.icon}
                            </div>
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
