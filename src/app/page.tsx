import Image from "next/image";
import styles from "./page.module.css";
import { List } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <List.Root as='ol'>
          <List.Item>
            Get started by editing <code>src/app/page.tsx</code>.
          </List.Item>
          <List.Item>
            Save and see your changes instantly.
          </List.Item>
        </List.Root>
      </main>
    </div>
  );
}
