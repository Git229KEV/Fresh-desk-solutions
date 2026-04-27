import './SoftwarePage.css';
import heroImg from '../../assets/software/asset_mgmt_hero.png';
import { 
    FileSearch, 
    Tags, 
    PlusSquare, 
    ClipboardCheck, 
    AlertTriangle, 
    BarChart,
    ArrowRight
} from 'lucide-react';

const AssetManagementSoftware = () => {
    const processSteps = [
        { 
            title: "Source Document Gathering", 
            description: "Systematic follow-up to gather P&ID, D&ID, F&G layout, HVAC, Lifting drawings, and Single Line diagrams.",
            icon: <FileSearch size={28} />
        },
        { 
            title: "Hierarchy Breakdown", 
            description: "Expert handling of both Greenfield and Brownfield Asset Registers to build comprehensive functional hierarchies.",
            icon: <PlusSquare size={28} />
        },
        { 
            title: "Tag Extraction", 
            description: "Precise extraction of both Physical and Soft Tags directly from engineering documentation.",
            icon: <Tags size={28} />
        },
        { 
            title: "Asset Register Development", 
            description: "Development of robust registers for all missing and newly identified assets across the facility.",
            icon: <ClipboardCheck size={28} />
        }
    ];

    const advancedCapabilities = [
        { title: "SOP & Workflow Design", detail: "Developing standard operating procedures and workflows for seamless asset registration.", icon: <ArrowRight size={20} /> },
        { title: "Criticality Analysis", detail: "Identification of critical equipment and spare parts with status assignment per client directions.", icon: <AlertTriangle size={20} /> },
        { title: "Gap Analysis", detail: "Comprehensive analysis of existing Asset Registers to identify and remediate inconsistencies.", icon: <BarChart size={20} /> }
    ];

    return (
        <div className="software-page">
            <div className="sw-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="sw-hero-overlay">
                    <div className="container">
                        <h1 className="mc-title">Asset Management</h1>
                        <p className="mc-subtitle">Building the digital foundation for your physical asset landscape.</p>
                    </div>
                </div>
            </div>

            <section className="sw-process container">
                <div className="sw-section-header">
                    <h2 className="section-title">Operational Excellence</h2>
                </div>
                <div className="process-grid">
                    {processSteps.map((step, i) => (
                        <div key={i} className="process-card">
                            <div className="process-icon-box">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sw-advanced container">
                <div className="advanced-container">
                    <div className="advanced-header">
                        <h2>Strategic Asset Intelligence</h2>
                    </div>
                    <div className="advanced-list">
                        {advancedCapabilities.map((cap, i) => (
                            <div key={i} className="advanced-item">
                                <div className="advanced-icon">{cap.icon}</div>
                                <div className="advanced-text">
                                    <h4>{cap.title}</h4>
                                    <p>{cap.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssetManagementSoftware;
