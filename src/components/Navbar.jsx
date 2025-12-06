'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


const NavLinks = [
    { name: "About", link: '/' },
    { name: "Home", link: "/Home" },
    { name: "Subscription", link: "/pricing" },
    { name: "Settings", link: "/profile" }]

export default function Navbar() {

    const curPath = usePathname()

    gsap.registerPlugin(useGSAP);

    const navCont = useRef()

    useGSAP(() => {

        gsap.from(navCont.current, {

            y: '-100',
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
        })
    }, { scope: navCont })

    return (
        <div
            ref={navCont}
            className="sticky top-0 z-8 py-4 border-b-1 border-[#5f5f5f] flex flex-row justify-between items-center sm:flex-col md:flex-row md:px-16 lg:px-48 xl:px-64 w-full bg-linear-to-b from-[#191022] to-white/0 to-70% backdrop-blur-sm">
            <div>
                <svg width="88" height="40" viewBox="0 0 88 40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeDasharray="5 5">
                    <path d="M43.7129 19.9189L47.9219 4.20996L63.6309 8.41797L71.4258 3.91895L87.4258 31.6318L59.4209 24.1279L55.2129 39.8379L43.7129 19.9189L39.5039 35.6279L23.7939 31.4189L16 35.9189L0 8.20605L28.0039 15.709L32.2129 0L43.7129 19.9189Z" fill="none" stroke="#7b3aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="flex flex-row gap-4 text-[#5f5f5f] font-bold">
                {NavLinks.map(w => {
                    return (<Link
                        key={w.name}
                        href={w.link}
                        className={`${curPath === w.link ? 'text-[#7b3aff]' : 'text-[#5f5f5f]'} hover:text-[#7b3aff]`}
                    >{w.name}</Link>)
                })}
            </div>
        </div>
    )
}