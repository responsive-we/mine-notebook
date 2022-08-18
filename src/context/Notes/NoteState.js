import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNote=[
        {
          "_id": "6296f7d2072301dc9ae24a27",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:30.152Z",
          "__v": 0
        },
        {
          "_id": "6296f7d2072301dc9ae24a29",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:30.302Z",
          "__v": 0
        },
        {
          "_id": "6296f7d2072301dc9ae24a2b",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:30.533Z",
          "__v": 0
        },
        {
          "_id": "6296f7d2072301dc9ae24a2d",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:30.670Z",
          "__v": 0
        },
        {
          "_id": "6296f7d2072301dc9ae24a2f",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:30.913Z",
          "__v": 0
        },
        {
          "_id": "6296f7d3072301dc9ae24a31",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:31.018Z",
          "__v": 0
        },
        {
          "_id": "6296f7d3072301dc9ae24a33",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:31.228Z",
          "__v": 0
        },
        {
          "_id": "6296f7d3072301dc9ae24a35",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:31.352Z",
          "__v": 0
        },
        {
          "_id": "6296f7d3072301dc9ae24a37",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:31.595Z",
          "__v": 0
        },
        {
          "_id": "6296f7dc072301dc9ae24a3e",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-01T05:23:40.333Z",
          "__v": 0
        },
        {
          "_id": "6299c6cd84283353ceb62b7f",
          "user": "62961c9544e41b28a05089fc",
          "title": "title",
          "description": "description",
          "tags": "general",
          "date": "2022-06-03T08:31:09.091Z",
          "__v": 0
        }
      ]
      const [notes,setNote]=useState(initialNote)
      //* Add a note
      const addNote=(title,description,tag)=>{
        const note=[{
          "_id": "629sda6f7d2072301dc9ae24a27",
          "user": "62961c9544e41b28a05089fc",
          "title": title,
          "description": description,
          "tags": tag,
          "date": "2022-06-01T05:23:30.152Z",
          "__v": 0
        }]
        console.log("addding a note");
        setNote(notes.concat(note))
        console.log(notes);
      }

      //* Update a note
      const updateNote=()=>{

      }
      //* Delete a note
      const deleteNote=()=>{

      }
  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
