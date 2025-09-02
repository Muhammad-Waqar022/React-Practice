import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${text}`);
    setName("");
    setEmail("");
    setText("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have a question, feedback, or just want to say hello? Fill out the form
        below or reach us directly through our contact details.
      </p>

      {/* Contact Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Message</label>
          <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Write your message..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Other Ways to Connect</h2>
        <p className="text-gray-700">Email: ranawaqar4343@gmail.com</p>
        <p className="text-gray-700">
          Portfolio:{" "}
          <a
            href="https://portfolio-muhammad-waqar-ajmal.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Visit here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
