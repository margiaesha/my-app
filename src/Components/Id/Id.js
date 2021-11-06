import React, { useEffect, useState } from 'react';

const Id = () => {
   const[id,setId] =useState({})
   useEffect(()=>{
       const url=`https://jsonplaceholder.typicode.com/todos/${1}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setId(data))
   },[])
    return (
        <div>
            <h1>{}</h1>
            <h3>{}</h3>
        </div>
    );
};

export default Id;