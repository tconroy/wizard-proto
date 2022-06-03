import React, { PropsWithChildren } from "react";
import styles from "./Wizard.module.css";

const Root: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.Root}>{children}</div>;
};

const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.Header}>{children}</div>;
};

const Body: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.Body}>{children}</div>;
};

const Footer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.Footer}>{children}</div>;
};

export type NextButtonProps = PropsWithChildren<{
  disabled: boolean;
  onClick: () => void;
}>;

const NextButton: React.FC<NextButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
};

export type PrevButtonProps = PropsWithChildren<{
  disabled: boolean;
  onClick: () => void;
}>;

const PreviousButton: React.FC<PrevButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
};

export type ProgressIndicatorProps = {
  stepNames: Array<string>;
  currentIndex: number;
};

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  stepNames,
  currentIndex
}) => {
  return (
    <ol className={styles.Progress}>
      {stepNames.map((stepName, index) => {
        const currentStep = index === currentIndex;

        return (
          <li
            key={stepName}
            className={`${styles.StepName}, ${
              currentStep ? styles.Current : undefined
            }`}
          >
            {stepName}
          </li>
        );
      })}
    </ol>
  );
};

export default {
  Root,
  Header,
  Body,
  Footer,
  NextButton,
  PreviousButton,
  ProgressIndicator
};
