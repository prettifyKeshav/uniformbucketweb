import Image from "next/image"
import "../public/styles/footer/footer.css"
import Link from "next/link"
export default function Footer(){
    return(
        <>
            <div className="upper-wrapper">
                <div className="add_item">
                    <Image src="/assets/icon/bulk.svg" width="40" height="40" alt="Bulk Order Icon" />
                    <div className="content">
                        <h6>Bulk Order</h6>
                        <p>Get a good discount on bulk orders.</p>
                    </div>
                </div>
                <div className="add_item">
                    <Image src="/assets/icon/world.svg" width="40" height="40" alt="Pan Delivery Icon" />
                    <div className="content">
                        <h6>PAN INDIA DELIVERY</h6>
                        <p>Get your uniform delivered at your doorstep.</p>
                    </div>
                </div>
                <div className="add_item">
                    <Image src="/assets/icon/exchange.svg" width="40" height="40" alt="Exchanges Icon" />
                    <div className="content">
                        <h6>7 DAYS EXCHANGE*</h6>
                        <p>Simply exchange it within 7 days.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="upper-footer">
                        <div className="colA form">
                            <Link href="/">
                                <img src="/logo.svg" width="219" height="25" alt="Logo"></img>
                            </Link>
                            <div className="form-group">
                                <input id="email" className="form-control" type="email" name="email"></input>
                                <label htmlFor="email">Enter Your Email Address</label>
                            </div>
                            <p>*By proceeding, you agree to the Uniform Bucket Terms & Conditions, have read and understood the Uniform bucket Privacy Policy, and consent to receiving brand marketing messages.</p>
                        </div>
                        <div className="colB">
                            <div className="list_item">
                                <h6>Products</h6>
                                <ul>
                                    <li><Link href="javascript:;">Corporate</Link></li>
                                    <li><Link href="javascript:;">Hotel</Link></li>
                                    <li><Link href="javascript:;">SPA & Salon</Link></li>
                                    <li><Link href="javascript:;">Industrial</Link></li>
                                    <li><Link href="javascript:;">Security</Link></li>
                                    <li><Link href="javascript:;">Hospital</Link></li>
                                </ul>
                            </div>
                            <div className="list_item">
                                <h6>Company</h6>
                                <ul>
                                    <li><Link href="javascript:;">About us</Link></li>
                                    <li><Link href="javascript:;">Contact us</Link></li>
                                    <li><Link href="javascript:;">FAQ’s</Link></li>
                                    <li><Link href="javascript:;">Careers</Link></li>
                                    <li><Link href="javascript:;">Blogs</Link></li>
                                </ul>
                            </div>
                            <div className="list_item">
                                <h6>Legal</h6>
                                <ul>
                                    <li><Link href="javascript:;">Privacy Policy</Link></li>
                                    <li><Link href="javascript:;">Terms and Conditions</Link></li>
                                    <li><Link href="javascript:;">Shipping & Delivery</Link></li>
                                    <li><Link href="javascript:;">Returns & Exchanges</Link></li>
                                    <li><Link href="javascript:;">Size Guide</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lower-footer">
                        <div className="colC">
                            <ul className="social_icons">
                                <li><Link href="javascript:;"><Image src="/assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="javascript:;"><Image src="/assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="javascript:;"><Image src="/assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="javascript:;"><Image src="/assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                                <li><Link href="javascript:;"><Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image></Link></li>
                            </ul>
                            <ul className="contact_no">
                                <li><Link href="tel:+918860300234">+91 - 8860300234</Link></li>
                                <li><Link href="tel:+918285309609">8285309609</Link></li>
                            </ul>
                        </div>
                        <div className="colD flex">
                            <Link href="javascript:;"><Image src="/assets/icon/whatsapp.svg" width="18" height="18" alt="Whatsapp icon"></Image> Whatsapp</Link>
                            <Link href="javascript:;">Pay Online</Link>
                            <button className="corp_login">Corporate Login</button>
                        </div>
                    </div>
                </div>
                <div className="footer_rights">
                    <div className="container flex">
                        <p>©  JAF Enterprises Pvt. Ltd . All Right Reserved</p>
                        <div className="add_icon">
                            <p>Powered by :</p>
                            <Image src="/assets/images/home/footer_powered.png" alt="Powered By" width="200" height="34"></Image>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}