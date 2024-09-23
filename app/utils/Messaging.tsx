import { NoteProperties } from "../components/Note";

function saveNote(noteProperties: NoteProperties) {
  console.log("Saving note: ", noteProperties);
}

function deleteNote(noteProperties: NoteProperties) {
  console.log("Deleting note: ", noteProperties);
}
