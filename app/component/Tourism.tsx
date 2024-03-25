'use client'

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

export default function Tourism() {
  const [state, setState] = useState('');
  const [places, setPlaces] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch(`api/tourism/states/${state}`);
      const data = await res.json();
      const place = data
      setPlaces(place)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
    <div className='flex gap-4'>
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
      <Button className="px-6 py-2 font-semibold text-2xl" onClick={fetchData}>Get</Button>
    </div>

    <div className="list-none">
      {places.map((val, index)=>(
        <li key={index}>
          {val}
        </li>
      ))}
    </div>
    
    </>
  );
}
