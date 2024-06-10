
import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/BlogPost.module.css"

// Step 1: Find the file corresponding to the slug;
// Step 2: Populate them inside the page
function Slug() {
    const router = useRouter();
    console.log(router.query);
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main} >
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>  
      </main>
    </div> 
  )
}

export default Slug
