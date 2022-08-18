import {useContext,useState} from "react";
import { Form, Button } from "react-bootstrap";
import noteContext from "../context/Notes/noteContext";


function Addnote() {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title: "", description: "", tag: ""})
  }

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center">Add a new note</h2>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
            name="title"
              type="text"
              onChange={onchange}
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Note</Form.Label>
            <Form.Control

            name="description"
              as="textarea"
              onChange={onchange}
              placeholder="Description"
            />
          </Form.Group>
          <Button onClick={handleClick} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Addnote;
