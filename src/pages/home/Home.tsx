import { useState } from "react";

import classNames from "classnames";

import styles from "./Home.module.scss";
import {
  AvatarMichelle,
  Drawers,
  IconFacebook,
  IconPinterest,
  IconShare,
  IconTwitter,
} from "../../assets/images";

const Home = () => {
  const [activeShare, setActiveShare] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <img className={styles.heroImage} src={Drawers} alt="drawers" />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <h2 className={styles.desc}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </h2>
          <div className={styles.footer}>
            <div className={styles.author}>
              <img
                className={styles.authorImage}
                src={AvatarMichelle}
                alt="avatar-michelle"
              />
              <div className={styles.info}>
                <span className={styles.name}>Michelle Appleton</span>
                <span className={styles.date}>28 Jun 2020</span>
              </div>
            </div>
            <div
              className={classNames({
                [styles.share]: true,
                [styles.active]: activeShare,
              })}
            >
              <button
                onClick={() => setActiveShare((prev) => !prev)}
                className={styles.shareBtn}
              >
                <img src={IconShare} alt="icon-share" />
              </button>
              <div className={styles.shareActive}>
                <div className={styles.left}>
                  <span className={styles.text}>Share</span>
                  <button>
                    <img src={IconFacebook} alt="icon-facebook" />
                  </button>
                  <button>
                    <img src={IconTwitter} alt="icon-twitter" />
                  </button>
                  <button>
                    <img src={IconPinterest} alt="icon-pinterest" />
                  </button>
                </div>
                <div className={styles.right}>
                  <button onClick={() => setActiveShare(false)}>
                    <img src={IconShare} alt="icon-share" />
                  </button>
                </div>
              </div>
              <span className={styles.triangle}>&#9658;</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
