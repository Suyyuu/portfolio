import styles from './HexagonalGrid.module.css';

const HexagonalGrid: React.FC = () => {
  return (
    <div className={styles.hexaContainer}>

      <div className={styles.hexGridContainer}>

        <div className={styles.hex}>
          <img src="/tailwind-css-2.svg" alt="TailwindCSS" />
        </div>
        <div className={styles.hex}>
          <img
            src="/nextjs-icon.svg"
            alt="Square"
          />
        </div>

        
        <div className={styles.hex}></div>
        <div className={styles.hex}>
          <img src="/fastapi-1.svg" alt="Fast-API" />
        </div>
        <div className={styles.hex}>
          <img src="/react-2.svg" alt="React" />
        </div>

        
        <div className={styles.hex}></div>
        <div className={styles.hex}>
          <img
            src="/jest.svg"
            alt="X"
          />
        </div>
        <div className={styles.hex}>
          <img
            src="/figma-icon.svg"
            alt="Apple"
          />
        </div>
        <div className={styles.hex}></div>

        {/* Column 4: Google, Empty */}
        <div className={styles.hex}>
          <img
            src="/docker.svg"
            alt="Google"
          />
        </div>
        <div className={styles.hex}>
        <img
            src="/giticon.svg"
            alt="Google"
          />
        </div>
      </div>
    </div>
  );
};

export default HexagonalGrid;
