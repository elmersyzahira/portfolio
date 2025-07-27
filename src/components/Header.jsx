import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 md:px-16 py-4 border-b bg-white shadow-md z-50">
      <h1 className="text-xl font-bold text-purple-600">Zahira EL-Mersy</h1>
      <nav className="space-x-6 text-sm md:text-base text-gray-700 font-medium">
        <a href="#home" className="hover:text-purple-500">Accueil</a>
        <a href="#about" className="hover:text-purple-500">À propos</a>
        <a href="#projects" className="hover:text-purple-500">Projets</a>
        <a href="#skills" className="hover:text-purple-500">Compétences</a>
        <a href="#contact" className="hover:text-purple-500">Contact</a>
      </nav>
    </header>
  );
}
