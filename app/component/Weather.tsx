'use client'
import React from 'react'
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Weather() {

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [place, setPlace] = useState("")
  const [temp, setTemp] = useState("");
  const [sky, setSky] = useState("");
  const [country, setCountry] = useState("")
  const fetchData = useDebouncedCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${input}&aqi=yes`,);
      const data = await res.json();
      
      
      const name = data["location"]["name"];
      const country = data["location"]["country"];
      const conditionText = data["current"]["condition"]["text"]
   
      const temperatureCelcius = data["current"]["temp_c"];
      if (data) {
        setPlace(name)
        setCountry(country)
        setTemp(temperatureCelcius)
        setSky(conditionText)
       setError("")
      }
      
    } catch (error) {
     setPlace("")
     setTemp("")
     setSky("")
     setCountry("")
      setError("The word you searched not available")
      console.log(error);
    
    }
  }, 1);

  return (
    <>
     <div className="flex flex-col justify-center items-center mx-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}
          className="flex gap-2 mb-4"
        >
          <input
            type="text"
            placeholder="Enter a city or country"
            onChange={(e) => setInput(e.target.value)}
            className="border rounded px-2 border-slate-700"
          />
          <input
            className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl cursor-pointer"
            type="submit"
            value={"search"}
          />
        </form>
        {error}
{place?         <Card>
  <CardHeader>
    <CardTitle>{place? `Region: ${place}, ${country}`:""}</CardTitle>
  </CardHeader>
  <CardContent>
    <h2 className="text-xl">{temp? `${temp} °C`: ""}</h2>
  </CardContent>
  <CardFooter>
    <h3 className="text-lg">{sky? `Atmosphere is ${sky}`: ""}</h3>
  </CardFooter>
</Card> : "" }




      </div>
    </>
    
  )
}
