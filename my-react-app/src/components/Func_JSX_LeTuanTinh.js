import React from 'react'

export default function Func_JSX_LeTuanTinh() {
    const users = {
        name: "Le Tuan Tinh",
        email: "tnh2424@gmail.com",
        age: 20
    } 
  return (
    <div>Func_JSX_LeTuanTinh
    <h3>
        Welcom to, {users.name} - {users.age} 
    </h3>
    <hr/>
    
    </div>
  )
}
