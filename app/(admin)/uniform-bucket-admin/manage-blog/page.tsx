"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ManageBlogData() {
  const router = useRouter();
  useEffect(() => {
      const checkLoginStatus = async () => {
          try {
              const response = await axios.get("http://localhost:5050/check-login", {
                  withCredentials: true,
              });
              if (!response.data.loggedIn) {
                  router.push("/uniform-bucket-admin/login");
              }
          } catch (error) {
              console.error("Login check failed:", error);
          }
      };
      checkLoginStatus();
  }, [router]);
  return (
    <>
      <main>
        <h1>Manage Blog Data</h1>
      </main>      
    </>
  );
}
