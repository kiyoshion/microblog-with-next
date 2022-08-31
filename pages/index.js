import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>I'm a freelance engineer.</p>
      </section>

      <section>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/img/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>記事1</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/img/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>記事1</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2022</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
