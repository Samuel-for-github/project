'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { states } from '@/constant/states.js';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Tourism() {
  const [state, setState] = useState('');
  const [places, setPlaces] = useState([])
  const [imgSrc, setImgSrc] = useState([])
  const fetchData = async () => {
    try {
      const res = await fetch(`api/tourism/states/${state}`);
      const data = await res.json();
      const place = data
      setPlaces(place[0]["places"])
      setImgSrc(place[1]['img'])
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
  <div>

  <div className='flex gap-4 justify-center'>
    <DropdownMenu>
        <DropdownMenuTrigger className="outline border border-emerald-300 outline-emerald-700 rounded-md px-4 py-2">
          {state? state: "Click to Open"}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>States</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {states.map((val, index) => (
            <DropdownMenuItem
            
              onClick={() => { 
                setState(val);
                
              }}
              key={index}
            >
              {val}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="px-6 py-2 font-semibold text-2xl" onClick={fetchData}>Click to Get</Button>
    </div>

    <div className="my-5 list-none">
      
    <Card className="mx-6">
  <CardHeader>
    {state?
    <CardTitle>{`Top Toursists places in ${state}`}</CardTitle>:""
}

          <CardContent>
            {places.map((val, i)=>(
              <div key={i} className="my-6">
                <h1 className="text-2xl font-bold">{val}</h1>
              <Image src={imgSrc[i]} alt="joy" width={420} height={420}/>
              </div>
              
            ))}
          </CardContent>
  </CardHeader >
  

   
       

      
     
  
</Card> 
      
      
    </div>
  </div>

    </>
  );
}
