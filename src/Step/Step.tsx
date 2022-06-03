import styles from "./Step.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.Wrapper}>{children}</div>;
};

const LeftRegion = ({ children }) => {
  return <div className={styles.LeftRegion}>{children}</div>;
};

const RightRegion = ({ children }) => {
  return <div className={styles.RightRegion}>{children}</div>;
};

export default {
  Wrapper,
  LeftRegion,
  RightRegion
};
