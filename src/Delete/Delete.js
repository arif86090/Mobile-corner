import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Delete = () => {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://young-fjord-81090.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    // Delete 
    const handelDelete = id =>{
        const proceed=window.confirm('Are you sure ypu want to Delete');
        if(proceed){
            console.log('id=',id)
            const url=`https://young-fjord-81090.herokuapp.com/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
              if(data.deletedCount > 0){
                  console.log('delete success full');
                  const remaining= users.filter(user => user._id !== id);
                  setUsers(remaining);
              }
            })
        }
    }
    return (
        <div>
            {
                users.map(user => <div key={user._id}>
                    <h4>{user.name} <button onClick={() => handelDelete(user._id)}>X</button></h4>
                </div> )
            }
        </div>
    );
};

export default Delete;