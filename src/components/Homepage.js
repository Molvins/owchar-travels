// src/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the World with Owchar Travels</h1>
          <p>Your trusted travel partner for unforgettable adventures.</p>
          <button onClick={() => alert('Explore Now!')}>Explore Now</button>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="featured-tours">
        <h2>Featured Tours</h2>
        <div className="tour-cards">
          <div className="tour-card">
            <img src="path_to_tour_image_1" alt="Tour 1" />
            <h3>Serengeti Safari</h3>
            <p>Explore the wild with our exclusive Serengeti Safari packages.</p>
          </div>
          <div className="tour-card">
            <img src="path_to_tour_image_2" alt="Tour 2" />
            <h3>Zanzibar Beaches</h3>
            <p>Relax and unwind on the pristine beaches of Zanzibar.</p>
          </div>
          <div className="tour-card">
            <img src="path_to_tour_image_3" alt="Tour 3" />
            <h3>Mount Kilimanjaro</h3>
            <p>Challenge yourself with a trek up Africa's highest peak.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "Owchar Travels provided an exceptional experience. The guides were
            knowledgeable, and the itinerary was perfect!" - Jane D.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "The Zanzibar trip was breathtaking. Thank you for the seamless
            arrangements!" - Mark T.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Travel Tips & Stories</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <img src="path_to_blog_image_1" alt="Blog Post 1" />
            <h3>Top 10 Safari Tips</h3>
            <p>Prepare for your next safari adventure with these expert tips.</p>
          </div>
          <div className="blog-post">
            <img src="path_to_blog_image_2" alt="Blog Post 2" />
            <h3>Hidden Gems in Africa</h3>
            <p>Discover lesser-known destinations for unique experiences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
