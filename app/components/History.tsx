"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function History() {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState('')
  const [events, setEvents] = useState([]);
  const fetchData = useDebouncedCallback(async () => {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/historicalevents?text=${input}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );
      const data = await res.json();
      if (data.length>0) {
        setEvents(data)  
        setErrors('')
      }
      else{
        setEvents(prev=>[])  
        setErrors('This Historial Event is not available')
      }
    } catch (error) {
      console.log(error);
    }
  }, 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="primaryClass">
      <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a historical event or place"
          className="border rounded px-2 border-slate-700"
        />
        <input
          className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl"
          type="submit"
          value={"search"}
        />
      </form>
      <div>
        {events && events.map((event: any) => (
            <div key={event.event}>
              <h1 className="font-bold my-3">{event.event}</h1>
              <p>{event.day}-{event.month}-{event.year}</p>
             
              <div className="block h-1 rounded-md border border-black border-b-2"></div>
            </div>
          ))
        }
        {errors}
      </div>
    </div>
  );
}
