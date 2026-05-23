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
    Shuffle,
    Layers,
    Activity,
    HelpCircle,
    Send,
    ArrowRight,
    CornerDownLeft,
    Check
} from 'lucide-react';

const workflowSteps = [
    {
        id: 'collect',
        title: 'Collect Existing Data',
        lane: 'intake',
        laneName: 'Intake & Exceptions',
        color: 'peach',
        icon: <Database size={20} />,
        x: 132, y: 75,
        width: 180, height: 60,
        description: 'Gather raw, unstructured material records, legacy spreadsheets, manufacturer sheets, and inventory catalogs from all client sources.',
        owner: 'Client & FDS Team',
        inputs: 'Raw spreadsheets, ERP data dumps, manufacturer catalogs',
        outputs: 'Consolidated Raw Data Inventory'
    },
    {
        id: 'analyze',
        title: 'Analyze Data',
        lane: 'standardization',
        laneName: 'Standardisation',
        color: 'blue',
        icon: <Activity size={20} />,
        x: 432, y: 75,
        width: 180, height: 60,
        description: 'Audit the collected raw records to identify duplicates, format inconsistencies, obsolete parts, and cataloging gaps.',
        owner: 'FDS Data Analysts',
        inputs: 'Consolidated Raw Data Inventory',
        outputs: 'Data Health Audit Report'
    },
    {
        id: 'identify_class',
        title: 'Identify Class Characteristics',
        lane: 'standardization',
        laneName: 'Standardisation',
        color: 'blue',
        icon: <Layers size={20} />,
        x: 432, y: 200,
        width: 220, height: 60,
        description: 'Classify items under standard taxonomies (e.g., UNSPSC or custom schema) and define key attributes (nouns, modifiers, specifications).',
        owner: 'Taxonomy Experts',
        inputs: 'Audited Data Registry',
        outputs: 'Noun & Modifier Dictionary, Key Attribute Templates'
    },
    {
        id: 'freeze_templates',
        title: 'Freezing Templates',
        lane: 'standardization',
        laneName: 'Standardisation',
        color: 'blue',
        icon: <CheckCircle2 size={20} />,
        x: 432, y: 325,
        width: 190, height: 60,
        description: 'Review and lock down cataloging templates and mandatory attributes with the client team to establish strict entry rules.',
        owner: 'FDS Team & Client Stakeholders',
        inputs: 'Draft Attribute Templates',
        outputs: 'Frozen Master Data Templates'
    },
    {
        id: 'populate_values',
        title: 'Populate Values',
        lane: 'standardization',
        laneName: 'Standardisation',
        color: 'green',
        icon: <Shuffle size={20} />,
        x: 432, y: 460,
        width: 180, height: 68,
        description: 'Enrich and populate values into the frozen templates, standardizing units of measure, manufacturer names, and item specifications.',
        owner: 'Cataloguing Engineers',
        inputs: 'Source Records + Frozen Templates',
        outputs: 'Draft Enriched Material Catalog'
    },
    {
        id: 'submit_client_qa',
        title: 'Submit to Client',
        lane: 'qa',
        laneName: 'Quality Assurance',
        color: 'cyan',
        icon: <FileText size={20} />,
        x: 787, y: 200,
        width: 160, height: 60,
        description: 'Deliver the draft catalog database to the client stakeholders and domain experts for technical review and validation.',
        owner: 'FDS Delivery Manager',
        inputs: 'Draft Enriched Material Catalog',
        outputs: 'Client Review Package'
    },
    {
        id: 'suggestion_feedback',
        title: 'Suggestion/Feedback',
        lane: 'qa',
        laneName: 'Quality Assurance',
        color: 'yellow',
        icon: <MessageSquare size={20} />,
        x: 787, y: 340,
        width: 180, height: 68,
        description: 'Collect review markups, suggestions, and operational feedback from client maintenance, procurement, and warehouse teams.',
        owner: 'Client Reviewers & FDS Coordinator',
        inputs: 'Client Review Package',
        outputs: 'Feedback Log (Revision list / Release approval)'
    },
    {
        id: 'approval',
        title: 'Approval',
        lane: 'qa',
        laneName: 'Quality Assurance',
        color: 'pink',
        icon: <CheckCircle2 size={20} />,
        x: 787, y: 470,
        width: 150, height: 60,
        description: 'Final sign-off of the cleaned, standardized, and enriched material catalog, locking it for production database insertion.',
        owner: 'Client Project Sponsor',
        inputs: 'Approved Material Catalog',
        outputs: 'Production-Ready ERP Database'
    },
    {
        id: 'missing_info',
        title: 'Identify Missing Info',
        lane: 'intake',
        laneName: 'Intake & Exceptions',
        color: 'purple',
        icon: <HelpCircle size={20} />,
        x: 132, y: 291,
        width: 180, height: 60,
        description: 'Detect missing technical parameters, illegible manufacturer details, or incomplete records that block template compliance.',
        owner: 'Cataloguing Engineers',
        inputs: 'Partially Standardized Records',
        outputs: 'Clarification Request Register'
    },
    {
        id: 'submit_client_exception',
        title: 'Submit to Client',
        lane: 'intake',
        laneName: 'Intake & Exceptions',
        color: 'cyan',
        icon: <Send size={20} />,
        x: 132, y: 420,
        width: 160, height: 60,
        description: 'Send clarification request queries to the client to retrieve original equipment datasheets or physical details.',
        owner: 'FDS Query Desk & Client Coordinator',
        inputs: 'Clarification Request Register',
        outputs: 'Resolved Material Specifications'
    }
];

