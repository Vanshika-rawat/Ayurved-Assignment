"use client";
import React, { useState } from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa';
import './Review.css';  // Importing the CSS file

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);

  const handleSafetyRating = (rating) => setSafetyRating(rating);
  const handleCommunicationRating = (rating) => setCommunicationRating(rating);
  const handleRecommendation = (value) => setRecommendation(value);

  return (
    <section className="review_form_container position-relative overflow-hidden" style={{ height: '100vh' }}>
      <div className="bg_light_review_form" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="review_form_header d-flex justify-content-between align-items-center mt-5">
              <h2>Leave a Review</h2>
              <FaTimes className="close_button" size={24} />
            </div>
            <div className="review_form_body mt-4 p-4 rounded shadow-sm">
              <div className="mb-4">
                <h4>Safety</h4>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={24}
                      className={safetyRating >= star ? 'text-yellow-500' : 'text-gray-300'}
                      onClick={() => handleSafetyRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4>Communication</h4>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={24}
                      className={communicationRating >= star ? 'text-yellow-500' : 'text-gray-300'}
                      onClick={() => handleCommunicationRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4>Would you recommend?</h4>
                <div className="thumbs">
                  <FaThumbsUp
                    size={24}
                    className={recommendation === 'like' ? 'text-green-500' : 'text-gray-300'}
                    onClick={() => handleRecommendation('like')}
                  />
                  <FaThumbsDown
                    size={24}
                    className={recommendation === 'dislike' ? 'text-red-500' : 'text-gray-300'}
                    onClick={() => handleRecommendation('dislike')}
                  />
                </div>
              </div>
              <button className="btn btn-primary mt-3 w-100">Submit Review</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
