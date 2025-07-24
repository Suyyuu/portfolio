import React from "react";
import styles from "./IntegrationCard.module.css";

const IntegrationCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <h2>Backend Alchemy.</h2>
      <p>Bridging the Gaps, Crafting Seamless Integrations.</p>
      <div className={styles.integrations}>
        <div className={styles.line}></div>
        <div className={styles.integrationItem}>
          <img src="/socket-io.svg" alt="SocketIO" /> SocketIO
        </div>
        <div className={styles.integrationItem}>
          <img src="/fastapi-1.svg" alt="FastAPI" /> FastAPI
        </div>
        <div className={styles.integrationItem}>
          <img src="/kafka.svg" alt="Kafka" /> Kafka
        </div>
        <div className={styles.integrationItem}>
          <img src="/ex.svg" alt="Express" /> Express
        </div>
        <div className={styles.integrationItem}>
          <img src="/rest-api.svg" alt="RestAPI" /> Rest API
        </div>
        <div className={styles.integrationItem}>
          <img src="/trpc.svg" alt="trpc" /> tRPC
        </div>
        <div className={styles.integrationItem}>
          <img src="/sentry-3.svg" alt="JavaScript" /> Sentry
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
