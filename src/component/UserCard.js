import React from 'react';
import './UserCard';
import {Button, Card} from "react-bootstrap"

function UserCard({el}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image}/>
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.email}
      </Card.Text>
      <Button variant="primary">Edit</Button>
      <Button variant="danger">Delete</Button>
    </Card.Body>
  </Card>
    );
}

export default UserCard;
