import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Ragasree</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
