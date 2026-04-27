import React from 'react';
import './SolutionPage.css';

const SolutionPage = ({ title, content, image, gallery, highlights, map, galleryTitle }) => {
    return (
        <div className="solution-page">
            <div className="solution-hero">
                <img src={image} alt={title} />
                <div className="hero-overlay">
                    <h1 className="hero-title">{title}</h1>
                </div>
            </div>

            <div className="solution-content">
                <div className="target-content-wrapper">
                    <div className="target-intro">
                        <p>
                            {content}
                        </p>
                    </div>
                </div>

                {highlights && highlights.length > 0 && (
                    <div className="highlights-section">
                        <h2 className="gallery-title">Key Highlights</h2>
                        <div className="highlights-list">
                            {highlights.map((item, index) => (
                                <div key={index} className="highlight-item">
                                    <div className="highlight-icon-box">
                                        {/* Simple icon representation or placeholders */}
                                        <div className={`icon-circle icon-${item.icon}`}></div>
                                    </div>
                                    <div className="highlight-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {gallery && gallery.length > 0 && (
                    <div className="gallery-section">
                        <h2 className="gallery-title">{galleryTitle || "Key Highlights"}</h2>
                        <div className="gallery-list">
                            {gallery.map((item, index) => (
                                <div key={index} className={`gallery-row ${index % 2 !== 0 ? 'reverse' : ''} ${!item.description ? 'full-width' : ''}`}>
                                    <div className="gallery-image-container">
                                        <img src={item.src} alt={item.caption || item.title} className="gallery-image" />
                                    </div>
                                    {item.description && (
                                        <div className="gallery-content">
                                            <h3>{item.title || item.caption}</h3>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {map && (
                    <div className="map-section">
                        <h2 className="gallery-title">Location</h2>
                        <div className="map-container">
                            {map}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SolutionPage;
