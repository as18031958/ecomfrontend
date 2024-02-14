import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout title={'Page Not found'}>
        <div className='pnf'>
        <h1 style={{color:"magenta"}}>404</h1>
        <h2>Sorry for the Inconvenience</h2>
        <Link to='/'>GO BACK</Link>
        </div>

    </Layout>
  )
}

export default Pagenotfound