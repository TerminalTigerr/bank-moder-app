import React, { Component } from 'react';
import { arrowUp } from '../assets';

class GetStarted extends Component {
  render() {
    return (
      <div 
		className='flex justify-center items-center w-[140px] h-[140px] 
			rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-125 transition ease-in-out duration-700'>
			<div className='flex justify-center items-center flex-col bg-primary w-full h-full rounded-full'>
				<div className='flex justify-center items-start flex-row'>
					<p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
						<span className='text-gradient'>Get</span>
					</p>
					<img src={arrowUp} className='w-[23px] h-[23px] object-contain '/>
				</div>
					<p className='font-poppins font-medium text-[18px] leading-[23px] '>
						<span className='text-gradient'>Started</span>
					</p>
			</div>
      </div>
    );
  }
}

export default GetStarted;