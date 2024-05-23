import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            Welcome to Feedback Website, your go-to platform for sharing valuable feedback and insights. Our mission is to provide a seamless and user-friendly experience for individuals and organizations to submit feedback, share ideas, and contribute to the continuous improvement of products and services.
          </p>
          <p className="mb-4">
            At Feedback Website, we believe in fostering open communication and collaboration. Whether you're a customer, employee, or stakeholder, your voice matters. Our platform allows you to submit feedback anonymously or publicly, ensuring that your thoughts and suggestions are heard and considered.
          </p>
          <p className="mb-4">
            We take pride in our commitment to transparency and accountability. All feedback received is carefully reviewed and addressed by our dedicated team. We strive to implement constructive feedback and use it as a driving force for positive change and enhancement.
          </p>
          <p>
            Join our ever-growing community of feedback enthusiasts and be a part of shaping the future. Together, we can create a better experience for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;