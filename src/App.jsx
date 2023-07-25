import React, { Component } from 'react';

import { NavBar, Hero, Stats, Billing, Business, Button, CardDeal, Clients, CTA,
FeedBackCard, Footer, GetStarted, Testimonials } from './components'


class App extends Component {
  render() {
    return (
      <div className='bg-primary w-full overflow-hidden'>
        <div className='p-6 sm:p-16 flex justify-center items-center'>
          <div className='w-full xl:max-w-[1280px]'>
            <NavBar />
          </div>
        </div>

        <div className='bg-primary flex justify-center items-start'>
          <div className='w-full xl:max-w-[1280px]'>
            <Hero />
          </div>
        </div>

        <div className='bg-primary flex p-6 sm:p-16 justify-center items-start'>
          <div className='w-full xl:max-w-[1280px]'>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;