import React from 'react'
import './impact.css'
const Impact = () => {
  return (
    <>
        <div className="nav d-flex align-items-center justify-content-between py-3 px-5">
            <div className="left">
                <h1 className="logo letter-spacing m-0">
                    Impact 
                    <span className='text-danger'>.</span>
                </h1>
            </div>
            <div className="right">
                <ul className='d-flex list-unstyled gap-5 m-0 fw-bold'>
                    <li className='m-0'>Home</li>
                    <li className='m-0'>About</li>
                    <li className='m-0'>Services</li>
                    <li className='m-0'>Portfolio</li>
                    <li className='m-0'>Team</li>
                    <li className='m-0'>Blog</li>
                    <li className='m-0'>Drop Down
                     <div className="submenu bg-white py-3 px-3 rounded-1 w-100">
                        <h6 className='text-center text-black m-0'>1</h6>
                        <h6 className='text-center text-black m-0'>2</h6>
                        <h6 className='text-center text-black m-0'>3</h6>
                        <h6 className='text-center text-black m-0'>4</h6>
                     </div>
                    </li>
                    <li className='m-0'>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Impact