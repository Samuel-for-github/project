"use client";

import React, { useState, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";
import Loading from "./Loading";

export default function Dictionary() {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState([]);
  const [error, setError] = useState("");
  const [word, setWord] = useState("");
  const [audio, setAudio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useDebouncedCallback(async () => {
    try {
      setIsLoading(true); // Set loading state to true when fetching data starts

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DICTIONARY_API_URL}/${input}`
      );
      const data = await res.json();
      const definations = data[0]["meanings"][0]["definitions"];
      const word = data[0]["word"];
      const audioSrc = data[0]["phonetics"][0]["audio"];

      if (definations) {
        setDefinition(definations);
        setWord(word);
        if (audioSrc) {
          setAudio(audioSrc);
        } else {
          setAudio("");
        }
        setError("");
      }
    } catch (error) {
      setDefinition([]);
      setWord("");
      setAudio("");
      setError("The word you searched not available");
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading state to false when data fetching is done
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
            className="bg-slate-700 px-4 py-2 text-md font-bold rounded-xl cursor-pointer"
            type="submit"
            value={"search"}
          />
        </form>

        {isLoading && <Loading />} {/* Show loading indicator when isLoading is true */}

        {!isLoading && word && (
          <h1 className="font-bold my-3 text-4xl">word: {word}</h1>
        )}
        {!isLoading && word && <h2 className="text-3xl">Definitions</h2>}
        {!isLoading &&
          definition &&
          definition.map((value, index) => (
            <div className="flex gap-1 flex-col" key={index}>
              <h3 className="text-xl">
                {index + 1}) {value["definition"]}
              </h3>
              <br />
            </div>
          ))}

        {!isLoading && audio && (
          <>
            <h3 className="text-2xl">Audio</h3>
            <audio controls src={`${audio}`}></audio>
          </>
        )}

        {!isLoading && error && <div>{error}</div>}
      </div>
    </>
  );
}
