import React from 'react';

const LatestInsights = () => {
  return (
    <section className="p-5">
      <h2>Latest Insights & Innovations</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>Top 5 Web Development Trends to Watch</h4>
          <p>Stay ahead with the latest trends in web design and development.</p>
        </div>
        <div className="col-md-4">
          <h4>How AI is Transforming Digital Marketing</h4>
          <p>Explore how AI can revolutionize your business strategies.</p>
        </div>
        <div className="col-md-4">
          <h4>Vetma’s Success with Client XYZ</h4>
          <p>Discover how we helped XYZ achieve their goals with our tailored solutions.</p>
        </div>
      </div>
      <button className="btn btn-primary">Read Our Blog</button>
    </section>
  );
};

export default LatestInsights;
