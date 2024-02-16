import React from 'react'
import Footer from './Footer'
import Headers from './Headers'
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'
import './Component.css'


// import { lazy } from 'react'

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
    <Helmet>
        
         <meta charSet="UTF-8" />
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         <meta name="author" content={author} />
         <title>{title}</title>
        
    </Helmet>


        <Headers/>
        <main style={{minHeight:'90vh'}}>
          <Toaster/>
          {children}</main>
        <Footer/>
    </div>
  )
}
Layout.defaultProps = {
    title:'Ecommerce -app',
    // description:{mobile, electronics,clothes},
    // keywords:{shop,onlineshop},
    // author:{zShop,SAA}


}

export default Layout