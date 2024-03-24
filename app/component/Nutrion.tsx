"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function History() {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState("");
  const [nutrition, setNutrition] = useState([]);
  const fetchData = useDebouncedCallback(async () => {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${input}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );
      const data = await res.json();
      if (data.length > 0) {
        setNutrition(data);
        setErrors("");
      } else {
        setNutrition((prev) => []);
        setErrors("not available");
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
          placeholder="Enter a eatable"
          className="border rounded px-2 border-slate-700"
        />
        <input
          className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl"
          type="submit"
          value={"search"}
        />
      </form>
      <div>
        {nutrition &&
          nutrition.map((value: any) => (
            <div key={value.name}>
              <h1 className="font-bold my-3">name: {value.name}</h1>
              <p>calories: {value.calories}</p>
              <p>serving_size_g: {value.serving_size_g}</p>
              <p>fat_total_g: {value.fat_total_g}</p>
              <p>fat_saturated_g: {value.fat_saturated_g}</p>
              <p>protein_g: {value.protein_g}</p>
              <p>sodium_mg: {value.sodium_mg}</p>
              <p>potassium_mg: {value.potassium_mg}</p>
              <p>cholesterol_mg: {value.cholesterol_mg}</p>
              <p>carbohydrates_total_g: {value.carbohydrates_total_g}</p>
              <p>fiber_g: {value.fiber_g}</p>
              <p>sugar_g: {value.sugar_g}</p>

              <div className="block h-1 rounded-md border border-black border-b-2"></div>
            </div>
          ))}
        {errors}
      </div>
    </div>
  );
}
