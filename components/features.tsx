import Image from 'next/image';

const features = [
  {
    title: 'Instructor Training',
    description: 'Brainstorm words related to confidence, and skill.',
    icon: '/icon/feature_card_1.svg',
  },
  {
    title: 'Safety Measures',
    description: 'We also teach a full and final traffic guidelines for you.',
    icon: '/icon/feature_card_4.svg',
  },
  {
    title: 'Video Classes',
    description: 'Brainstorm words related to confidence, and skill.',
    icon: '/icon/feature_card_5.svg',
  },
  {
    title: 'Get Driving License',
    description: 'Get a Driving license and become an expert at .',
    icon: '/icon/feature_card_3.svg',
  },
];

const Features: React.FC = () => {
  return (
    <section className="p-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-evenly">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center px-2 py-8 m-4 rounded border shadow-md">
              <div className="mb-4">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className='fill-orange stroke-current'/>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center text-wrap px-10 mb-4">{feature.description}</p>
              <a href="#" className="text-orange font-semibold hover:underline">READ MORE →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
