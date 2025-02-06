"use client";

import AdminDashboard from "@/components/AdminDashboard";
import UserDashboard from "@/components/UserDashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; // Install it: npm install jwt-decode

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ fullName: string; role: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Account/Login");
    } else {
      try {
        const decodedUserData = jwtDecode<{ fullName: string; role: string }>(token);
        setUser(decodedUserData);
        // console.log(decodedUserData);
        
      } catch (error) {
        console.error("Invalid Token:", error);
        localStorage.removeItem("token");
        router.push("/Account/Login");
      }
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await fetch("/api/account/logout", { method: "POST", credentials: "include" });
    router.push("/");
  };

  return (
    <div className="max-w-[1440px] font-poppins w-full mx-auto mt-[90px]">
      <h1 className="text-4xl font-semibold text-center">
        Welcome {user ? user.fullName : "Guest"}!
      </h1>

      {user?.role === "user" ? <UserDashboard /> : <AdminDashboard />}

      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
