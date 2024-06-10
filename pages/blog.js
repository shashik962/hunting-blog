import React from 'react'
import styles from "../styles/Blog.module.css"
import Link  from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them
function Blog() {
  return (
    <div className={styles.container}>
        <main className={styles.main} >
              <h2>Latest Blog</h2>
              <div className={styles.blogItemh1}>
                <Link href={'/blogpost/learn-javascript'} >
                  <h3>How to learn Javascript in 2022?</h3>
                  <p>Javascript is the language used to design logic for the web</p>
                </Link>
              </div>
              <div className='blogItem'>
                <h3>How to learn Javascript in 2022?</h3>
                <p>Javascript is the language used to design logic for the web</p>
              </div>
              <div className='blogItem'>
                <h3>How to learn Javascript in 2022?</h3>
                <p>Javascript is the language used to design logic for the web</p>
              </div>
          </main>
    </div>
    
  )
}

export default Blog
