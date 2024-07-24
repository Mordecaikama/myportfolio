import React, { useState } from 'react'

export default function Header() {
  const [state, setState] = useState({
    menu: false,
  })
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
            <a href='#'>Home</a>
          </li>
          <li className='basis-1/1 px-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100 '>
            <a href='#'>About</a>
          </li>
          <li className='basis-1/4 px-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100'>
            <a href='#'>Contact</a>
          </li>
          <li className='basis-1/4 px-4 mx-4 transition-all duration-75 ease-in hover:rounded-md hover:bg-slate-100 '>
            <a href='#'>Portfolio</a>
          </li>
        </ul>
      </nav>

      <nav
        className={`mobile ${
          state.menu ? 'w-60 opacity-100' : 'w-0 opacity-0'
        } flex-col fixed right-0 bottom-0 h-full w-60 bg-slate-200 block md:hidden
        transition-all duration-800 ease-in
        `}
      >
        <span
          className='material-icons-sharp cursor-pointer self-end m-4'
          onClick={() => setState({ ...state, menu: !state.menu })}
        >
          close
        </span>
        <ul className=' flex flex-col gap-8 text-center *:cursor-pointer'>
          <li className='border-solid border-2 border-slate-600 rounded-md p-2 m-8 hover:bg-slate-400 color-slate-100'>
            <a href='#'>Home</a>
          </li>
          <li className=''>
            <a href='#'>About</a>
          </li>
          <li className=''>
            <a href='#'>Contact</a>
          </li>
          <li className=''>
            <a href='#'>Portfolio</a>
          </li>
        </ul>
      </nav>
      <span
        className='material-icons-sharp mr-8 cursor-pointer block md:hidden '
        onClick={() => setState({ ...state, menu: !state.menu })}
      >
        menu
      </span>
    </div>
  )
}
