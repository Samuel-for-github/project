'use client'
import Link from "next/link";
import React, { useState, useEffect, useRef, useContext } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { UserWrapper, useUserContext } from "../context/UserContextProvider";



export default function Header() {

  const [route, setRoute] = useState("Home")
  const [toggle, setToggle] = useState(false)
  const {user, setUser} = useUserContext();
  const handleMenu = ()=>{
    setToggle(prev=>!prev)
  }

  const popUpRef = useRef<HTMLDivElement | null>(null)


  // to close popup

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent)=>{

      if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
        setToggle(false)
      }

    }

    document.addEventListener("click", handleClickOutside)

    if (!toggle) {
      document.removeEventListener("click", handleClickOutside)
    }

    return ()=>{
      document.removeEventListener("click", handleClickOutside)
    }

  }, [toggle])


  return (
    <>
      <nav className="flex w-full justify-between gap-2 my-4 px-6">
        <div className="md:hidden animate-out" >
          <div onClick={handleMenu} ref={popUpRef} className="w-[28px] h-[28px] object-contain">
          {toggle? <HiX size={30}/> : <HiMenu size={30}/>}
          </div>

          <div className={`${toggle? 'flex':'hidden'} py-6 absolute top-9 left-8 rounded-xl bg-white z-10`}>
          <div className="flex flex-col items-start w-full px-6 text-black">
                <Link href={"/"} onClick={()=>setUser("Home")} >Home</Link>
                <Link href={"/CookingPage"} onClick={()=>setUser("Cooking")}>Cooking</Link>
                <Link href={"DictionaryPage"}onClick={()=>setUser("Dictionary")}>Dictionary</Link>
                <Link href={"NutritionPage"} onClick={()=>setUser("Nutrition")}>Nutrition</Link>
                <Link href={"HistoryPage"} onClick={()=>setUser("History")}>History</Link>
                <Link href={"TourismPage"} onClick={()=>setUser("Tourism")}>Tourism</Link>
                <Link href={"WeatherPage"} onClick={()=>setUser("Weather")}>Weather</Link>
             
          </div>

          </div>
        



        </div>
      
        <h1 className="font-bold text-2xl">{user}</h1>
      
        
        <div className="flex gap-2 max-md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"/"} onClick={()=>setUser("Home")} >Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"/CookingPage"} onClick={()=>setUser("Cooking")}>Cooking</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"DictionaryPage"}onClick={()=>setUser("Dictionary")}>Dictionary</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"NutritionPage"} onClick={()=>setUser("Nutrition")}>Nutrition</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"HistoryPage"} onClick={()=>setUser("History")}>History</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"TourismPage"} onClick={()=>setUser("Tourism")}>Tourism</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
              <Link href={"WeatherPage"} onClick={()=>setUser("Weather")}>Weather</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

      </nav>
    </>
  );
}
