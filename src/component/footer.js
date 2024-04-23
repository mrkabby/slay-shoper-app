
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm">Copyright © 2024 SLAY. All rights reserved.</p>
    
        <ul className="flex justify-center mt-6 space-x-4">
          <li>
            <a href="https://www.facebook.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-facebook-f fa-lg" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-twitter fa-lg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mywebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-instagram fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;