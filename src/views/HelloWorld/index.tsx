import styles from "./index.module.scss";
import Header from "../Header";
import { Button } from "@arco-design/web-react";

export default () => {
  const a = 1;
  if (a == 1) {
    console.log("123");
  }
  return (
    <>
      <Header></Header>
      <div className={styles.content}>Hello World</div>
      <Button type='primary'>Language</Button>
    </>
  );
};
