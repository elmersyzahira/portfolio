import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import design1 from '../images/design1.jpg'; 
import design2 from '../images/design2.jpg';
import design3 from '../images/design3.jpg';

export default function GraphicDesign() {
  const designs = [
    { id: 1, title: "Design 1", image: design1 },
    { id: 2, title: "Design 2", image: design2 },
    { id: 3, title: "Design 3", image: design3 },
    // { id: 4, title: "Design 4", image: design2 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false, // remove offset issues
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="design" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 px-6 md:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Design Graphique</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Voici quelques-unes de mes créations graphiques. Ce ne sont pas des œuvres professionnelles, mais j’aime expérimenter et apprendre !
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {designs.map((design) => (
            <div key={design.id} className="px-3"> {/* spacing between slides */}
              <div className="rounded-xl overflow-hidden shadow-lg w-72 h-72 md:w-80 md:h-80 mx-auto">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover"
                />
                <div className="bg-white p-3 text-center">
                  <h3 className="text-lg font-semibold text-purple-600">{design.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
