import React from 'react'
import Layout from '../Components/Layout'



const About = () => {
  return (
    <>
    <Layout title={'About us'}>
    
    <div className="about-us-page">
      <section className="hero-section">
        <h1 className="title">Welcome to [Your Company Name]!</h1>
        <p className="paragraph">We are a [industry] company dedicated to [mission statement].</p>
        {/* <img src="hero-image.jpg" alt="Company logo or relevant image" /> */}
      </section>
      <section className="content-section">
        <h2>Our Story</h2>
        <p className="paragraph">
          [Your company name] was founded in [year] by [founders] with the vision of [vision statement]. Since then, we have grown to a team of [number] passionate individuals who are committed to [values].
        </p>
        <h2>What We Do</h2>
        <p className="paragraph">
          We offer a wide range of [products or services] that help [target audience] [benefits]. We are known for our [unique selling propositions].
        </p>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-member-card">
          {/* <img src="team-member-1.jpg" alt="Team member 1 photo" className="team-member-image" /> */}
          <div className="team-member-info">
            <h3>[Team member 1 name]</h3>
            <p>[Team member 1 position]</p>
          </div>
        </div>
        {/* Add more team member cards here */}
      </section>
    </div>
  

    </Layout>
    </>
  )
}

export default About