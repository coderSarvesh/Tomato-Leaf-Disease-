import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My First Njs APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting CODER's</h1>
        <p>A Blog by the coders for the coders</p>
        <div>
          <h2>Popular BLOGS</h2>
          <h3>What is js ? Its Significance</h3>
          <p>JS is a popular server/clinet side language</p>
        </div>

      </main>

    </div>
  )
}
