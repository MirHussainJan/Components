import React, { useRef, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [click, setClick] = useState(false);
    const topp = useRef();
    const option = useRef();
    const bottom = useRef();
    const handleClick = () => {
        if (click) {
            setClick(false)
            topp.current.style.transform = 'translateY(6px)'
            bottom.current.style.transform = 'translateY(-6px)'
            option.current.style.top='-100%';
        }
        else {
            setClick(true);
            topp.current.style.transform = 'translateY(0px)'
            bottom.current.style.transform = 'translateY(0px)'
            option.current.style.top='0';
        }
    };

    return (
        <>
            <div ref={option} className="options background position-absolute d-flex px-5 align-items-center">
                <div className="content w-100">
                    <h1 className=" display-1 fw-bold">Home</h1>
                    <hr className='w-100 bg-white' />
                    <h1 className=" display-1 fw-bold">About</h1>
                    <hr className='w-100 bg-white' />
                    <h1 className=" display-1 fw-bold">Projects</h1>
                    <hr className='w-100 bg-white' />
                    <h1 className=" display-1 fw-bold">Contact</h1>
                    <hr className='w-100 bg-white' />
                </div>
            </div>
            <div className="nav p-5 d-flex justify-content-between align-items-center">
                <div className="left d-flex align-items-center">
                    <img width={80} height={80} src="https://img.freepik.com/premium-vector/branding-identity-corporate-vector-logo-m-design_460848-8720.jpg" alt="" />
                    <h1 className='bebas-neue-regular m-0 margin'>ir Hussain</h1>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <div className='span'>
                        <span ref={topp} className='top spans'></span>
                        <span ref={bottom} className='bottom spans'></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
