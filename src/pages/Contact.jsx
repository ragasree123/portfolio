import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-blue-50">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-center mb-6">Feel free to reach out to me!</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">Email</a>
        <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
