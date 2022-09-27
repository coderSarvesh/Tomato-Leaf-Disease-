import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'

const slug = () => {    
      const [disease, setDisease] = useState()
      const router = useRouter();
      useEffect(() => {
            if(!router.isReady) return;
            const { slug } = router.query;
          fetch(`http://localhost:3000/api/getdisease?slug=${slug}`).then((a) => {
              return a.json();
          }).then((parsed) => {
              setDisease(parsed)
          })
      }, [router.isReady])

      return (
            <div className={styles.container}>
                  <main className={styles.main}>
                        <h1>{disease && disease.name}</h1>
                        <p>{disease && disease.about}</p>
                        <p>{disease && disease.remedy}</p>
                  </main>
            </div>
      )
}


export default slug;
// const slug = () => {
//       const router = useRouter();
//       const  slug  = router.query;
// };