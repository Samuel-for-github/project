'use client'

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import Loading from './Loading';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { states } from '@/constant/states.js';
import Image from "next/image";

export default function Tourism() {
  const [state, setState] = useState('');
  const [places, setPlaces] = useState([])
  const [imgSrc, setImgSrc] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async (selectedState: string) => {
    try {
      setLoading(true)
      const res = await fetch(`api/tourism/states/${selectedState}`);
      const data = await res.json();
      const place = data
      setPlaces(place[0]["places"])
      setImgSrc(place[1]['img'])
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div>
        <div className='flex gap-4 justify-center'>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="outline border border-emerald-300 outline-emerald-700 rounded-md px-4 py-2">
              {state ? state : "Click to Open"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>States</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {loading && 
              <div className="flex justify-center">
                <Loading/>
              </div>
                }
              {!loading && states.map((val, index) => (
                <DropdownMenuItem
                  onClick={() => {
                    setState(val);
                    fetchData(val);
                  }}
                  key={index}
                >
                  {val}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="my-5 list-none">
          <Card className="mx-6">
            <CardHeader>
              {state ?
                <CardContent className="text-xl font-semibold">{`Top Tourist places in ${state}`}</CardContent> : ""
              }
              <CardContent>
                {places.map((val, i) => (
                  <div key={i} className="my-6">
                    <h1 className="text-2xl font-bold">{val}</h1>
                    <Image src={imgSrc[i]} alt="joy" width={420} height={420} />
                  </div>
                ))}
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
