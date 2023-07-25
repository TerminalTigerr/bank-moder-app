import React, { Component } from 'react';
import { card } from '../assets';
import Button from './Button';


class CardDeal extends Component {
  render() {
    return (
			<section className='flex md:flex-row flex-col sm:py-16 py-6'>
				<div className='flex-1 flex justify-center items-start flex-col'>
					<h2 className='"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]'>
						Find a better card deal <br className='sm:block' hidden/> in few easy steps
					</h2>
					<p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
						With a wide range of personalized banking solutions, cutting-edge digital tools, 
						and a dedicated team of financial experts, we are committed to making your banking 
						journey seamless and rewarding. Whether you're saving for your dream home, planning 
						for retirement, or looking for flexible loan options, Stellar Bank has you covered.
					</p>
					<Button styles='mt-10'/>
				</div>

				<div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
					<img src={card} alt='card' className='w-full h-full' />
				</div>
			</section>
    );
  }
}

export default CardDeal;