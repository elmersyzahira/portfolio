import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-purple-100 to-pink-100 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image ou avatar */}
        <div className="flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
          {/* Tu peux remplacer ce div par une balise <img src="..." /> */}
          <div className="w-full h-full bg-gradient-to-tr from-purple-400 via-pink-400 to-pink-300 flex items-center justify-center text-white text-4xl font-extrabold">
            ZE
          </div>
        </div>

        {/* Contenu texte */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-4">À propos de moi</h2>
          <p className="text-gray-700 text-lg mb-4">
            Bonjour ! Je suis{' '}
            <span className="text-purple-600 font-semibold">Zahira El-mersy</span>, une
            développeuse web junior passionnée par la création de sites web élégants et faciles à utiliser.
          </p>
          <p className="text-gray-600 mb-4">
            Mon arsenal comprend{' '}
            <span className="font-semibold text-indigo-600">React</span>,{' '}
            <span className="font-semibold text-indigo-600">HTML/CSS</span>,{' '}
            <span className="font-semibold text-indigo-600">Laravel</span>, et bien d'autres technologies.
            Je m'efforce d'écrire un code propre, de créer des interfaces accessibles et des designs précis au pixel près.
          </p>
          <p className="text-gray-600">
            Je suis toujours à la recherche de nouvelles technologies à découvrir et de projets à réaliser pour progresser
            en tant que développeuse. Connectons-nous et créons des choses incroyables ensemble !
          </p>
        </div>
      </div>
    </section>
  );
}
