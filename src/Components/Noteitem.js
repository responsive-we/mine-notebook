import { Card, Badge } from "react-bootstrap";

function Noteitem(props) {
  const {title,description,tags} = props;
    return (
    <div className="col-md-3 my-3 view">
      <Card>
        <div className="d-flex position-absolute justify-content-end end-0 my-1 mx-1">
          <Badge pill bg="primary">
            {tags}
          </Badge>{" "}
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex">
          <i className="fa-solid fa-trash"></i> 
          <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Noteitem;
