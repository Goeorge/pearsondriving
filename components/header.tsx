import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-evenly p-4 bg-white border-b border-orange-200">
      <div className="flex items-center">
        <Image src="/brand/pearson-driving-logo.webp" alt="Dride Logo" width={200} height={200} />
        {/* <div className="ml-2">
          <h1 className="text-2xl font-bold text-gray-800">DRIDE</h1>
          <span className="text-sm text-gray-600">DRIVING SCHOOL</span>
        </div> */}
      </div>
      <nav className="ml-10">
        <ul className="flex space-x-8 text-xl font-semibold">
          <li><Link href="/" className="text-orange hover:text-green no-underline">Home</Link></li>
          <li><Link href="#aboutus" className="text-orange hover:text-green no-underline">About Us</Link></li>
          <li><Link href="#courses" className="text-orange hover:text-green no-underline">Courses</Link></li>
          <li><Link href="#" className="text-orange hover:text-green no-underline">Pages</Link></li>
          <li><Link href="#" className="text-orange hover:text-green no-underline">Blog</Link></li>
          <li><Link href="#" className="text-orange hover:text-green no-underline">Contact</Link></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer">
          <FaSearch width={54} height={54} className='stroke-green cursor-pointer'/>
        </div>
        <Link href="#" className="px-4 py-2 text-white font-semibold hover:bg-green bg-orange rounded no-underline">GET CONSULTING</Link>
        <div className="cursor-pointer">
          <CiMenuBurger  width={64} height={64}  className='stroke-green' />
        </div>
      </div>
    </header>
  );
};

export default Header;
