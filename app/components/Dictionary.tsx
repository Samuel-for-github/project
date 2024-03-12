"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Dictionary() {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");
  const fetchData = useDebouncedCallback(async () => {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/dictionary?word=${input}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );
      const data = await res.json();
      if (data.valid) {
        setDefinition(data.definition);
      }
      else{

        setDefinition("The word you searched not available")
      }
      
    } catch (error) {
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
            placeholder="Enter a word"
            onChange={(e) => setInput(e.target.value)}
            className="border rounded px-2 border-slate-700"
          />
          <input
            className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl"
            type="submit"
            value={"search"}
          />
        </form>
        <h2>{definition}</h2>
      </div>
    </>
  );
}
