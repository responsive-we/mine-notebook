import {useContext} from "react";
import noteContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

function Notes() {
    const context = useContext(noteContext)
  const {notes}= context
  return (
    <><Addnote/>
    <div className="row my-3">
    { notes.map((note)=>{
      return <Noteitem key={note._id} title={note.title}
      description={note.description} tags={note.tags}/>
    })}
   </div>
   </>
  )
}

export default Notes