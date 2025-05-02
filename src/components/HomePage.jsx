import React, { Suspense } from 'react'
import Header from './Header'
import Banner from './Banner';
import LogoShowcase from './LogoShowcase';
import { Loader } from './Loader';
import AnimatedCounter from './AnimatedCounter';
import Roadmap from './Roadmap';
import Moments from './Moments';
import RickBanner from './RickBanner';
import Footer from './Footer';
import Contract from './Contract';
import About from './About';
import PlayFred from './PlayFred';

export const HomePage = () => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
    <Header/>
    <Banner/>
    <LogoShowcase/>
    <AnimatedCounter/>
    <Contract/>
    <Moments/>
    <LogoShowcase/>
    <RickBanner/>
    <LogoShowcase/>
    <About/>
    {/* <PlayFred/> */}
    <Footer/>
    {/* <Roadmap/> */}
    </Suspense>
   
    </>
   
  );
}

