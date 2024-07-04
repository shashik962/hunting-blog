
import React, { useEffect, useState } from 'react'
import styles from "../../styles/BlogPost.module.css"
import * as fs from 'fs';
// Step 1: Find the file corresponding to the slug;
// Step 2: Populate them inside the page
function Slug(props) {
  const [blog, setBlog] = useState(props);
  return (
    <div className={styles.container}>
      <main className={styles.main} >
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
            {blog && blog.content}
        </div>  
      </main>
    </div> 
  )
}

export async function getStaticPaths() {
  return {
     paths: [
       { params: { slug: 'how-to-learn-javascript' } },
       { params: { slug: 'how-to-learn-monodb' } },
       { params: { slug: 'how-to-learn-nextjs' } },
       { params: { slug: 'how-to-learn-nodejs' } },
       { params: { slug: 'how-to-learn-typescript' } }
     ],
     fallback: true
  };
}


export async function getStaticProps(context) {
  const {slug} = context.params;
  let myBlog = await fs.promises.readFile((`blogdata/${slug}.json`), 'utf-8');
  return { props: JSON.parse(myBlog) }
}

export default Slug
