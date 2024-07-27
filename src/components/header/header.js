import React, { useState } from 'react'

export default function Header() {
  const [state, setState] = useState({
    menu: true,
  })
  const [cmenu, setCmenu] = useState('home')
  return (
    <div
      className='flex 
      flex-row 
     items-center
     justify-between
     '
    >
      <div className='ml-8'>
        <img
          className='w-16 h-full'
          src={require('../../assets/img/mordelogo.png')}
          alt=''
        />
      </div>

      <nav className='mr-8 text-center hidden  md:block '>
        <ul className='flex flex-row '>
          <li className='basis-1/4  px-4  transition-all duration-100 ease-in hover:rounded-md hover:bg-slate-100  '>
            <a href='#home'>Home</a>
          </li>
          <li className='basis-1/1 px-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100 '>
            <a href='#about'>About</a>
          </li>
          <li className='basis-1/4 px-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='basis-1/4 px-4 mx-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100 '>
            <a href='#resume'>Portfolio</a>
          </li>
          <li className='basis-1/4 px-4 mx-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100 '>
            <a href='#portfolio'>Projects</a>
          </li>
        </ul>
      </nav>

      <span
        className='material-icons-sharp text-3xl mr-8 cursor-pointer flex md:hidden '
        onClick={() => setState({ menu: !state.menu })}
      >
        menu
      </span>

      <nav
        className={`mobile ${
          state.menu ? 'w-60 opacity-100' : 'w-0 opacity-0'
        } flex-col fixed left-0 bottom-0 h-full w-60 bg-slate-200 block z-10 md:hidden
        transition-all duration-800 ease-in
        `}
      >
        <span
          className='material-icons-sharp cursor-pointer self-end m-4'
          onClick={() => setState({ menu: !state.menu })}
        >
          close
        </span>
        <ul className=' flex flex-col gap-8 text-center *:cursor-pointer'>
          <li className={`${cmenu === 'home' && 'active'}`}>
            <a href='#' onClick={() => setCmenu('home')}>
              Home
            </a>
          </li>
          <li
            className={`${cmenu === 'about' && 'active'}`}
            onClick={() => setCmenu('about')}
          >
            <a href='#about'>About</a>
          </li>
          <li
            className={`${cmenu === 'contact' && 'active'}`}
            onClick={() => setCmenu('contact')}
          >
            <a href='#contact'>Contact</a>
          </li>
          <li
            className={`${cmenu === 'resume' && 'active'}`}
            onClick={() => setCmenu('resume')}
          >
            <a href='#resume'>Portfolio</a>
          </li>
          <li
            className={`${cmenu === 'proj' && 'active'}`}
            onClick={() => setCmenu('proj')}
          >
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
