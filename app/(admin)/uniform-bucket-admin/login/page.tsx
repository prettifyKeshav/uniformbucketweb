"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function login() {
    const [UserName, setUserName] = useState("");
    const [Passwords, setPasswords] = useState("");
    const router = useRouter();
    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:5050/check-login", {
    //                 withCredentials: true,
    //             });
    //             if (response.data.loggedIn) {
    //                 router.push("/uniform-bucket-admin/dashboard");
    //             }
    //         } catch (error) {
    //             console.error("Login check failed:", error);
    //         }
    //     };
    //     checkLoginStatus();
    // }, [router]);
    

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Username: "+UserName);
        console.log("Password: "+Passwords);
        const res = await fetch("http://localhost:5050/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ UserName, Passwords }),
        });
        const data = await res.json();
        console.log(data);
        if (data.success) {
            router.push("/uniform-bucket-admin/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

  return (
    <>      
      <div className="login-wrapper">
            <div className="form-wrap">
                <div className="login-form" data-tab="login-form">
                    <form className="model-body" onSubmit={handleLogin}>
                        <div className="logo"><img src="/admin-assets/img/logo.png" alt="" /></div>
                        <div className="form">
                            <div className="form-group">
                            <label htmlFor="txtusername">User Name*</label>
                            <input name="txtusername" type="text" id="txtusername" className="form-control" placeholder="Enter user name" value={UserName} onChange={(e) => setUserName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtpassword">Password*</label>
                                <div className="password-wrap">
                                    <input name="txtpassword" type="password" id="txtpassword" className="form-control login-password" placeholder="Enter Password" value={Passwords} onChange={(e) => setPasswords(e.target.value)}/>
                                    <button className="show-hide-password" type="button">
                                        <img src="assets/icon/eye.svg" alt="" />
                                        <img src="assets/icon/eye-disable.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                            <input type="submit" name="submit" value="Sign in" id="submit" className="form-group btn w-100"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}
