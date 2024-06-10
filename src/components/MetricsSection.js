import React from 'react';
import { FaChartLine, FaBox, FaUserShield, FaClock } from 'react-icons/fa';
import './MetricsSection.css';

const MetricsSection = () => {
  return (
    <section className="metrics-section">
      <div className="container2">
        <h2>Why Choose CleverBooks?</h2>
        <div className="metrics">
          <div className="metric">
            <FaChartLine size={50} className='icon'/>
            <h3>Data-Driven Insights</h3>
            <p>Make informed decisions with real-time data analytics.</p>
          </div>
          <div className="metric">
            <FaBox size={50} className='icon'/>
            <h3>Efficient Management</h3>
            <p>Streamline your inventory processes effortlessly.</p>
          </div>
          <div className="metric">
            <FaUserShield size={50} className='icon'/>
            <h3>Enhanced Security</h3>
            <p>Protect your inventory with our advanced security features.</p>
          </div>
          <div className="metric">
            <FaClock size={50} className='icon'/>
            <h3>Save Time</h3>
            <p>Automate routine tasks and focus on growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
