"use client"
import AdminStaticData from './AdminStaticData.json';
import { useEffect } from "react"
import parse from "html-react-parser";
import { usePathname, useRouter  } from 'next/navigation';
import Link from "next/link"
import axios from "axios";

export default function SideNav(){     
    const Menu= AdminStaticData.Menu.items;
    const pathname = usePathname();
    const router = useRouter();
    useEffect(()=>{
        let hideBtn = document.querySelector('.hide_menu')
        let sideMenu = document.getElementsByTagName('aside')
        const menuToggle = () => {
            hideBtn?.classList.toggle('collapse')
            Array.from(sideMenu).forEach(item => item.classList.toggle('collapse'))
        }
        hideBtn?.addEventListener('click', menuToggle)

        return () => {
            hideBtn?.removeEventListener('click', menuToggle)
        }
    }, []);

    const handleLogout = async () => {
        try {
            const res = await axios.post(
            "http://localhost:5050/logout",
            {},
            { withCredentials: true }
            );

            if (res.data.success) {
                router.push("/uniform-bucket-admin/login");
            } 
            else {
                alert("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
            alert("Something went wrong while logging out.");
        }
    };

    return(
        <>
        <aside className="">
            <div className="aside-wrap">
                <div className="aside-col">
                    <ul className="Header_nav_Active">
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className={`${pathname === item.url.toString() || pathname === item.addurl.toString() ? "active" : ""}`}>
                                    {parse(item.icon)}
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a onClick={handleLogout}>
                                <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' className='iconify iconify--hugeicons' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' data-icon='hugeicons:logout-04'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8' color='currentColor'></path></svg>
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        {/* <button type="button" className="aside-collapse-btn hide_menu" data-attr="1" data-menu="1"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:round-play-arrow"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"></path></svg></button> */}
    </>
    )
}