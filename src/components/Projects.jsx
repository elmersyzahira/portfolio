import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaHandshake } from 'react-icons/fa';
import NouvlairImage from '../images/Nouvlair.jpg';
import TransitImage from '../images/transit.jpg';
import LivraisonImage from '../images/livraison.jpg';
import EcommerceImage from '../images/ecommerce.jpg';
import WordScrambleImage from '../images/project3.jpg';

const projects = [
  {
    title: "Nouvlair - Plateforme Éducative",
    type: "Web",
    description:
      "Plateforme interactive d'apprentissage et d'évaluation avec gestion des groupes, exercices, compétences, et une interface intuitive pour étudiants et enseignants.",
    tags: ["React", "Laravel", "MySQL"],
    color: "bg-sky-200",
    image: NouvlairImage,
  },
  {
    title: "Gestion des Dossiers Douaniers",
    type: "Web",
    description:
      "Application web dédiée à la gestion des dossiers douaniers, avec authentification, tableau de bord, et traitement efficace des documents.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    color: "bg-green-200",
    image: TransitImage,
  },
  {
    title: "Application de Livraison de Nourriture",
    type: "Web",
    description:
      "Interface utilisateur moderne pour une application de livraison de repas avec navigation fluide, affichage des produits, panier, et commandes.",
    tags: ["React", "Tailwind", "Front-End"],
    color: "bg-red-200",
    image: LivraisonImage,
  },
  {
    title: "E-Commerce - Marque de Vêtements",
    type: "Web",
    description:
      "Plateforme e-commerce en cours de développement pour une marque de vêtements, avec gestion des produits, panier, authentification et système de paiement.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "bg-pink-200",
    image: EcommerceImage,
  },
  {
    title: "Mini Jeu - Word Scramble",
    type: "Jeu",
    description:
      "Jeu de scramble de mots développé en deux versions : une simple avec JavaScript et HTML, et une autre avancée avec PHP et base de données pour les scores et l’authentification.",
    tags: ["JavaScript", "HTML", "PHP", "MySQL"],
    color: "bg-blue-200",
    image: WordScrambleImage,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-6 md:px-16 relative">
      {/* Bulles de fond */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400 mb-4">
          Projets Réalisés
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Un aperçu de mes derniers travaux, allant de sites web élégants à des applications web complexes et des solutions mobiles.
        </p>
      </div>

      {/* Grille des cartes */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 shadow-md flex flex-col justify-between ${project.color}`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover rounded-xl mb-4 border border-white shadow"
            />

            {/* Type et icône */}
            <div className="flex justify-between items-start">
              <div className="text-sm px-2 py-1 bg-white rounded-full text-gray-700 shadow">
                {project.type}
              </div>
              <FaExternalLinkAlt className="text-gray-600" />
            </div>

            {/* Contenu */}
            <div className="mt-2 mb-2">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-600 text-xs px-2 py-1 rounded-full shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-6 w-full border border-black rounded-full py-2 text-sm hover:bg-white/30 transition">
              <a href="https://github.com/elmersyzahira">Voir le code</a>
            </button>
          </div>
        ))}
      </div>

      {/* Appel à l'action */}
      <div className="mt-16 bg-white shadow-lg rounded-2xl py-8 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">Envie d’en voir plus ?</h3>
        <p className="text-gray-600 mb-6">
          Je travaille constamment sur de nouveaux projets et j'explore les dernières technologies. Consultez mon GitHub pour découvrir mes contributions les plus récentes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/elmersyzahira"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
          >
            <FaGithub /> Voir GitHub
          </a>
    
        </div>
      </div>
    </section>
  );
}
