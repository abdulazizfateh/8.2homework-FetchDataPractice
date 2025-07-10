import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site_footer bg-gray-50 border-t border-gray-200'>
      <div className="container mx-auto">
        <div className='footer_wrapper h-16 flex items-center justify-center'>
          <Link to={"https://dummyjson.com/"} className='text-[#00a6f5]'>DummyJSON data</Link>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer);