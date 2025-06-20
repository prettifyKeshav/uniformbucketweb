"use client"
import Image from "next/image"
import Link from "next/link"
import "../public/styles/header/header.css"
import { useEffect } from "react"
export default function Header(){
    useEffect(() => {
        if(typeof window === "undefined") return
        const handleScroll = () => {
            const header = document.querySelector("header")
            if(!header) return
            if (window.scrollY > 100){
                header.classList.add("header-fixed")
            } else {
                header.classList.remove("header-fixed")
            }
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll);

        return() => window.removeEventListener("scroll", handleScroll)
    }, [])
    return(
        <>
            <header>
                <div className="header-wrapper container">
                    <div className="colA">
                        <Link href="/">
                            <Image src="logo.svg" width="219" height="30" alt="Logo"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="navlist">
                            <li><Link href="javascript:;">Corporate</Link></li>
                            <li><Link href="javascript:;">Hotel</Link></li>
                            <li><Link href="javascript:;">SPA & Salon</Link></li>
                            <li><Link href="javascript:;">Industrial</Link></li>
                            <li><Link href="javascript:;">Security</Link></li>
                            <li><Link href="javascript:;">Hospital</Link></li>
                            <li><Link href="javascript:;">By Profession</Link></li>
                        </ul>
                    </div>
                    <div className="colC">
                        <ul className="call_action">
                            <li><Link href="javascript:;"><img src="/assets/icon/search-white.svg" alt="Search Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/user-white.svg" alt="User Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/like-white.svg" alt="Wishlist Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/cart-white.svg" alt="Cart Icon" /></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}