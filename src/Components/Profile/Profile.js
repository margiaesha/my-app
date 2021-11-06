import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const Profile = () => {
    const[todo,setTodo]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>setTodo(data))
    },[])
    return (
        <div>
                <div>
           <Row xs={1} md={2} lg={3} className="g-4">
        {
            todo.map(todo=><Todo key={todo.id} todo={todo}></Todo>)
        }
</Row> 
        </div>
        </div>
    );
};

export default Profile;