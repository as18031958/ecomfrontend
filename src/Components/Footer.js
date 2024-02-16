import React from 'react'
import './Component.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='text center'>
            All Right Reserved &copy; SAA Tech Pvt Ltd
        </h1>
        <p className='Footer-Link'>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Products</Link>
        </p>

    </div>
  )
}

export default Footer