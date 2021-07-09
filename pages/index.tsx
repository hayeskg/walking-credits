import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>walking credits</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🥾 WALKING CREDITS 🌱
        </h1>

        <p className={styles.description}>
          tread softly
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Blog</h2>
            <p>Words on engineering, technology, sustainability, agriculture and more.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Tech</h2>
            <p>Solving problems - systems and processes.</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Planet</h2>
            <p>Regenerative nature for a fairer future.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          2021 @hayeskg
        </p>
      </footer>
    </div>
  )
}
