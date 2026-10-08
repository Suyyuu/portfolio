import styles from './HexagonalGrid.module.css';

const HexagonalGrid: React.FC = () => {
  return (
    <div className={styles.hexaContainer}>
      <div className={styles.hexGridContainer}>
        {/* Row 1 */}
        <div className={styles.hex} title="Tailwind CSS">
          <img src="/tailwind-css-2.svg" alt="TailwindCSS" />
        </div>
        <div className={styles.hex} title="Next.js">
          <img src="/nextjs-icon.svg" alt="Next.js" />
        </div>

        {/* Row 2 */}
        <div className={styles.hex} title="Python">
          <img src="/python.svg" alt="Python" />
        </div>
        <div className={styles.hex} title="Django">
          <img src="/django.svg" alt="Django" />
        </div>
        <div className={styles.hex} title="React">
          <img src="/react-2.svg" alt="React" />
        </div>

        {/* Row 3 */}
        <div className={styles.hex} title="Flutter">
          <img src="/flutter.svg" alt="Flutter" />
        </div>
        <div className={styles.hex} title="PostgreSQL">
          <img src="/postgresql.svg" alt="PostgreSQL" />
        </div>
        <div className={styles.hex} title="Redis">
          <img src="/redis.svg" alt="Redis" />
        </div>
        <div className={styles.hex} title="Docker">
          <img src="/docker.svg" alt="Docker" />
        </div>

        {/* Row 4 */}
        <div className={styles.hex} title="Git">
          <img src="/giticon.svg" alt="Git" />
        </div>
        <div className={styles.hex} title="Jest">
          <img src="/jest.svg" alt="Jest" />
        </div>
      </div>
    </div>
  );
};

export default HexagonalGrid;
