import { UUID } from "crypto";
import "../globals.css";

export type NoteProperties = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  viewOnly: boolean;
  userId: string;
};

export function Note({
  id,
  title,
  content,
  createdAt,
  updatedAt,
  viewOnly,
  userId,
}: NoteProperties) {
  function formatDate(date: Date): string {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    let day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");

    let now = new Date();

    if (now.getDay != date.getDay) {
      return `${year}-${month}-${day}-${hours}:${minutes}`;
    } else {
      return `${hours}:${minutes}`;
    }
  }
  return (
    <div>
      <div className="rounded-sm box-border border-[1px]">
        <div className="">
          <div className="text-3xl text-center">{title}</div>
        </div>
        {/* content */}
        <div className=" my-2 text-xl text-center">
          Last edited: {formatDate(updatedAt)}
        </div>
      </div>
    </div>
  );
}

export function createDefaultNote(): NoteProperties {
  const defaultNote: NoteProperties = {
    id: "example-uuid",
    title: "Hello World!",
    content: "This is a note!",
    createdAt: new Date(),
    updatedAt: new Date(),
    viewOnly: false,
    userId: "",
  };
  return defaultNote;
}

function saveNote(noteProperties: NoteProperties) {}
