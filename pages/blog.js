import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"
import Link  from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them
function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      console.log('useEffect is running!');
      fetch('http://localhost:3001/api/blogs').then((a) => {
        return a.json();
      }).then((parsed) => {
          console.log(parsed);
          setBlogs(parsed);
      });
  }, [])
  return (
    <div className={styles.container}>
        <main className={styles.main} >
        <h2>Latest Blog</h2>
            {blogs.map((blogitem) => {
              return (
                <div  key={blogitem.title}>
                  <Link href={`/blogpost/${blogitem.slug}`} >
                    <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                    <p className={styles.blogItemp}>{blogitem.content.substr(0,400)}</p>
                  </Link>
                </div>
              )
            })}
              
              {/* <div className={styles.blogItemh1}>
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
              </div> */}
          </main>
    </div>
    
  )
}

export default Blog
