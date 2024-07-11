import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"
import Link  from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them
function Blog(props) {
      console.log("props", props);
      const [blogs, setBlogs] = useState(props.allBlogs);
      const [count, setCount] = useState(2);
      const fetchData = async () => {
            let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
            setCount(count + 2);
            let data = await d.json();
            setBlogs(data);
      };
          return (
            <div className={styles.container}>
                <main className={styles.main} >
                <InfiniteScroll
                  dataLength={blogs.length} //This is important field to render the next data
                  next={fetchData}
                  hasMore={props.allCount !== blogs.length}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
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
        </InfiniteScroll>
{/* 
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
            })} */}
          </main>
    </div>
    
  )
}


export async function getStaticProps() {
  let data = await fs.promises.readdir('blogdata');
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for(let i = 0; i < 2; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8');
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }
 
  // Pass data to the page via props
  return { props: {allBlogs, allCount} }
}

export default Blog
