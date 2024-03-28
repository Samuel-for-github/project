'use client'
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Header() {

  const [route, setRoute] = useState("Home")
  const [toggle, setToggle] = useState(false)
  
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

          <div className={`${toggle? 'flex':'hidden'} py-6 absolute top-9 left-8 rounded-xl bg-white`}>
          <div className="flex flex-col items-start w-full px-6 text-black">
                <Link href={"/"} onClick={()=>setRoute("Home")} >Home</Link>
                <Link href={"/CookingPage"} onClick={()=>setRoute("Cooking")}>Cooking</Link>
                <Link href={"DictionaryPage"}onClick={()=>setRoute("Dictionary")}>Dictionary</Link>
                <Link href={"NutritionPage"} onClick={()=>setRoute("Nutrition")}>Nutrition</Link>
                <Link href={"HistoryPage"} onClick={()=>setRoute("History")}>History</Link>
                <Link href={"TourismPage"} onClick={()=>setRoute("Tourism")}>Tourism</Link>
                <Link href={"WeatherPage"} onClick={()=>setRoute("Weather")}>Weather</Link>
             
          </div>

          </div>
        



        </div>
        <h1 className="md:hidden font-bold text-2xl">{route}</h1>
        <div className="flex gap-2 max-md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"/"} onClick={()=>setRoute("Home")} >Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"/CookingPage"} onClick={()=>setRoute("Cooking")}>Cooking</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"DictionaryPage"}onClick={()=>setRoute("Dictionary")}>Dictionary</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"NutritionPage"} onClick={()=>setRoute("Nutrition")}>Nutrition</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"HistoryPage"} onClick={()=>setRoute("History")}>History</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"TourismPage"} onClick={()=>setRoute("Tourism")}>Tourism</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
              <Link href={"WeatherPage"} onClick={()=>setRoute("Weather")}>Weather</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

      </nav>
    </>
  );
}
