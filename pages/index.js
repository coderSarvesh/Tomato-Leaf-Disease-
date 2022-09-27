import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato Disease Detection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={styles.main}>
        <h1 className={styles.title}>Tomato Leaf  Disease Detection</h1>
        <h2>Backend for the disease detection application</h2>
        <h3>Endpoints</h3>
        <h3>/late-blight</h3>
        <h3>diseasespot/bacterial-spot</h3>
      </main>

    </div>
  )
}
