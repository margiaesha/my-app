import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Todo = (props) => {
    const{id,title,completed}= props.todo
    let history = useHistory();
    const clickMe=id=>{
        history.push(`/profile/${id}`);
    }
    return (
        <Col>
        <Card border="info">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>id:{id}</p>
             {
                 completed?<p>You will get scholarship</p>:<p>Go Home Buddy</p>
             }
            <Button onClick={()=>clickMe(id)} variant="info">Click Me</Button>{' '}
            
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Todo;