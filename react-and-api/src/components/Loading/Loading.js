import React from "react";
import styles from "./Loading.module.css";
import LoadingGif from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.container__loadingImg}
        src={LoadingGif}
        alt="loading shows"
      />
      <p className={styles.container__text}>Loading Shows...</p>
    </div>
  );
};

export default Loading;
