import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-yellow-700 mt-4'>

      <div className='grid grid-cols-4 w-[95%] m-auto p-5'>
        <div className=''> 
          <div className='flex items-center gap-3'>
          <i className="fa-solid fa-truck-fast text-white"></i>
          <h1 className='text-l font-bold text-white'>Daily Cart</h1>
          </div>

          <p className='text-white leading-relaxed font-semibold'>Designed and built with all the love in the world by the luminar team with the help of our contributors</p>
          
          <h6 className='text-white leading-relaxed font-semibold py-2'>Code liscenced Luminar,docs CC BY 3.0</h6>
          <h6 className='text-white leading-relaxed font-semibold'>Curently v5.3.2</h6>
        </div>


        <div className='px-10'>
          <h3 className='text-white leading-relaxed font-bold'>Links</h3>
          <div className='flex flex-col'>
          <Link className='text-white leading-relaxed font-semibold'>Landing Page</Link>
          <Link className='text-white leading-relaxed font-semibold'>Home Page</Link>
          <Link className='text-white leading-relaxed font-semibold'>Watch History Page </Link>
          </div>
        </div>
        <div>
          <h3 className='text-white leading-relaxed font-bold'>Guides</h3>
          <div className='flex flex-col'>
          <Link className='text-white leading-relaxed font-semibold'>React</Link>
          <Link className='text-white leading-relaxed font-semibold'>React Bootstrap</Link>
          <Link className='text-white leading-relaxed font-semibold'>React Router</Link>
          </div>
        </div>
        <div>
          <h3 className='text-white leading-relaxed font-bold'>Contact Us</h3>
          <div className='flex gap-2 items-center'>
            <input className='bg-white rounded p-1 w-full' type="text"  placeholder='Enter your email here'/>
            <i className="fa-solid fa-arrow-right text-white"></i>
          </div>
          <div className='flex gap-5 mt-3'>
          <i className="fa-brands fa-twitter text-white"></i>
          <i className="fa-brands fa-instagram text-white"></i>
          <i className="fa-brands fa-facebook text-white"></i>
          <i className="fa-brands fa-linkedin text-white"></i>
          <i className="fa-brands fa-github text-white"></i>
          <i className="fa-solid fa-phone text-white"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer