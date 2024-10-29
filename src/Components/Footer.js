// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">Follow us on:</p>
        <div className="flex justify-center space-x-4 my-2">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
        <p className="text-xs">© 2024 Pet Adoption. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
