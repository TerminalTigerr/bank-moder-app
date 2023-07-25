import React, { Component } from 'react';
import { feedback } from '../constants/seed';
import FeedBackCard from './FeedBackCard';
import { card } from '../assets';

class Testimonials extends Component {
  render() {
    return (
	    <section id='clients' className='flex justify-center items-center sm:py-16 py-6 flex-col relative'>
						
				<div className='absolute z-0 w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient'/>

				<div className='flex justify-between items-center w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
					<h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
						What people are <br className='sm:block hidden'/> saying about us
					</h2>
					<div className='w-full md:mt-0 mt-6'>
						<p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]'>
							Everything you need to accept card payment and 
							grow your business anywhere on the planet
						</p>
					</div>
				</div>

				<div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
					{feedback.map((card) => (
						<FeedBackCard 
							key={card.id}
							content={card.content}
							name={card.name}
							title={card.title}
							image={card.img}
						/>
					))}
				</div>
			</section>
    );
  }
}

export default Testimonials;