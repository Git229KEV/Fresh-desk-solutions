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
    CheckCircle2
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
        </div>
    );
};

export default MaterialCoding;
