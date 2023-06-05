"use client";
import React from "react";
import styles from "./footer.module.css";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className={styles.container1}>
        <h2>VENUS</h2>
        <div className={styles.container2}>
          <a href="" target="_blank" className={styles.links}>
            Whitepaper
          </a>
          <a href="" target="_blank" className={styles.links}>
            Docs
          </a>
          <a href="" target="_blank" className={styles.links}>
            Market
          </a>
        </div>
        <a href="" target="_blank" className={styles.launchBtn}>
          Launch App
        </a>
      </div>
      <hr style={{ color: "grey", border: "0.8px solid" }} />
      <div className={styles.container3}>
        <p>@{new Date().getFullYear()} Venus Protocol</p>
        <div className={styles.container4}>
          <a href="" target="_blank" className={styles.handles}></a>
          <a href="" target="_blank" className={styles.handles}></a>
          <a href="" target="_blank" className={styles.handles}></a>

          <a href="" target="_blank" className={styles.handles}>
            <GitHub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
