import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './site/Navbar';
import Home from './site/Home';
import SolutionPage from './site/SolutionPage';
import './index.css';

// Import solution images
import facilityImg from './assets/solutions/facility_management.png';
import propertyImg from './assets/solutions/property_management.png';
import officeImg from './assets/solutions/office_refurbishment.png';
import equipmentImg from './assets/solutions/equipment_management.png';
import assetImg from './assets/solutions/asset_management.png';
import solarImg from './assets/solutions/solar_solutions.png';
import sparesImg from './assets/solutions/spares_management.png';

// Import target images
import operationsImg from './assets/targets/seamless_operations.png';
import wellbeingImg from './assets/targets/employee_wellbeing.png';
import engagementImg from './assets/targets/employee_engagement.png';
import diversityImg from './assets/targets/diversity_execution.png';
import onestopImg from './assets/targets/onestop_service_new.png';
import auditsImg from './assets/targets/audits_compliance_new.png';

// Import target diagram images
import operationsDiagram from './assets/targets/seamless_operations_diagram.png';
import wellbeingDiagram from './assets/targets/employee_wellbeing_diagram.png';
import engagementDiagram from './assets/targets/employee_engagement_diagram.png';
import diversityDiagram from './assets/targets/diversity_execution_diagram.png';
import onestopDiagram from './assets/targets/onestop_service_diagram.png';
import auditsDiagram from './assets/targets/audits_compliance_diagram.png';




// Import presence and leads images
import chennaiImg from './assets/presence/chennai_header_enhanced.png';
import coimbatoreImg from './assets/presence/coimbatore_header_enhanced.png';


// Import Facility Gallery Images
import officeCleaningImg from './assets/facility_gallery/office_cleaning.jpg';
import factoryCleaningImg from './assets/facility_gallery/factory_cleaning.jpg';
import electricalImg from './assets/facility_gallery/electrical.jpg';
import securityImg from './assets/facility_gallery/security.png';

const facilityGallery = [
  { src: officeCleaningImg, caption: null },
  { src: securityImg, caption: null }
];

// Import Property Gallery Images
import constructionPlanningImg from './assets/property_gallery/construction_planning.png';
import siteInspectionImg from './assets/property_gallery/site_inspection.png';
import qualityCheckImg from './assets/property_gallery/quality_check.png';
import projectOversightImg from './assets/property_gallery/project_oversight.png';

const propertyGallery = [
  { src: constructionPlanningImg, caption: null },
  { src: qualityCheckImg, caption: null }
];

// Import Office Gallery Images
import workspaceDesignImg from './assets/office_gallery/workspace_design.png';
import interiorFitoutImg from './assets/office_gallery/interior_fitout.jpg';
import partitionInstallationImg from './assets/office_gallery/partition_installation.png';
import siteWorkImg from './assets/office_gallery/site_work.jpg';

const officeGallery = [
  {
    src: workspaceDesignImg,
    title: 'Modern Workspace Design',
    description: 'We create ergonomic and aesthetically pleasing workspace designs that boost productivity and employee morale. Our designs maximize space utilization while ensuring a comfortable and inspiring environment.'
  },
  {
    src: interiorFitoutImg,
    title: 'Interior Fitout & Furnishing',
    description: 'Our comprehensive fitout services cover everything from flooring and partitions to electrical and plumbing. We ensure a seamless transformation of your office space with high-quality materials and expert craftsmanship.'
  }
];

// Import Equipment Gallery Images
import mechanicalMaintenanceImg from './assets/equipment_gallery/mechanical_maintenance.png';
import digitalMonitoringImg from './assets/equipment_gallery/digital_monitoring.png';
import diagnosticTestingImg from './assets/equipment_gallery/diagnostic_testing.png';
import systemAnalysisImg from './assets/equipment_gallery/system_analysis.png';

const equipmentGallery = [
  {
    src: mechanicalMaintenanceImg,
    title: 'Mechanical Maintenance & Repair',
    description: 'Keep your machinery running at peak performance with our specialized maintenance services. We offer scheduled check-ups and emergency repairs to minimize downtime and extend equipment lifespan.'
  },
  {
    src: digitalMonitoringImg,
    title: 'Digital Monitoring & Diagnostics',
    description: 'Leverage the power of IoT and real-time data to monitor your equipment\'s health. Our digital solutions predict failures before they happen, allowing for proactive maintenance and smarter decision-making.'
  }
];

// Import Asset Gallery Images
import portfolioOverviewImg from './assets/asset_gallery/portfolio_overview.jpg';
import infrastructureAssetsImg from './assets/asset_gallery/infrastructure_assets.png';
import digitalTrackingImg from './assets/asset_gallery/digital_tracking.jpg';
import lifecycleAnalyticsImg from './assets/asset_gallery/lifecycle_analytics.png';

