import React, { Component } from 'react';


import {menu, logo, close} from "../assets"
import { navLinks } from '../constants/seed';


class NavBar extends Component {
	state = {
		toggle: false
	}

	handleToggle = () => {
		this.setState((prev) => ({
			toggle: !prev.toggle
		}))
	}

  render() {
		const toggleIcon = this.state.toggle ? close : menu
    return (
      <nav className='w-full py-6 flex justify-between items-center navbar'>
        <img src={logo} alt='hookbank' className='w-[124px] h-[32px]'/>

				<ul className='list-none sm:flex justify-end items-center flex-1 hidden'>
					{navLinks.map((nav, index) => (
						<li 
							key={nav.id}
							className={`font-poppins font-normal 
							cursor-pointer text-[16px] mr-10
							${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}
							text-white`}>
							<a href={`#${nav.id}`}>
								{nav.title}
							</a>
						</li>
					))}
				</ul>

				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img 
						src={toggleIcon}
						alt='menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={this.handleToggle}
					/>

					<div 
						className={`${this.state.toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
						absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar`}>
						<ul className='list-none flex justify-end items-center flex-1 flex-col'>
							{navLinks.map((nav, index) => (
								<li 
									key={nav.id}
									className={`font-poppins font-normal 
									cursor-pointer text-[16px] mr-10
									${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}
								text-white`}>
										<a href={`#${nav.id}`}>
											{nav.title}
										</a>
								</li>
							))}
						</ul>
					</div>		
				</div>
      </nav>
    );
  }
}

export default NavBar; 