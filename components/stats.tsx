import React from 'react';

const stats = [
  { value: '5,400+', label: 'Learn From Here' },
  { value: '1,350+', label: 'Alumni Students' },
  { value: '10+', label: 'Expert Instructor' },
  { value: '20+', label: 'Best Award Win' },
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
