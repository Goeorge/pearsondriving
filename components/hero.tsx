import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-white flex flex-col lg:flex-row items-center justify-evenly p-4">
      <div className="hidden absolute left-0 top-2/4 transform -translate-y-1/2 md:flex flex-col items-center space-y-2">
        <div className="rotate-90 text-lg text-orange font-semibold mb-6">
          FOLLOW US
        </div>
        <Link href="#" className="text-green hover:text-orange">
          <FaYoutube width={24} height={24} />
        </Link>
        <Link href="#" className="text-green hover:text-orange">
          <FaLinkedin width={36} height={36} />
        </Link>
        <Link href="#" className="text-green hover:text-orange">
          <FaInstagram width={24} height={24} />
        </Link>
        <Link href="#" className="text-green hover:text-orange">
          <FaTwitter width={24} height={24} />
        </Link>
        <Link href="#" className="text-green hover:text-orange">
          <FaFacebook width={24} height={24} />
        </Link>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:pl-6">
        <h2 className="text-green font-semibold text-sm mb-2">
          Drive Safely, Stay Alive
        </h2>
        <h1 className="text-3xl md:text-6xl ml:text-7xl font-bold text-orange mb-4">
          Drive with Safety <br /> And Control
        </h1>
        <p className="text-gray-600 mb-6">
          When coming up with driving school slogans, it is important to <br />think
          about
           the main message you want to communicate.
        </p>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="bg-green text-white py-2 px-4 rounded hover:bg-orange transition duration-300 no-underline">
            LEARN MORE
          </Link>
          <Link
            href="#"
            className="bg-green text-white py-2 px-4 rounded hover:bg-orange transition duration-300 no-underline">
            GET ENROLLED
          </Link>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:flex md:items-center">
        <Image
          src="/hero/pearson-driving-2.webp"
          alt="Hero Image"
          width={570}
          height={570}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
