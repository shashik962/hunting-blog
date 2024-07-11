import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'




function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        setName('');
        setEmail('');
        setPhone('');
        setDesc('');
    })
    .catch((error) => {
       console.error('Error: ', error);
    });
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.name == 'name') {
      setName(e.target.value);
    }else if(e.target.name == 'email') {
      setEmail(e.target.value);
    }else if(e.target.name == 'phone') {
      setPhone(e.target.value);
    }else if(e.target.name == 'desc') {
      setDesc(e.target.value);
    }
  }
  return (
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}> 
          <div className={styles.mb3}>
              <label for="inputName" className={styles.formlabel}>Name</label>
              <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name"  placeholder="Enter name" />
            </div>
            <div className={styles.mb3}>
              <label for="inputEmail1" className={styles.formlabel}>Email address</label>
              <input type="email" value={email} onChange={handleChange}   className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className={styles.mb3}>
              <label for="inputPhone" className={styles.formlabel}>Phone</label>
              <input type="text" value={phone} onChange={handleChange}  className="form-control" id="phone" name="phone" placeholder="Enter description" />
            </div>
            <div className={styles.mb3}>
              <label for="inputDesc" className={styles.formlabel}>Comments</label>
              <textarea value={desc} onChange={handleChange}  className="form-control" id="desc" name="desc" placeholder="Enter description" />
            </div>
            <button type="submit" className={styles.btnPrimary}>Submit</button>
          </form>
    </div>
  )
}

export default Contact
