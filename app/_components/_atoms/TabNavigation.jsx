"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function TabNavigation({ tabs }) {
  const [selectedTab, setSelectedTab] = useState( tabs[0].label);

  const renderContent = () => {
    const currentTab = tabs.find(tab => tab.label === selectedTab);
    return currentTab ? currentTab.content : null;
  };

  return (
    <div>
      {/* Mobile Dropdown */}
      <div className="sm:hidden">
      
        <label htmlFor="Tab" className="sr-only">Tab</label>
    
        <select
          id="Tab"
          className="w-full rounded-md border-gray-200"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >

          {tabs.map(tab => (
            <option key={tab.label} value={tab.label}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:block">
        <nav className="flex" aria-label="Tabs">
          {tabs.map(tab => (
            <Link
              key={tab.label}
              href="#"
              onClick={(e) => {e.preventDefault(); setSelectedTab(tab.label)}}
              className={`shrink-0 max-w-xs rounded-lg p-2 text-sm font-medium ${
                selectedTab === tab.label
                  ? 'bg-sky-100 text-sky-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}
