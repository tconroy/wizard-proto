import { FC, useEffect, useState } from "react";
import styles from "./SitePreview.module.css";

interface SitePreviewProps {
  hidden?: boolean;
}

const SitePreview: FC<SitePreviewProps> = ({ hidden }) => {
  return (
    <div
      className={styles.Root}
      style={{
        display: hidden ? "none" : "flex"
      }}
    >
      <iframe
        title="derp"
        src="https://enable-cors.org/"
        className={styles.Frame}
      />
    </div>
  );
};

export default SitePreview;
