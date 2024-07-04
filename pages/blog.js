import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"
import Link  from 'next/link';
import * as fs from 'fs';
// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them
function Blog(props) {
  console.log("props", props);
  const [blogs, setBlogs] = useState(props.allBlogs);

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
          </main>
    </div>
    
  )
}


export async function getStaticProps() {
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlogs = [];
  for(let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8');
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }
 
  // Pass data to the page via props
  return { props: {allBlogs} }
}

export default Blog
