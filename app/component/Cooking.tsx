"use client";

import React, {useState} from "react";

import Loading from "./Loading";

import { useDebouncedCallback } from "use-debounce";
export default function Cooking() {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState('')
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchData = useDebouncedCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://api.api-ninjas.com/v1/recipe?query=${input}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );

      const data = await res.json();
        if (data.length>0) {
          
          setRecipies(data);
          setErrors('')
        }
        else{
          setRecipies((prev)=>[])
          setErrors("No dish available")
          
        }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }, 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="primaryClass">
      <form className="flex gap-2 mb-4 justify-center" onSubmit={handleSubmit}>
        
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a dish"
          className="border rounded px-2 border-slate-700"
        />
        <input
          className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl"
          type="submit"
          value={"search"}
        />
      </form>
      
      <div className="mx-3">
      {loading && <div className="text-center"><Loading /></div>} 
      
        {!loading && recipies &&
          recipies.map((dish: any) => (
            
            <div key={dish.title}>
              <h1 className="font-bold my-3">{dish.title}</h1>
              <p className="text-lg text-red-500 mb-3">
                Ingredients: {dish.ingredients}
              </p>
              <p className="mb-3">{dish.servings}</p>
              <p className="text-left mb-3">{dish.instructions}</p>
              <div className="block h-1 rounded-md border border-black border-b-2"></div>
            </div>
            
          ))
        }
        {!loading && errors}
       
      </div>
   
     
      
    </div>
  );
}
