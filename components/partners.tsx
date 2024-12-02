import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-2 ml-4 md:flex md:flex-row items-center justify-center md:space-x-12">
          <Image
            src="/blog/logo-1-1.png"
            alt="logo1"
            width={115}
            height={115}
          />
          <Image
            src="/blog/logo-1-2.png"
            alt="logo2"
            width={115}
            height={115}
          />
          <Image
            src="/blog/logo-1-3.png"
            alt="logo3"
            width={115}
            height={115}
          />
          <Image
            src="/blog/logo-1-4.png"
            alt="logo4"
            width={115}
            height={115}
          />
          <Image
            src="/blog/logo-1-1.png"
            alt="logo5"
            width={115}
            height={115}
          />
          {/* <Image
            src="/blog/logo-1-6.png"
            alt="logo6"
            width={115}
            height={115}
          /> */}
          <Image
            src="/blog/logo-1-2.png"
            alt="logo7"
            width={115}
            height={115}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