const assetGallery = [
  {
    src: portfolioOverviewImg,
    title: 'Real Estate Portfolio Overview',
    description: 'Gain a holistic view of your real estate assets. We assist in tracking value, managing leases, and optimizing your portfolio performance to ensure maximum return on investment.'
  },
  {
    src: infrastructureAssetsImg,
    title: 'Critical Infrastructure Assets',
    description: 'Protect and manage your critical infrastructure with our rigorous asset management protocols. We ensure regulatory compliance and operational readiness for all your essential systems.'
  }
];

// Import Solar Gallery Images
import solarInstallationTeamImg from './assets/solar_gallery/solar_installation_team.png';
import residentialSolarImg from './assets/solar_gallery/residential_solar.png';
import solarParkingImg from './assets/solar_gallery/solar_parking.jpg';
import commercialRooftopImg from './assets/solar_gallery/commercial_rooftop.png';

const solarGallery = [
  {
    src: solarInstallationTeamImg,
    title: 'Professional Installation Teams',
    description: 'Our certified installation teams ensure your solar panels are set up for maximum efficiency and safety. We handle the entire process, from structural assessment to final grid connection.'
  },
  {
    src: residentialSolarImg,
    title: 'Residential Rooftop Solutions',
    description: 'Switch to clean energy with our tailored residential solar solutions. Reduce your electricity bills and carbon footprint with high-efficiency panels designed for modern homes.'
  }
];

// Import Spares Gallery Images
import warehouseInventoryImg from './assets/spares_gallery/warehouse_inventory.png';
import partsOrganizationImg from './assets/spares_gallery/parts_organization.png';
import componentStorageImg from './assets/spares_gallery/component_storage.jpg';
import inventoryManagementImg from './assets/spares_gallery/inventory_management.png';

const sparesGallery = [
  {
    src: warehouseInventoryImg,
    title: 'Warehouse & Inventory Management',
    description: 'Optimize your stock levels with our advanced inventory management systems. We ensure you have the right spares available when needed, reducing carrying costs and preventing stockouts.'
  },
  {
    src: partsOrganizationImg,
    title: 'Organized Parts Storage',
    description: 'Implement systematic storage solutions for easy retrieval and tracking of spare parts. Our organization methods streamline maintenance workflows and improve operational efficiency.'
  }
];

// Highlights for Seamless Operations
const seamlessHighlights = [
  { icon: 'technology', title: 'Integrated Building Intelligence', description: 'Unified control systems that synthesize data from HVAC, lighting, and security for autonomous building optimization.' },
  { icon: 'analytics', title: 'Predictive Maintenance', description: 'AI-driven algorithms that forecast equipment failures before they occur, eliminating unplanned downtime.' },
  { icon: 'data', title: 'Energy & Sustainability', description: 'Real-time consumption monitoring and automated adjustments to drastically reduce carbon footprint and operational costs.' },
  { icon: 'uiux', title: 'Compliance & Risk Management', description: 'Automated documentation and workflow tracking to ensure 100% adherence to safety regulations and standards.' }
];

// Highlights for Employee Wellbeing
const wellbeingHighlights = [
  { icon: 'health', title: 'Health-Centric Spaces', description: 'Optimizing indoor air quality, acoustic comfort, and natural lighting to create a physically nurturing environment that boosts immune health.' },
  { icon: 'safety', title: 'Safety & Hygiene Protocols', description: 'Advanced sanitation workflows and touchless technologies that minimize health risks and ensure a secure, contagion-free workspace.' },
  { icon: 'ergonomics', title: 'Ergonomic Excellence', description: 'Science-backed furniture solutions and workspace layouts designed to reduce physical strain and promote long-term musculoskeletal health.' },
  { icon: 'mind', title: 'Mental Wellness Support', description: 'Dedicated biophilic zones and quiet areas specifically designed to support mental rejuvenation and help effectively manage workplace stress.' }
];

// Highlights for Employee Engagement
const engagementHighlights = [
  { icon: 'uiux', title: 'Collaborative Ecosystems', description: 'Designing fluid, open-plan layouts that break down silos and encourage spontaneous interactions and cross-team collaboration.' },
  { icon: 'culture', title: 'Cultural Alignment', description: 'Creating physical spaces that tangibly reflect your company values and brand identity, reinforcing a sense of belonging.' },
  { icon: 'productivity', title: 'Productivity Boosters', description: 'Incorporating focused work zones and distraction-free areas alongside social spaces to support diverse working styles.' },
  { icon: 'amenities', title: 'Lifestyle Amenities', description: 'Providing high-quality onsite amenities that enhance work-life balance and make the office a destination, not just a workplace.' }
];

