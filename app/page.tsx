import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import AboutUs from '@/components/aboutus';
import PopularClasses from '@/components/PopularClasses';
import Stats from '@/components/stats';
import FAQ from '@/components/faqs';
import SignUpProcess from '@/components/signupprocess';
import Testimonials from '@/components/testimonials';
import StartDrivingForm from '@/components/startdrivingform';
import FormCTA from '@/components/formcta';
import Footer from '@/components/footer';
import BlogAndNews from '@/components/blogandnews';
import Partners from '@/components/partners';
import ContactsCTA from '@/components/contactscta';


export default function Home() {
  return (
    <div>
      <Head>
        <title>DRIDE Driving School</title>
        <meta name="description" content="Driving school website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <PopularClasses />
        <Stats />
        <FAQ />
        <SignUpProcess />
        <Testimonials />        
        <FormCTA />
        <BlogAndNews />
        <Partners />
        <ContactsCTA />
        <Footer />
        {/* <StartDrivingForm /> */}
        {/* Your main content */}
      </main>
    </div>
  );
}
