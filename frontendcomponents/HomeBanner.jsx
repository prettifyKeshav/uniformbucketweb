"use client"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Link from "next/link"
 
export default function HomeBanner() {
    const swiperRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)
    const [swiperInstance, setSwiperInstance] = useState(null)

    useEffect(() => {
    setTimeout(() => {
            if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
    }, []);
    const toggleAutoplay = () => {
        const swiperInstance = swiperRef.current?.swiper
        if(!swiperInstance) {
            return
        }
        if(isPaused){
            swiperInstance.autoplay.start()
        } else {
            swiperInstance.autoplay.stop()
        }
        setIsPaused(!isPaused)
    }
    return(
        <div className="hero_sec">
            <Swiper
            className="hero_slider"
            onSwiper={setSwiperInstance}
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay = {{
                delay: 2000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            speed={1000}
            navigation={{
                prevEl: ".home-prev",
                nextEl: ".home-next"
            }}
            pagination={{
                enabled: true,
                el: ".progress_bar",
                type: "progressbar",
            }}
        > 
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-nav center-full home-nav">
                <button className="home-prev swiper-prev">
                    <div className="svgg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
                    </div>
                </button>
                <button className="home-next swiper-next">
                    <div className="svgg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
                    </div>
                </button>
            </div>
            <div className="scrollbar_wrapper container">
                <button className={`play_btn ${isPaused ? 'pause' : ''}`} onClick={toggleAutoplay}>
                </button>
                <div className="progress_bar"></div>
            </div>
            <div className="soundbar">
                <img src="/assets/icon/sound-off.svg" alt="Sound Off" />
            </div>
        </div>
    )
}