// Highlights for Diversity in Execution
const diversityHighlights = [
  { icon: 'accessibility', title: 'Inclusive Planning', description: 'Going beyond basic compliance to create universally accessible spaces that welcome individuals of all physical abilities.' },
  { icon: 'diverse', title: 'Supplier Diversity', description: 'Actively partnering with minority-owned, women-owned, and local businesses to drive economic inclusion in our supply chain.' },
  { icon: 'team', title: 'Cross-Functional Expertise', description: 'Assembling project teams with varied backgrounds and skill sets to bring fresh, innovative perspectives to every challenge.' },
  { icon: 'global', title: 'Global Perspectives', description: 'Leveraging our international experience to incorporate global best practices while respecting and adapting to local cultural nuances.' }
];

// Highlights for One-stop for Everything
const onestopHighlights = [
  { icon: 'integration', title: 'Integrated Services', description: 'Seamlessly combining Facility Management, Property Management, and Project Execution under one roof for holistic asset care.' },
  { icon: 'contact', title: 'Single Point of Contact', description: 'Simplifying communication with a dedicated account manager who oversees all aspects of your service delivery, eliminating runarounds.' },
  { icon: 'cost', title: 'Cost Efficiency', description: 'Bundling services to significantly reduce administrative overhead and leverage economies of scale for better pricing.' },
  { icon: 'speed', title: 'Rapid Response', description: 'A unified team structure allows for faster decision-making and quicker mobilization of resources to address any issue.' }
];

// Highlights for Audits and Compliance
const auditsHighlights = [
  { icon: 'compliance', title: 'Regulatory Adherence', description: 'Ensuring 100% compliance with all local, state, and national regulations to protect you from legal and financial risks.' },
  { icon: 'safety', title: 'Safety Standards', description: 'Implementing zero-tolerance safety protocols and continuous training to maintain a secure environment for all occupants.' },
  { icon: 'reporting', title: 'Transparent Reporting', description: 'Providing real-time dashboards and detailed audit trails so you have complete visibility into your compliance status.' },
  { icon: 'risk', title: 'Risk Mitigation', description: 'Proactive identification and remediation of potential liabilities before they become critical issues, safeguarding your reputation.' }
];

// ... existing code ...
// Clients real images
import ramaniamGreetaReal from './assets/clients/ramaniam_greeta_real.png';
import ramaniamBaidReal from './assets/clients/ramaniam_baid_real.png';
// Hero image
import clientsHero from './assets/clients/clients_header.png';

import Footer from './site/Footer';

