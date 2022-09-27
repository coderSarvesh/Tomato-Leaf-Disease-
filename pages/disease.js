import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Disease = () => {
    const [disease, setDisease] = useState([])
    useEffect(() => {
        console.log("I run once");
        // fetch('http://localhost:3000/api/getdisease').then((a) => {
        fetch('http://localhost:3000/api/diseases').then((a) => {
            return a.json();
        }).then((parsed) => {
            // console.log(parsed);
            setDisease(parsed)
        })
    }, [])

    return (
        <div className={styles.container}>
            <main >
                {disease.map((diseaseitem) => {
                    return <div key={diseaseitem.name}>
                        <Link href={`/diseasespot/${diseaseitem.slug}`}>
                            <h3>{diseaseitem.name}</h3></Link>
                        <p>{diseaseitem.about.substr(0,300)}</p>
                        <p>{diseaseitem.remedy.substr(0,300)}</p>
                    </div>
                })}
            </main>
        </div>
    )
}

export default Disease