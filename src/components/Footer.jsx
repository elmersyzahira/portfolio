import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Zahira El-mersy. All rights reserved.</p>
        
        <div className="flex gap-5 text-xl text-purple-500">
          <a href="https://github.com/elmersyzahira" target="_blank" rel="noreferrer" className="hover:text-purple-700 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/elm_zizo.0?igsh=eGJna3c2NXd0bHp5" target="_blank" rel="noreferrer" className="hover:text-purple-700 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/zahira-elmersy-97b3ba338/" target="_blank" rel="noreferrer" className="hover:text-purple-700 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
