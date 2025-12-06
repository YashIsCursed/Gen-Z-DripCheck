'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function AnimatedLoading() {
    const loding = useRef()

    useGSAP(()=>{
        gsap.timeline().from('.left-arrow', {
            y: -1000,
            x:-1000,
            duration: 1,
            ease: 'power4.inOut',
            opacity:1,
            delay:0,
        }).to('.left-arrow', {
            y: 1000,
            x:1000,
            delay:0,
            duration: 1,
            ease: 'power4.inOut',
            scale:10,
            opacity:1
        }
        )
        gsap.timeline().from('.right-arrow', {
            y: 1000,
            delay:0,
            x:1000,
            duration: 1,
            ease: 'power4.inOut',
            opacity:1
        }).to('.right-arrow', {
            y: -1000,
            x:-1000,
            delay:0,
            duration: 1,
            ease: 'power4.inOut',
            opacity:1,
            scale:10
        }).to(loding.current,{opacity:0}).to(loding.current,{display:"none"})

        
        
    },{scope:loding})
    return (
        <div
        ref={loding} 
        className="loadingPanel flex top-0 fixed z-20 flex-row items-center justify-center w-screen h-screen bg-black">
            <div className="left-arrow rotate-225 z-20">
                <svg width="157" height="118" viewBox="0 0 157 118" className=" scale-50 lg:scale-75 xl:scale-100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_35)">
                        <path d="M43.4131 109.202L4 69.8804L43.2567 30.7121L43.1947 0L152.649 0.218671L82.6711 70.0381L122.084 109.359L43.4131 109.202Z" fill="#D9D9D9" />
                    </g>
                </svg>

            </div>
            <div className="right-arrow rotate-45 z-20">
                <svg width="157" height="118" className="scale-50 lg:scale-75 xl:scale-100" viewBox="0 0 157 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_35)">
                        <path d="M43.4131 109.202L4 69.8804L43.2567 30.7121L43.1947 0L152.649 0.218671L82.6711 70.0381L122.084 109.359L43.4131 109.202Z" fill="#D9D9D9" />
                    </g>
                </svg>

            </div>
        </div>

    )
}