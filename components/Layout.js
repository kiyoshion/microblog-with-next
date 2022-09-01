import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name ="高浜きょんし";
export const siteTitle = "Microblog with Nextjs";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <img
            src="/img/img.jpg"
            className={utilStyles.borderCircle}
            width="120"
          />
          </>
        ) : (
          <img
          src="/img/img.jpg"
          className={utilStyles.borderCircle}
          width="80"
        />
        )}
        <Link href="/">
          <h1 className={utilStyles.headingLg}>{name}</h1>
        </Link>
    </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">Home</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
