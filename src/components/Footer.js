// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-dark text-center py-3 mt-5">
    <div className='text-light'>
      <h2 className='text-light'>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to contact us:</p>
      <ul style={{ listStyleType: 'none' }}>
        <li>Email: Ist@education.com</li>
        <li>Phone: +254456897890</li>
        <li>Address: Mpaka Road, Nairobi, Kenya</li>
      </ul>
    </div>
      <div className="container text-light">
        &copy; {new Date().getFullYear()} <span className='text-danger'>Institute of Software Technologies</span> All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;