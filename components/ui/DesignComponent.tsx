import styles from './DesignComponent.module.css';

const DesignComponent: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.card} ${styles.design}`}>
        <svg
          className={styles.fullSizeSvg} // Apply full-size styling
          viewBox="85.72934075342465 157.728 395.6328767123287 142.56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="background-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(14, 15, 42)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(34, 26, 58)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <rect width="600" height="300" fill="transparent" />

          <g className={`${styles.device} ${styles.desktop}`}>
            <image x="280" y="175" width="200" height="150" href="/desktop1.png" />
          </g>

          <g className={`${styles.device} ${styles.tablet}`}>
            <image x="90" y="140" width="150" height="200" href="/tab2.png" />
          </g>

          <g className={`${styles.device} ${styles.phone}`}>
            <image x="220" y="220" width="80" height="150" href="/mobile1.png" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DesignComponent;
