import Image from "next/image";
import styles from "./scrap.module.css";

export default function Scrap() {
  return (
    <Image
      src="/scrapc.png"
      alt="A scrap of paper"
      width={500}
      height={300}
      className={styles.scrap}
    />
  );
}
