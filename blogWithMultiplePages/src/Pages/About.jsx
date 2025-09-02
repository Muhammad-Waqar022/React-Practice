import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to <span className="font-semibold">Waqar's Blog</span> – a space
        where ideas, stories, and knowledge come together. This blog was created
        with one simple goal: to share insights, inspire creativity, and make
        learning enjoyable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Here, you’ll find:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>📰 Articles on a variety of topics including technology, lifestyle, and self-growth.</li>
        <li>💡 Practical tips, resources, and tutorials that you can use in real life.</li>
        <li>🗨️ A community-driven space where every reader’s perspective matters.</li>
      </ul>

      <p className="text-gray-700">
        Whether you’re here to learn something new, get inspired, or simply
        enjoy a good read, we’re glad to have you.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for being part of this journey. Stay curious, stay inspired!
      </p>
    </div>
  );
};

export default About;
