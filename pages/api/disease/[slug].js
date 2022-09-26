import React from 'react';
import { useRouter } from 'next/router'

const slug = () => {
      const router = useRouter();
      const { slug } = router.query;

      return <div className={styles.container}>
            <main className={styles.main}>
                  <h1 className={styles.title}>{slug}</h1>
                  <p>JS is a popular server/clinet side language</p>
            </main>
      </div>
};

export default slug;