import Features from 'components/Features';
import Hero from 'components/Hero';
import MarketTrend from 'components/MarketTrend';
import Pricing from 'components/Pricing';
import Steps from 'components/Steps';
import React from 'react';

function Home() {
    return (
        <div className='overflow-hidden'>
           <Hero />
           <Pricing />
           <MarketTrend />
           <Features />
           <Steps />
        </div>
    )
}

export default Home
