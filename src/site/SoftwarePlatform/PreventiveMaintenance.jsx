import './SoftwarePage.css';
import heroImg from '../../assets/software/maintenance_hero.png';
import { 
    CalendarPlus, 
    ClipboardX, 
    Trash2, 
    RefreshCcw, 
    FileStack, 
    FileText, 
    FileJson, 
    Search,
    Copy,
    CalendarClock
} from 'lucide-react';

const PreventiveMaintenance = () => {
    const maintenanceTasks = [
        { title: "Plan & Item Creation", detail: "Creation of Maintenance plan & Maintenance Items for FLOCs (Object list).", icon: <CalendarPlus size={24} /> },
        { title: "SAP Work Order Management", detail: "Deactivation of Maintenance Plans and cancellation of Work Orders generated in SAP.", icon: <ClipboardX size={24} /> },
        { title: "Hierarchy Cleanup", detail: "Removing FLOCs & Std. Task list groups from deactivated MPs and setting for deletion in SAP.", icon: <Trash2 size={24} /> },
        { title: "Relabeling & Scheduling", detail: "Repackaging, Relabeling, and high-precision Scheduling of Maintenance Plans.", icon: <RefreshCcw size={24} /> },
        { title: "Task List Standardization", detail: "Standardizing and utilizing Generic Task lists where applicable for operational efficiency.", icon: <FileStack size={24} /> },
        { title: "Standard Activity Text", detail: "Creating Standard Text for Maintenance Activities to ensure consistent communication.", icon: <FileText size={24} /> },
        { title: "PMO Guideline Adherence", detail: "Creating General Task Lists following strict PMO Big rules guidelines.", icon: <FileJson size={24} /> },
        { title: "FLOC Identification", detail: "Identifying FLOCs to create linked Maintenance Plans and Items (MP & MI).", icon: <Search size={24} /> },
        { title: "Duplicate Resolution", detail: "Comprehensive identification and remediation of duplicate FLOCs in the system.", icon: <Copy size={24} /> },
        { title: "Synchronization", detail: "Determining and scheduling new Maintenance Plans synchronized with existing dates.", icon: <CalendarClock size={24} /> }
    ];

    return (
        <div className="software-page">
            <div className="sw-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="sw-hero-overlay">
                    <div className="container">
                        <h1 className="mc-title">Preventive Maintenance</h1>
                        <p className="mc-subtitle">Data-driven maintenance strategies for zero-downtime operations.</p>
                    </div>
                </div>
            </div>

            <section className="sw-maintenance container">
                <div className="sw-section-header">
                    <h2 className="section-title">Core Maintenance Capabilities</h2>
                </div>
                <div className="maintenance-grid">
                    {maintenanceTasks.map((task, i) => (
                        <div key={i} className="maintenance-task-card">
                            <div className="task-icon-box">{task.icon}</div>
                            <div className="task-content">
                                <h3>{task.title}</h3>
                                <p>{task.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PreventiveMaintenance;
