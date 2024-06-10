import React, { useState } from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Real-Time Tracking", content: "Monitor your inventory in real-time with our advanced tracking system." },
    { title: "Automated Reports", content: "Generate comprehensive reports automatically with our built-in tools." },
    { title: "Integration", content: "Seamlessly integrate with other platforms and tools you use." },
    { title: "User-Friendly Interface", content: "Navigate easily with our intuitive and user-friendly interface." },
  ];

  return (
    <section className="features-section">
      <div className="container4">
        <h2>Our Features</h2>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              id='btnn'
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
