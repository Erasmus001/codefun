import React, { useState } from 'react'
import styles from './ContactUs.module.css'
import Mail from '../../assets/svg/newsletter-academy.svg'
import { Header } from '../../Exports/exports'

const ContactUs = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleForm = (e) => {
    e.preventDefault()

    console.log("Fullname ==>", fullname);
    console.log("Email ==>",email);
    console.log("Phone ==>",phone);
    console.log("Subject ==>",subject);
    console.log("Message ==>",message);


    setFullname("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
    <>
      <Header />

      <div className={styles.contact_us}>
        <div className={styles.contact_banner}>
          <h3>Contact Us</h3>
        </div>

        <div className={styles.contact_form}>
          <form className={styles.form} onSubmit={handleForm}>

            <div className={styles.form_hd}>
              <div className={styles.form_hd_txt}>
                <h3>Contact Us</h3>
                <p>If you have any questions about <span>Codefun</span>, please fill the form below. We will get back to you within 24 hours.</p>
              </div>
              <div className={styles.form_hd_messageIcon}>
                <img src={Mail} alt='' />
              </div>
            </div>

            <div className={styles.form_control}>
              <div className={styles.input_wrapper}>
                <div className={styles.form_group}>
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" id='fullname'
                    name='fullname'
                    required
                    placeholder="What's your name?"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="email">Email</label>
                  <input type="email"
                    id='email'
                    name='email'
                    required
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.input_wrapper}>
                <div className={styles.form_group}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel"
                    id='phone'
                    name='phone number'
                    required
                    placeholder="+0 (123) 56789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text"
                    id='subject'
                    name='subject'
                    required
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.text_form}>
                <label htmlFor="text-message">Message</label>
                <textarea name="text-message"
                  id="text-message"
                  cols="30"
                  rows="10"
                  required
                  placeholder='What can we help you with? Feel free to be as descriptive as possible...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className={styles.submit}>
                <button type='submit' onClick={handleForm}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs