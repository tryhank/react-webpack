import Logo from "@/assets/imgs/logo.svg";
import Apenft from "@/assets/imgs/icon-white-apenft.svg";
import Discord from "@/assets/imgs/icon-white-discord.svg";
import Twitter from "@/assets/imgs/icon-white-twitter.svg";

import styles from "./index.module.scss";

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={Logo} />
      </div>
      <div className={styles.right}>
        <img src={Apenft} />
        <img src={Discord} />
        <img src={Twitter} />
      </div>
    </header>
  );
};
