import React from 'react';
import './BOM.css';
import heroImg from '../../assets/software/bom_hero.png';
import { 
    Layers, 
    Database, 
    GitBranch, 
    Box, 
    ArrowRightLeft, 
    Link, 
    Workflow,
    CheckCircle2
} from 'lucide-react';

const BOM = () => {
    return (
        <div className="bom-page">
            <div className="bom-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="bom-hero-overlay">
                    <div className="container">
                        <h1 className="bom-title">Bill Of Materials (BOM)</h1>
                        <p className="bom-subtitle">Streamlining complex hierarchies for seamless operational procurement.</p>
                    </div>
                </div>
            </div>

            <section className="bom-overview container">
                <div className="overview-card">
                    <div className="overview-header">
                        <Layers size={40} className="header-icon" />
                        <h2>Comprehensive Hierarchy Management</h2>
                    </div>
                    <div className="overview-grid">
                        <div className="overview-item">
                            <div className="item-icon-box">
                                <Database size={24} />
                            </div>
                            <div>
                                <h3>Equipment or Material BOM</h3>
                                <p>Manage detailed specifications for both static materials and complex machinery assets.</p>
                            </div>
                        </div>
                        <div className="overview-item">
                            <div className="item-icon-box">
                                <GitBranch size={24} />
                            </div>
                            <div>
                                <h3>Single or Multilevel</h3>
                                <p>Support for flat structures or deeply nested hierarchies to mirror real-world assemblies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bom-comparison container">
                <div className="section-header">
                    <h2>Advanced Association Logic</h2>
                    <p>Optimizing how components relate to your core assets.</p>
                </div>

                <div className="comparison-grid">
                    <div className="comparison-card direct">
                        <div className="card-badge">Precision Control</div>
                        <div className="card-icon-main">
                            <Box size={48} />
                        </div>
                        <h3>Direct BOM</h3>
                        <p>
                            In a Direct BOM structure, materials are selected and associated with the 
                            <strong> Equipment</strong> directly instead of through assembly selection.
                        </p>
                        <ul className="card-features">
                            <li><CheckCircle2 size={16} /> Granular material association</li>
                            <li><CheckCircle2 size={16} /> Direct equipment mapping</li>
                            <li><CheckCircle2 size={16} /> Individual item tracking</li>
                        </ul>
                    </div>

                    <div className="comparison-connector">
                        <ArrowRightLeft size={32} />
                    </div>

                    <div className="comparison-card indirect">
                        <div className="card-badge">Efficient Hierarchy</div>
                        <div className="card-icon-main">
                            <Workflow size={48} />
                        </div>
                        <h3>Indirect BOM</h3>
                        <p>
                            In an Indirect BOM, <strong>Assembly Material</strong> is associated with the 
                            Equipment. The full BOM hierarchy is automatically retrieved from this relationship.
                        </p>
                        <ul className="card-features">
                            <li><CheckCircle2 size={16} /> Automated hierarchy retrieval</li>
                            <li><CheckCircle2 size={16} /> Assembly-level association</li>
                            <li><CheckCircle2 size={16} /> Simplified data management</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bom-cta container">
                <div className="cta-banner">
                    <div className="cta-content">
                        <h3>Dynamic Relationship Mapping</h3>
                        <p>Our platform ensures that whether you choose direct or indirect mapping, your procurement and maintenance teams always have 100% visibility into the required spares.</p>
                    </div>
                    <Link className="cta-icon" />
                </div>
            </section>
        </div>
    );
};

export default BOM;
