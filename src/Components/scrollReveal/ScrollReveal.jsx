import React, { useEffect } from 'react'
import './ScrollReveal.css'


const ScrollReveal = () => {
    useEffect(() => {
        var tl = gsap.timeline({scrollTrigger:{
            trigger:".main",
            markers:true,
            start:"50% 50%",
            end:"100% 50%",
            scrub:2,
            pin:true
        }});
        tl
        .to(".topp",{
            top: "-50%",
         },'a')
         .to(".bottom",{
            bottom: "-50%",
         },'a')
        .to(".top-h",{
            top: "60%"
         },'a')
         .to(".bottom-h",{
            bottom: "-30%"
         },'a')
        .to(".center-h1",{
           top: "-30%"
        },'a')
        .to(".content",{
           delay: -0.2,
           marginTop: "0%"
        })
    }, []);
    return (
        <>
            <div className="main">
                <div className="topp bg-black position-absolute m-0 p-0">
                    <h1 className="display-1 fw-bold m-0 top-h">SCROLL</h1>
                </div>
                <div className="center bg-white m-0 p-0">
                    <div className="content">
                        <h1 className="text-center display-1 fw-bold">HELLO</h1>
                    </div>
                </div>
                <div className="bottom bg-black position-absolute m-0 p-0">
                    <h1 className="display-1 fw-bold m-0 bottom-h">SCROLL</h1>
                </div>
            </div>
        </>
    )
}

export default ScrollReveal