const connectionsData = {
    collect_to_analyze: { path: 'M 222,75 L 332,75' },
    analyze_to_identify_class: { path: 'M 432,105 L 432,170' },
    identify_class_to_freeze_templates: { path: 'M 432,230 L 432,295' },
    freeze_templates_to_populate_values: { path: 'M 432,355 L 432,420' },
    populate_values_to_submit_client_qa: { path: 'M 522,460 L 650,460 L 650,200 L 707,200' },
    submit_client_qa_to_suggestion_feedback: { path: 'M 787,230 L 787,300' },
    suggestion_feedback_to_approval: { path: 'M 787,380 L 787,440' },
    suggestion_feedback_to_populate_values: { path: 'M 697,340 L 590,340 L 590,460 L 522,460' },
    identify_class_to_missing_info: { path: 'M 322,200 L 260,200 L 260,291 L 222,291' },
    freeze_templates_to_missing_info: { path: 'M 332,325 L 260,325 L 260,291 L 222,291' },
    missing_info_to_submit_client_exception: { path: 'M 132,321 L 132,390' },
    submit_client_exception_to_populate_values: { path: 'M 212,420 L 280,420 L 280,460 L 342,460' }
};

const paths = {
    standard: {
        steps: ['collect', 'analyze', 'identify_class', 'freeze_templates', 'populate_values', 'submit_client_qa', 'suggestion_feedback', 'approval'],
        connections: [
            'collect_to_analyze',
            'analyze_to_identify_class',
            'identify_class_to_freeze_templates',
            'freeze_templates_to_populate_values',
            'populate_values_to_submit_client_qa',
            'submit_client_qa_to_suggestion_feedback',
            'suggestion_feedback_to_approval'
        ],
        title: 'Standard Cataloguing Flow',
        description: 'The standard sequential flow for high-fidelity catalog consolidation. Data moves from collection, through classification and templating, to final approval.',
        color: 'blue'
    },
    exceptions: {
        steps: ['collect', 'analyze', 'identify_class', 'freeze_templates', 'missing_info', 'submit_client_exception', 'populate_values'],
        connections: [
            'collect_to_analyze',
            'analyze_to_identify_class',
            'identify_class_to_freeze_templates',
            'identify_class_to_missing_info',
            'freeze_templates_to_missing_info',
            'missing_info_to_submit_client_exception',
            'submit_client_exception_to_populate_values'
        ],
        title: 'Exception & Missing Info Flow',
        description: 'The parallel path triggered when critical technical data is missing. The FDS team submits queries to the client and integrates answers to populate values.',
        color: 'purple'
    },
    feedback: {
        steps: ['populate_values', 'submit_client_qa', 'suggestion_feedback'],
        connections: [
            'populate_values_to_submit_client_qa',
            'submit_client_qa_to_suggestion_feedback',
            'suggestion_feedback_to_populate_values'
        ],
        title: 'Quality Review & Feedback Loop',
        description: 'The iterative feedback loop. Once values are populated and submitted, client comments are incorporated to re-populate and refine catalog details.',
        color: 'yellow'
    }
};

