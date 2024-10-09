import React, { useState } from 'react'
import Frame from "../assets/new.svg"

import { NavLink } from 'react-router-dom';
import { NavIcon } from '../Data/NavData';

const SideNav = () => {
  const [tap , setTap]=useState(true);

  return (
    <div className=' text-text02 flex flex-col max-w-[16rem] py-8 px-5 select-none'>
      <img className='w-[129px] h-[57px] aspect-square' onClick={()=>setTap(!tap)} src={Frame}></img>
      <div className='flex flex-col space-y-4 mt-8'>
      {
          NavIcon.map((item, key) => (
            <NavLink 
              key={key} 
              to={item.to}
              className={({ isActive }) => 
                `flex items-center space-x-5 py-2 px-3 rounded-md whitespace-nowrap text-[20.5px]  ${
                  isActive ? 'bg-text-gradient text-white' : 'hover:bg-text-gradient hover:text-text02'
                }`
              }
            >
             
              {
                tap && <span className='hidden md:flex'>{item.name}</span>
              }
                
              
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav
