import React, { Component } from 'react';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

class Hero extends Component {
  render() {
    return (
      <section id='home' className='flex md:flex-row flex-col py-6 sm:py-16'>
        <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
					<div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
						<img src={discount} alt='discount'
							className='w-[32px] h-[32px] '/>
						<p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
							<span className='text-white'>20%</span> Discount For {" "}
							<span className='text-white'>1 Month</span> Account
						</p>
					</div>

					<div className='flex flex-row justify-between items-center w-full'>
						<h1 
							className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>
							The Next <br className='sm:block hidden'/>
							<span className='text-gradient'>Generation</span> {" "} 
						</h1>

						<div className='ss:flex hidden md:mr-4 mr:0'>
							<GetStarted />
						</div>
					</div>

					<h1 className='w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px]'>
						Payment Method
					</h1>

					<p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
						Our team of experts uses the methodology to identify the credit cards most likely to 
						fit your needs. We examine annual percentage rates, annual fees
					</p>
        </div>

				<div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
					<img src={robot} alt='billing' className='w-full h-full relative z-[5]'/>

					<div className='absolute top-0 z-0 w-2/5 h-[35%] pink__gradient'/>	
					<div className='absolute bottom-40 z-1 w-4/5 h-[80%] white__gradient'/>					
					<div className='absolute right-20 bottom-20 z-0 w-1/2 h-[50%] blue__gradient'/>									
				</div>

				<div className='ss:hidden flex justify-center items-center'>
					<GetStarted />
				</div>
      </section>
        );
    }
}

export default Hero;