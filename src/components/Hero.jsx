import React from 'react';
import profileImage from '../images/zahira.jpg'; // remplace avec ton image
import {
  BoltIcon,
  HeartIcon,
  CodeBracketIcon
} from '@heroicons/react/24/solid'; // ou outline si tu préfères

export default function Hero() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-between px-10 md:px-20">
      {/* Bulles décoratives */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-200 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute top-16 right-20 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-70"></div>

      {/* Texte à gauche */}
      <div className="z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Salut, je suis{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400">
            Zahira El-mersy
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-600 font-medium mb-4">
          Développeuse Web Créative & Artiste Digitale
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Je conçois des expériences web belles et fonctionnelles avec passion et créativité. Je combine la vision artistique et l'expertise technique pour donner vie aux rêves numériques.
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
            <a href="#projects">Voir mes projets</a>
          </button>
          <button className="border border-purple-300 px-6 py-2 rounded-full hover:bg-purple-50 transition">
            <a href="#contact">Me contacter</a>
          </button>
        </div>
      </div>

      {/* Image de profil à droite */}
      <div className="hidden md:block z-10 relative w-[24rem] h-[24rem]">
        <img
          src={profileImage}
          alt="Zahira El-mersy"
          className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
        />

        {/* Icône haut droite */}
        <div className="absolute -top-10 -right-10 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-md">
          <CodeBracketIcon className="h-8 w-8 text-white" />
        </div>

        {/* Icône haut gauche */}
        <div className="absolute -top-8 -left-8 w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center shadow-md">
          <BoltIcon className="h-7 w-7 text-black" />
        </div>

        {/* Icône bas gauche */}
        <div className="absolute -bottom-10 left-10 w-14 h-14 bg-pink-300 rounded-full flex items-center justify-center shadow-md">
          <HeartIcon className="h-7 w-7 text-black" />
        </div>
      </div>
    </section>
  );
}
