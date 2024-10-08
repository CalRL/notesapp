"use client";

import { redirect } from "next/navigation";
import { createDefaultNote, Note, NoteProperties } from "./components/Note";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<NoteProperties[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  if (!loggedIn) {
    redirect("/register");
  }

  function handleClick(): void {
    const newNote = createDefaultNote();
    setNotes((prevNotes) => [...prevNotes, newNote]);
    console.log("Created note: ", newNote);
  }

  return (
    <div>
      <div className="grid grid-cols-4 mx-auto max-h-screen">
        <div className="box-border border-[1px] min-h-screen">
          <div>
            <div className="box-border border-[1px] xl:text-5xl text-3xl my-4 text-center">
              Cal's Notes App
            </div>
            <button
              onClick={handleClick}
              className="min-w-max text-center bg-blue-300 hover:bg-blue-200 mx-[30%] duration-150 select-none mb-8"
            >
              Create Default Note
            </button>
            <div className="mt-4 space-y-4 mx-[10%] items-center ">
              {notes.length > 0 ? (
                notes.map((note, index) => <Note key={index} {...note} />)
              ) : (
                <p className="text-center">No notes created yet.</p>
              )}
            </div>
          </div>
        </div>
        <div className="box-border border-[1px] col-span-3">
          This is column two!
        </div>
      </div>
    </div>
  );
}
