import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-600">Ragasree</span></h1>
      <p className="text-xl mb-6">Front-End Developer | React | Tailwind | JavaScript</p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Let's Connect</a>
    </section>
  );
};

export default Home;
