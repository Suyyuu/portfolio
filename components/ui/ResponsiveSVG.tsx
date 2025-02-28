// components/ResponsiveSVG.tsx
import React from 'react';
import styles from './ResponsiveSVG.module.css';

const ResponsiveSVG: React.FC = () => (
  <div className={styles.svgContainer}>
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      {/* Define the stroke color */}
      <style>
        {`
          .lightPurple {
            stroke: #5f22aa; /* Light purple color */
            fill: none;
            stroke-width: 2;
          }
          .macUiTab {
            stroke: #5f22aa;
            fill: none;
            stroke-width: 2;
          }
          .divider {
            stroke: #5f22aa;
            stroke-width: 1;
          }
        `}
      </style>

      {/* Mac-like UI Tab */}
      <rect x="30" y="30" width="940" height="440" rx="20" ry="20" className="macUiTab" />
      <circle cx="55" cy="50" r="10" fill="#5f22aa" />
      <circle cx="80" cy="50" r="10" fill="#5f22aa" />
      <circle cx="105" cy="50" r="10" fill="#5f22aa" />

      {/* Divider Line */}
      <line x1="30" y1="70" x2="970" y2="70" className="divider" />

      {/* Desktop */}
      <rect x="130" y="100" width="300" height="200" className="lightPurple" />
      <text x="280" y="330" fontSize="16" textAnchor="middle" fill="#D8BFD8">Desktop</text>

      {/* Tablet */}
      <rect x="445" y="110" width="200" height="300" className="lightPurple" />
      <text x="545" y="440" fontSize="16" textAnchor="middle" fill="#D8BFD8">Tablet</text>

      {/* Mobile */}
      <rect x="760" y="100" width="120" height="250" className="lightPurple" />
      <text x="820" y="370" fontSize="16" textAnchor="middle" fill="#D8BFD8">Mobile</text>

      {/* Desktop Arrows */}
      <line x1="280" y1="200" x2="280" y2="200" className={styles.arrow}>
      </line>
      <line x1="280" y1="200" x2="280" y2="200" className={styles.arrow}>
      </line>

      {/* Tablet Arrows */}
      <line x1="545" y1="260" x2="545" y2="260" className={styles.arrow}>
        
      </line>
      <line x1="545" y1="260" x2="545" y2="260" className={styles.arrow}>
      </line>

      {/* Mobile Arrows */}
      <line x1="820" y1="225" x2="820" y2="225" className={styles.arrow}>
      </line>
      <line x1="820" y1="225" x2="820" y2="225" className={styles.arrow}>
      </line>
    </svg>
  </div>
);

export default ResponsiveSVG;