import AboutUs from './site/AboutUs';
import Owners from './site/Owners';
import TargetPage from './site/TargetPage';
import PrivacyPolicy from './site/PrivacyPolicy';
import TermsOfService from './site/TermsOfService';
import MaterialCoding from './site/SoftwarePlatform/MaterialCoding';
import BOM from './site/SoftwarePlatform/BOM';
import AssetManagementSoftware from './site/SoftwarePlatform/AssetManagementSoftware';
import PreventiveMaintenance from './site/SoftwarePlatform/PreventiveMaintenance';
import ScrollToTop from './site/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/clients" element={<SolutionPage
            title="Our Valued Clients"
            image={clientsHero}
            content="We are proud to partner with visionary leaders in the industry. delivering excellence and innovation in every project."
            galleryTitle="Our Clients"
            gallery={[
              {
                src: ramaniamGreetaReal,
                title: "Ramaniam Greeta",
                description: "Developed by Ramaniyam Real Estates Pvt Ltd., Greeta is a commercial building located in the IT corridor of Chennai, Perungudi OMR. It has a total built up area of 2,15,000sq.ft. comprising of 2 Phases, Phase I & Phase II. The project is well equipped with modern facilities and provides ample in-house parking facility with excellent accessibility through public transport. Phase I This block has a total built-up area of ~1,88,000 sq.ft. across 3 floors with one level of stilt parking and a typical floor area of~47,000sq.ft. It is occupied by Rapid Acceleration, SmartAudit Services, OYO Business Centre and Eureka Outsourcing Solutions."
              },
              {
                src: ramaniamBaidReal,
                title: "Ramaniam Baid Hi-Tech",
                description: "Baid Hi Tech Park is a building ideally located in Thiruvanmiyur. It is easily accessible by public transport systems and is close to Thiruvanmiyur railway station. Developed by Ramaniyum Real Estate Pvt. Ltd., this complex offers dedicated space for IT/ITES companies. It has a total built up area of ~82,800 sq.ft. across 9 floors with 1 basement for parking. It is conveniently close to renowned hotels, ECR Beach, residential areas, transport hubs, railway station and schools. Occupiers are OptiSol Business Solutions Pvt. Ltd., Relationship Science India Pvt. Ltd.,TNQ Books and Journals Pvt. Ltd., etc."
              }
            ]}
          />} />
          <Route path="/solutions/facility-property-management" element={<SolutionPage title="Facility & Property Management" image={facilityImg} gallery={[
            // ... existing code ...
            {
              src: officeCleaningImg,
              title: "Facility Management",
              description: "Our comprehensive facility management includes rigorous cleaning protocols, security surveillance, and routine maintenance. We ensure your premises are pristine, safe, and fully operational at all times."
            },
            {
              src: constructionPlanningImg,
              title: "Property Management",
              description: "We handle the complexities of property management so you don't have to. From tenant relations and lease administration to strategic construction planning and quality checks, we maximize your property's value."
            }
          ]} content="Comprehensive solutions ensuring your facilities run efficiently while maximizing property value through strategic management." />} />
          <Route path="/solutions/office-refurbishment" element={<SolutionPage title="Office Refurbishment" image={officeImg} gallery={officeGallery} content="Transform your workspace with our Office Refurbishment services. We design and build modern, efficient, and inspiring, work environments." />} />
          <Route path="/solutions/equipment-management" element={<SolutionPage title="Equipment Management" image={equipmentImg} gallery={equipmentGallery} content="Ensure your critical equipment is always operational with our Equipment Management solutions. We handle maintenance, repairs, and lifecycles." />} />
          <Route path="/solutions/asset-management" element={<SolutionPage title="Asset Management" image={assetImg} gallery={assetGallery} content="Optimize your asset portfolio with our Asset Management strategies. We help you track, value, and leverage your physical assets effectively." />} />
          <Route path="/solutions/solar-solutions" element={<SolutionPage title="Solar Solutions" image={solarImg} gallery={solarGallery} content="Embrace sustainability with our Solar Solutions. We design, install, and maintain solar energy systems to reduce your carbon footprint and costs." />} />
          <Route path="/solutions/spares-management" element={<SolutionPage title="Spares Management" image={sparesImg} gallery={sparesGallery} content="Never run out of critical parts. Our Spares Management service ensures you have the right inventory at the right time to minimize downtime." />} />

          <Route path="/target/seamless-operations" element={<TargetPage title="Seamless Building Operations" image={operationsImg} highlights={seamlessHighlights} content="We ensure your building operations are seamless, integrated, and efficient. Minimizing disruptions and maximizing productivity for your occupants." />} />
          <Route path="/target/employee-wellbeing" element={<TargetPage title="Employee Wellbeing" image={wellbeingImg} highlights={wellbeingHighlights} content="Prioritizing employee wellbeing through healthy, safe, and comfortable environments. We help create spaces where your team can thrive." />} />
          <Route path="/target/employee-engagement" element={<TargetPage title="Employee Engagement" image={engagementImg} highlights={engagementHighlights} content="Fostering employee engagement with collaborative and inspiring workspaces. Our solutions encourage interaction and creativity." />} />
          <Route path="/target/diversity-execution" element={<TargetPage title="Diversity in Execution" image={diversityImg} highlights={diversityHighlights} content="We bring diverse perspectives and expertise to every project execution. Ensuring innovative and inclusive solutions for your needs." />} />
          <Route path="/target/onestop-service" element={<TargetPage title="One-stop for Everything" image={onestopImg} highlights={onestopHighlights} content="Your one-stop destination for all facility and property management needs. We streamline processes to save you time and effort." />} />
          <Route path="/target/audits-compliance" element={<TargetPage title="Audits and Compliance" image={auditsImg} highlights={auditsHighlights} content="Rigorous audits and compliance checks to ensure your facilities meet all standards and regulations. Safety and quality are our top priorities." />} />

          <Route path="/presence/chennai" element={<SolutionPage title="Chennai" image={chennaiImg} map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9705395297065!2d80.1384298745457!3d12.909615016235257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0077afcb57%3A0xd85c80c9fddc5506!2sAnu%20Arches%20SK%20Builders!5e0!3m2!1sen!2sus!4v1765799710529!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>} content="Our headquarters and central hub in Chennai. We have been serving the city with dedication and excellence, managing premium properties and facilities." />} />
          <Route path="/presence/coimbatore" element={<SolutionPage title="Coimbatore" image={coimbatoreImg} map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.034677099486!2d77.0215713401318!3d11.000410240157818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8574152e5177d%3A0xead86bc3595231c1!2sSinganallur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1765816496211!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>} content="Expanding our footprint to Coimbatore, the Manchester of South India. Delivering top-tier facility and property management solutions to the region." />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/software/material-coding" element={<MaterialCoding />} />
          <Route path="/software/bom" element={<BOM />} />
          <Route path="/software/asset-management" element={<AssetManagementSoftware />} />
          <Route path="/software/preventive-maintenance" element={<PreventiveMaintenance />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

