import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers in your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
