import React from 'react';

const PartnersAndTools = () => {
  return (
    <section className="p-5">
      <h2>Our Partners & Tools</h2>
      <div>
        <h4>Partners</h4>
        <div className="d-flex flex-wrap">
          {/* Replace with actual logos */}
          <img src="partner1.png" alt="Partner 1" className="m-2" />
          <img src="partner2.png" alt="Partner 2" className="m-2" />
          <img src="partner3.png" alt="Partner 3" className="m-2" />
        </div>
        <p>Trusted by leading brands and businesses across industries.</p>
      </div>
      <div>
        <h4>Tools We Use</h4>
        <ul>
          <li>WordPress: Flexible website solutions for all business types.</li>
          <li>React: Powerful, responsive front-end development.</li>
          <li>Canva: Creative design solutions to bring your brand to life.</li>
          <li>Python: Advanced programming for automation and AI solutions.</li>
          <li>Firebase: Reliable backend and real-time data management.</li>
          <li>Node.js: Efficient server-side solutions for web apps.</li>
        </ul>
        <p>We leverage the latest technologies and tools to deliver high-quality, reliable IT solutions.</p>
      </div>
    </section>
  );
};

export default PartnersAndTools;
