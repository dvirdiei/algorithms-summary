import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './memes.module.css';

export default function Memes() {
  return (
    <Layout
      title="מימס של אלגוריתמים"
      description="מימס מצחיקים על אלגוריתמים וסיבוכיות">
      <div className={styles.memesPage}>
       

        <main className={styles.memesContainer}>
          <div className={styles.memeGrid}>
            <div className={styles.memeCard}>
              <img src={require('@site/static/img/memes/meme1.png').default} alt="מים אלגוריתמים" />
            </div>

            <div className={styles.memeCard}>
              <img src={require('@site/static/img/memes/MemeKing(88).png').default} alt="מים אלגוריתמים" />
            </div>

            <div className={styles.memeCard}>
              <img src={require('@site/static/img/memes/MemeKing(89).png').default} alt="מים אלגוריתמים" />
            </div>

            <div className={styles.memeCard}>
              <img src={require('@site/static/img/memes/MemeKing(90).png').default} alt="מים אלגוריתמים" />
            </div>

            <div className={styles.memeCard}>
              <img src={require('@site/static/img/memes/MemeKing(91).png').default} alt="מים אלגוריתמים" />
            </div>
          </div>


        </main>
      </div>
    </Layout>
  );
}
