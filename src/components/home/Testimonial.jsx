import React from 'react';
import './Testimonial.css'; // Opsional, untuk CSS

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <p className="testimonial-text">
          "Working with Bayu was an absolute pleasure. He is incredibly skilled and has a keen eye for detail. 
          The project was delivered on time and exceeded my expectations. Highly recommended!"
        </p>
        <p className="testimonial-author">- Martin Lee</p>
      </div>
      <div className="testimonial-icons">
        {/* Di sini Anda bisa menambahkan SVG atau ikon dari library */}
        {/* Contoh: <img src="/src/assets/icon-1.svg" alt="Icon 1" /> */}
      </div>
    </section>
  );
}

export default Testimonial;