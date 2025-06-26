import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "API Integration"];

  return (
    <section id="skills" className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
