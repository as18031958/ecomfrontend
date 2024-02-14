import React from 'react'
import Layout from '../Components/Layout'

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
        {/* function ContactUsPage()  */}
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>Get in touch! We'd love to hear from you.</p>
      <div className="contact-methods">
        {/* <ContactMethod icon="envelope" link="mailto:info@yourcompany.com" text="Email" /> */}
        {/* <ContactMethod icon="phone" link="tel:+1234567890" text="Phone" /> */}
        {/* Add more ContactMethod components as needed */}
      </div>
      <h2>Send us a message</h2>
      {/* <ContactForm /> */}
    </div>


    <form >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  

    </Layout>
  )
}

export default Contact