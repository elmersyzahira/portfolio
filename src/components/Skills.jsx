import React, { useState } from 'react';

const skills = {
  'Front-end': [
    { name: 'HTML', icon: '/skills/html5.svg' },
    { name: 'CSS', icon: '/skills/css.svg' },
    { name: 'JavaScript', icon: '/skills/javascript.svg' },
    { name: 'React', icon: '/skills/react.svg' },
    { name: 'Redux', icon: '/skills/redux.svg' },
    { name: 'Bootstrap', icon: '/skills/bootstrap.svg' },
    { name: 'Tailwind CSS', icon: '/skills/tailwindcss.svg' },
  ],
  'Back-end': [
    { name: 'Laravel', icon: '/skills/laravel.svg' },
    { name: 'MySQL', icon: '/skills/mysql.svg' },
    { name: 'MongoDB', icon: '/skills/mongodb.svg' },
    { name: 'Express JS', icon: '/skills/express.svg' },
    { name: 'Node JS', icon: '/skills/nodedotjs.svg' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: '/skills/git.svg' },
  ],
  Design: [
    { name: 'Figma', icon: '/skills/figma.svg' },
    { name: 'Responsive Design', icon: '/skills/bootstrap.svg' },
  ],
};

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState('Front-end');

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-white relative">
      {/* Background flou */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400">
          Skills & Expertise
        </h2>
      </div>

      {/* Category buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              active === cat
                ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills[active].map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
