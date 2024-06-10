import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="container3">
        <h2>What Our Clients Say</h2>
        <div className="reviews">
          <div className="review">
            <p>"CleverBooks has transformed our inventory management. Highly recommend!"</p>
            <h4>John Doe</h4>
          </div>
          <div className="review">
            <p>"Efficient and reliable. Our operations have never been smoother."</p>
            <h4>Jane Smith</h4>
          </div>
          <div className="review">
            <p>"A must-have for any business looking to streamline inventory processes."</p>
            <h4>Mike Johnson</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
