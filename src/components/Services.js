import React from 'react';
import './Services.css';

const services = [
  { title: "Website Development", description: "Professional, custom-coded and WordPress sites tailored to your brand." },
  { title: "App Development", description: "Mobile and web applications that drive business growth." },
  { title: "Digital Marketing", description: "Strategies to increase your online presence and engagement." },
  { title: "IT Solutions", description: "Comprehensive support for all your technical needs." },
  { title: "Business Development", description: "Helping your business reach its fullest potential." },
  { title: "Communication Solutions", description: "Effective communication strategies for client engagement." },
];

const Services = () => {
  return (
    <section id="services" className="p-5">
      <h2>Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary">Explore All Services</button>
    </section>
  );
};

export default Services;
