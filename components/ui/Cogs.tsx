import styles from './Cogs.module.css';

const Cogs: React.FC = () => {
  return (
    <div className={styles.cogsContainer}>
      <img 
        className={styles.smallerCog} 
        src="/cog-loop.svg" 
        alt="Smaller Cog" 
      />
      <img 
        className={styles.largerCog} 
        src="/cog-loop.svg" 
        alt="Larger Cog"
      />
    </div>
  );
};

export default Cogs;
