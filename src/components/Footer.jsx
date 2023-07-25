import React, { Component } from 'react';
import { footerLinks, socialMedia } from '../constants/seed';
import { logo } from '../assets';


class Footer extends Component {
  render() {
    return (
      <footer className='flex justify-center items-center py-6 sm:py-16 flex-col'>
        <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
          <div className='flex flex-1 flex-col justify-start mr-10'>
            <img src={logo} alt='hoobank' className='w-[266px] h-[72px] object-contain'/>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]'>
              A new way to make payment easy, reliable and secure.
            </p>
          </div>

          <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-lg leading-[27px] text-white'>
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.name} className={`font-poppins font-normal text-base 
                      leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                      ${index !== footerLink.length - 1 ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row 
          flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
          <p className='font-poppins font-normal text-center text-lg leading-[27px] text-white'>
            2023 Hoobank. All Rights Reserved
          </p>

          <div className='flex flex-row sm:mt-0 mt-6'>
            {socialMedia.map((social, index) => (
              <img key={social.id} src={social.icon} alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer
                ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              />
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;