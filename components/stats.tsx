import React from 'react';

const stats = [
  { value: '154+', label: 'Currently Learning' },
  { value: '850+', label: 'Alumni Students' },
  { value: '5+', label: 'Expert Instructor' },
  { value: '8+', label: 'Best Award Win' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-green py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-6 py-4 border-b md:border-b-0 md:border-r border-orange last:border-r-0">
            <h2 className="text-4xl text-orange font-bold mb-2">{stat.value}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
