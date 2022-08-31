import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name ="高浜きょんし";
export const siteTitle = "Microblog with Nextjs";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/img/profile.jpg"
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.headingLg}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
