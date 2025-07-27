import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-white relative">
      {/* Arrière-plans */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400">
          Restons en contact
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Je suis ouverte à de nouvelles opportunités, des collaborations ou tout simplement un petit coucou 👋. N'hésitez pas à me contacter via les informations ci-dessous.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Infos de contact */}
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <span className="text-gray-700 text-base">zahiraelmersy@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-2xl" />
            <span className="text-gray-700 text-base">Casablanca, Maroc</span>
          </div>
        </div>

       {/* Réseaux sociaux */}
<div className="text-center">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">Retrouvez-moi sur :</h3>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-gray-700 text-lg">
    <a
      href="https://github.com/elmersyzahira"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center text-purple-500 hover:text-purple-700"
    >
      <FaGithub className="text-3xl" />
      <span className="text-sm mt-1">elmersyzahira</span>
    </a>
    <a
      href="https://www.instagram.com/elm_zizo.0?igsh=eGJna3c2NXd0bHp5"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center text-purple-500 hover:text-purple-700"
    >
      <FaInstagram className="text-3xl" />
      <span className="text-sm mt-1">@elmersyzahira</span>
    </a>
    <a
      href="https://www.linkedin.com/in/zahira-elmersy-97b3ba338/"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center text-purple-500 hover:text-purple-700"
    >
      <FaLinkedin className="text-3xl" />
      <span className="text-sm mt-1">elmersy zahira</span>
    </a>
  </div>
</div>

      </div>
    </section>
  );
}
