import { useState, useEffect } from "react";
 
function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  // TODO 3: on page load, fetch all notes from GET /api/notes
  // hint: use useEffect + async/await, same pattern as warmup.js A5
  useEffect(() => {
    const loadNotes= async()=> {
    const data= await fetch("http://localhost:5000/api/notes");
    const notes= await data.json();
    setNotes(notes);
    }
    loadNotes();
  }, []);
 
  // TODO 4: send a POST request with { title, content }, then update the list
  const handleAddNote = async () => {
    const response= await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const note= await response.json();
    setNotes([...notes, note]);
    setTitle("");
    setContent("");
  };
 
  return (
    <div>
      <h1>MicroNotes</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <br></br>
      <button onClick={handleAddNote} disabled={title.trim() === "" || content.trim() === ""}>Add Note</button>
 
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}: {note.content}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
