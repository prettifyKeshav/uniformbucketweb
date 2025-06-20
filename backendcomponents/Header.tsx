import Link from "next/link"
import { useEffect } from "react"

export default function Header(){
    return(
        <>
        <link rel="stylesheet" href="/admin-assets/fonts/font.css" />
        <header>                 
            <div className="header-wrapper">
                <div className="colA">
                    <a href="/uniform-bucket-admin/dashboard" className="logo">
                        <img src="/admin-assets/img/logo.png" alt="UB"/>
                    </a>
                </div>
                <div className="colB">
                    <ul>                   
                        <li>
                            <div className="dropdown-wrap inline-flex align-center">
                                <div className="user-ico">
                                    <img src='/admin-assets/img/user.png' alt='user icon' />
                                </div>
                                <div data-dropdown className="admin_de">
                                    <span className="title">Uniform Bucket</span>                                        
                                    <span className="design-ekgrgb">Admin Panle</span>
                                </div>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" data-dialog="byokkl" className="logo"><img src="/admin-assets/img/realtydigi-logo.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
    )
}