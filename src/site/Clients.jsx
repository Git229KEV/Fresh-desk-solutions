import React from 'react';
import './Clients.css'; // Create this file next
import ramaniamGreetaImg from '../assets/clients/ramaniam_greeta.png';
import ramaniamBaidImg from '../assets/clients/ramaniam_baid.png';

const Clients = () => {
    const clients = [
        {
            id: 1,
            name: "Ramaniam Greeta",
            image: ramaniamGreetaImg,
            description: "A premier IT Park offering state-of-the-art infrastructure and sustainable building solutions. Designed for modern businesses requiring high-efficiency workspaces.",
        },
        {
            id: 2,
            name: "Ramaniam Baid Hi-Tech",
            image: ramaniamBaidImg,
            description: "A futuristic commercial complex featuring advanced building management systems and eco-friendly design. A hub for innovation and corporate excellence.",
        }
    ];

    return (
        <div className="clients-page">
            <div className="clients-hero">
                <div className="container">
                    <h1 className="clients-title">Our Valued Clients</h1>
                    <p className="clients-subtitle">Partnering with visionaries to build the future.</p>
                </div>
            </div>

            <div className="container clients-container">
                <div className="clients-grid">
                    {clients.map((client) => (
                        <div key={client.id} className="client-card">
                            <div className="client-image-wrapper">
                                <img src={client.image} alt={client.name} className="client-image" />
                            </div>
                            <div className="client-content">
                                <h3 className="client-name">{client.name}</h3>
                                <p className="client-description">{client.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
