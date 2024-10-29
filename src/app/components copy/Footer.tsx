
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

export default function Foot() {
  return (
    <div className='flex flex-col bg-slate-800 text-white'>
      <footer className='mt-auto flex justify-evenly text-2xl font-semibold px-2 py-5'>
        <a
          className='flex items-center space-x-2 hover:bg-yellow-400 p-2 rounded-md'
          href="https://www.facebook.com/mariam.latif.543"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <span>Facebook</span>
          <SlSocialFacebook />
        </a>
        <a
          className='flex items-center space-x-2 hover:bg-yellow-400 p-2 rounded-md'
          href="https://www.instagram.com/mariam.latif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <span>Instagram</span>
          <FaInstagram />
        </a>
        <a
          className='flex items-center space-x-2 hover:bg-yellow-400 p-2 rounded-md'
          href="https://github.com/maryamlatif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span>GitHub</span>
          <FaGithub />
        </a>
        <a
          className='flex items-center space-x-2 hover:bg-yellow-400 p-2 rounded-md'
          href="https://www.linkedin.com/in/maham-latif-48732927a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span>LinkedIn</span>
          <FaLinkedin />
        </a>
      </footer>
    </div>
  );
}
