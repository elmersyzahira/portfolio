// import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 px-6 md:px-16 bg-white relative">
//       {/* Arrière-plans */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
//       <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400">
//           Restons en contact
//         </h2>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           Je suis ouverte à de nouvelles opportunités, des collaborations ou tout simplement un petit coucou 👋. N'hésitez pas à me contacter via les informations ci-dessous.
//         </p>
//       </div>

//       <div className="max-w-3xl mx-auto space-y-8">
//         {/* Infos de contact */}
//         <div className="space-y-6 text-center">
//           <div className="flex items-center justify-center gap-4">
//             <FaEnvelope className="text-purple-500 text-2xl" />
//             <span className="text-gray-700 text-base">zahiraelmersy@gmail.com</span>
//           </div>

//           {/* <div className="flex items-center justify-center gap-4"> */}
//             <FaMapMarkerAlt className="text-purple-500 text-2xl" />
//             <span className="text-gray-700 text-base">Casablanca, Maroc</span>
//           </div>
//         </div>

//        {/* Réseaux sociaux */}
// <div className="text-center">
//   <h3 className="text-lg font-semibold text-gray-700 mb-4">Retrouvez-moi sur :</h3>
//   <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-gray-700 text-lg">
//     <a
//       href="https://github.com/elmersyzahira"
//       target="_blank"
//       rel="noreferrer"
//       className="flex flex-col items-center text-purple-500 hover:text-purple-700"
//     >
//       <FaGithub className="text-3xl" />
//       <span className="text-sm mt-1">elmersyzahira</span>
//     </a>
//     <a
//       href="https://www.instagram.com/elm_zizo.0?igsh=eGJna3c2NXd0bHp5"
//       target="_blank"
//       rel="noreferrer"
//       className="flex flex-col items-center text-purple-500 hover:text-purple-700"
//     >
//       <FaInstagram className="text-3xl" />
//       <span className="text-sm mt-1">@elmersyzahira</span>
//     </a>
//     <a
//       href="https://www.linkedin.com/in/zahira-elmersy-97b3ba338/"
//       target="_blank"
//       rel="noreferrer"
//       className="flex flex-col items-center text-purple-500 hover:text-purple-700"
//     >
//       <FaLinkedin className="text-3xl" />
//       <span className="text-sm mt-1">elmersy zahira</span>
//     </a>
//   </div>
// </div>

//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_e6e8tnf",
        template_id: "template_i6p81g8",
        user_id: "MXkeDcv-DhtTVwpJr",
        template_params: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      }),
    });

    if (response.ok) {
      setStatus("Message sent ");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 2000);
    } else {
      setStatus("Error ❌");
      setTimeout(() => setStatus(""), 2000);
    }
  } catch (err) {
    console.error(err);
    setStatus("Server error ❌");
    setTimeout(() => setStatus(""), 2000);

  }
};

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-white relative">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400">
          Restons en contact
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Je suis ouverte à de nouvelles opportunités, collaborations ou un petit coucou 👋.
        </p>
      </div>

      {/* === GRID 3 COLUMNS === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Envoyer
          </button>
          {status && <p className="text-center text-sm text-gray-600">{status}</p>}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <span className="text-gray-700">zahiraelmersy@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-500 text-2xl" />
            <span className="text-gray-700">Casablanca, Maroc</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <a href="https://github.com/elmersyzahira" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-purple-500 hover:text-purple-700">
            <FaGithub className="text-2xl" />
            <span>elmersyzahira</span>
          </a>
          <a href="https://www.instagram.com/elm_zizo.0" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-purple-500 hover:text-purple-700">
            <FaInstagram className="text-2xl" />
            <span>@elmersyzahira</span>
          </a>
          <a href="https://www.linkedin.com/in/zahira-elmersy-97b3ba338/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-purple-500 hover:text-purple-700">
            <FaLinkedin className="text-2xl" />
            <span>elmersy zahira</span>
          </a>
        </div>
      </div>
    </section>
  );
}
