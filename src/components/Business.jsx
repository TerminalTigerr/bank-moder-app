import React, { Component } from 'react';
import { features } from '../constants/seed';
import { Button } from '../components'


class Business extends Component {
  render() {
    return (
		<section id='features' className='flex md:flex-row flex-col py-6 sm:py-16'>
			<div className='flex-1 flex justify-center items-start flex-col'>
				<h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] 
				text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
				You do the business, <br className='sm:block hidden'/>we'll handle the money.
				</h2>
				<p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
					With the right credit card, you can improve your financial life 
					by building credit, earning rewards and saving money. But with 
					hundred of credit cards on the market.
				</p>

				<Button styles='mt-10'/>
			</div>

			<div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col'>
				{features.map((feature, index) => (
					<FeatureCard 
						key={this.props.id}
						{...feature}
						index={this.index}
					/>
				))}
			</div>
		</section>
    );
	}
}

class FeatureCard extends Component {
	render() {
		return (
			<div 
				className={` flex flex-row p-6 rounded-[20px] 
					${this.index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
				<div className=' w-16 h-16 rounded-full bg-dimBlue flex justify-center items-center'>
					<img src={this.props.icon} alt='icon' className='w-[50%] h-1/2 object-contain'/>
				</div>
				<div className='flex flex-col flex-1 ml-3'>
					<h4 className='font-poppins font-semibold text-white text-lg leading-6 mb-1'>
						{this.props.title}
					</h4>
					<p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
						{this.props.content}
					</p>
				</div>
			</div>
		)
	}
}


export default Business;