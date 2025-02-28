import styles from './Cogs.module.css'; // We'll create this file next

const Cogs: React.FC = () => {
  return (
    <div className={styles.cogsContainer}>
      {/* Smaller Cog */}
      <img 
        className={styles.smallerCog} 
        src="/cog-loop.svg" 
        alt="Smaller Cog" 
      />

      {/* Larger Cog */}
      <img 
        className={styles.largerCog} 
        src="/cog-loop.svg" 
        alt="Larger Cog"
      />
    </div>
  );
};

export default Cogs;