const MaterialCoding = () => {
    const [activePath, setActivePath] = useState('standard');
    const [selectedStep, setSelectedStep] = useState('collect');
    const [hoveredStep, setHoveredStep] = useState(null);
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

            {/* ── Interactive Workflow Section ── */}
            <section className="mc-workflow-section container">
                <h2 className="section-title">Material Master-Work Flow</h2>
                <p className="section-subtitle">An interactive visual map of our structured, exception-tolerant cataloguing process. Select a path below to see how data flows.</p>

                {/* Path Selector Tabs */}
                <div className="workflow-path-selector">
                    <button 
                        className={`path-tab standard-tab ${activePath === 'standard' ? 'active' : ''}`}
                        onClick={() => { setActivePath('standard'); setSelectedStep('collect'); }}
                    >
                        <CheckCircle2 size={16} />
                        <span>Standard Path</span>
                    </button>
                    <button 
                        className={`path-tab exceptions-tab ${activePath === 'exceptions' ? 'active' : ''}`}
                        onClick={() => { setActivePath('exceptions'); setSelectedStep('missing_info'); }}
                    >
                        <HelpCircle size={16} />
                        <span>Exception Handling</span>
                    </button>
                    <button 
                        className={`path-tab feedback-tab ${activePath === 'feedback' ? 'active' : ''}`}
                        onClick={() => { setActivePath('feedback'); setSelectedStep('populate_values'); }}
                    >
                        <Shuffle size={16} />
                        <span>Feedback Loop</span>
                    </button>
                </div>

                <div className="path-info-bar">
                    <h3 className={`path-title color-${paths[activePath].color}`}>{paths[activePath].title}</h3>
                    <p className="path-description">{paths[activePath].description}</p>
                </div>

                {/* Desktop View */}
                <div className="mc-flowchart-desktop">
                    <div className="mc-flowchart-canvas">
                        {/* Swimlane Labels */}
                        <div className="swimlane-label lane-intake" style={{ left: '0px', width: '262px' }}>
                            <span>INTAKE &amp; EXCEPTIONS</span>
                        </div>
                        <div className="swimlane-label lane-standardization" style={{ left: '262px', width: '430px' }}>
                            <span>STANDARDISATION PROCESS</span>
                        </div>
                        <div className="swimlane-label lane-qa" style={{ left: '692px', width: '308px' }}>
                            <span>QUALITY ASSURANCE</span>
                        </div>

                        {/* Connection Lines (SVG) */}
                        <svg className="mc-flowchart-svg" viewBox="0 0 1000 600" width="1000" height="600">
                            <defs>
                                <marker id="arr-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#cbd5e1" />
                                </marker>
                                <marker id="arr-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={activePath === 'exceptions' ? '#8b5cf6' : activePath === 'feedback' ? '#d97706' : '#0056b3'} />
                                </marker>
                            </defs>

                            {/* Base Gray Connections */}
                            {Object.entries(connectionsData).map(([key, conn]) => {
                                const isLinkActive = paths[activePath].connections.includes(key);
                                return (
                                    <path
                                        key={`base-${key}`}
                                        d={conn.path}
                                        stroke="#cbd5e1"
                                        strokeWidth="2.5"
                                        fill="none"
                                        markerEnd="url(#arr-gray)"
                                        style={{ opacity: isLinkActive ? 0.15 : 0.7 }}
                                    />
                                );
                            })}

                            {/* Active Glowing Connections */}
                            {Object.entries(connectionsData).map(([key, conn]) => {
                                const isLinkActive = paths[activePath].connections.includes(key);
                                if (!isLinkActive) return null;
                                return (
                                    <g key={`active-group-${key}`}>
                                        {/* Glow Layer */}
                                        <path
                                            d={conn.path}
                                            className={`connection-line-glow glow-${paths[activePath].color}`}
                                            stroke={activePath === 'exceptions' ? '#c084fc' : activePath === 'feedback' ? '#fcd34d' : '#3b82f6'}
                                            strokeWidth="5"
                                            fill="none"
                                        />
                                        {/* Core Flow Line */}
                                        <path
                                            d={conn.path}
                                            className={`connection-line-flow flow-${paths[activePath].color}`}
                                            stroke={activePath === 'exceptions' ? '#8b5cf6' : activePath === 'feedback' ? '#ea580c' : '#0056b3'}
                                            strokeWidth="3"
                                            fill="none"
                                            markerEnd="url(#arr-active)"
                                        />
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Interactive Nodes */}
                        {workflowSteps.map((step) => {
                            const isStepInActivePath = paths[activePath].steps.includes(step.id);
                            const isStepSelected = selectedStep === step.id;
                            const isStepHovered = hoveredStep === step.id;
                            
                            return (
                                <div
                                    key={step.id}
                                    className={`flow-node ${step.color} ${isStepInActivePath ? 'in-path' : 'out-of-path'} ${isStepSelected ? 'selected' : ''}`}
                                    style={{
                                        left: `${step.x - step.width / 2}px`,
                                        top: `${step.y - step.height / 2}px`,
                                        width: `${step.width}px`,
                                        height: `${step.height}px`
                                    }}
                                    onClick={() => setSelectedStep(step.id)}
                                    onMouseEnter={() => setHoveredStep(step.id)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div className="flow-node-icon">{step.icon}</div>
                                    <div className="flow-node-content">
                                        <h4>{step.title}</h4>
                                        <span className="flow-node-lane">{step.laneName}</span>
                                    </div>
                                    {isStepInActivePath && (
                                        <div className="active-dot-indicator" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="mc-flowchart-mobile">
                    <p className="mobile-instruction">Tap any step to see details and input/output parameters.</p>
                    <div className="mobile-timeline">
                        {workflowSteps
                            .filter(step => paths[activePath].steps.includes(step.id))
                            .map((step, idx, arr) => {
                                const isStepSelected = selectedStep === step.id;
                                return (
                                    <React.Fragment key={`mobile-${step.id}`}>
                                        <div 
                                            className={`mobile-node ${step.color} ${isStepSelected ? 'active' : ''}`}
                                            onClick={() => setSelectedStep(step.id)}
                                        >
                                            <div className="mobile-node-header">
                                                <div className="mobile-node-icon">{step.icon}</div>
                                                <div className="mobile-node-title-area">
                                                    <h4>{step.title}</h4>
                                                    <span className="mobile-node-lane">{step.laneName}</span>
                                                </div>
                                            </div>
                                            
                                            {isStepSelected && (
                                                <div className="mobile-node-desc">
                                                    <p>{step.description}</p>
                                                    <div className="mobile-node-meta">
                                                        <div><strong>Owner:</strong> {step.owner}</div>
                                                        <div><strong>Inputs:</strong> {step.inputs}</div>
                                                        <div><strong>Outputs:</strong> {step.outputs}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {idx < arr.length - 1 && (
                                            <div className="mobile-connector">
                                                <ArrowRight size={18} style={{ transform: 'rotate(90deg)' }} />
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </div>

                {/* Details Panel (Active Step) */}
                {selectedStep && (
                    <div className={`active-step-panel border-${workflowSteps.find(s => s.id === selectedStep).color}`}>
                        {(() => {
                            const step = workflowSteps.find(s => s.id === selectedStep);
                            return (
                                <>
                                    <div className={`active-step-header ${step.color}`}>
                                        <div className="active-step-icon">{step.icon}</div>
                                        <div>
                                            <span className="active-step-category">{step.laneName}</span>
                                            <h3>{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="active-step-description">{step.description}</p>
                                    <div className="active-step-details-grid">
                                        <div className="details-col">
                                            <span className="details-label">RESPONSIBILITY</span>
                                            <span className="details-val">{step.owner}</span>
                                        </div>
                                        <div className="details-col">
                                            <span className="details-label">KEY INPUTS</span>
                                            <span className="details-val">{step.inputs}</span>
                                        </div>
                                        <div className="details-col">
                                            <span className="details-label">DELIVERABLE / OUTPUT</span>
                                            <span className="details-val">{step.outputs}</span>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                )}
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
