import { useEffect, useState } from "react"
import './index.css'
import User from "./User";


export default function UseEffect(){
    const [user, setUser] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
            
            
    },[])


    return (
        <div>
            {
                user.map(user => <User user={user}></User>)
            }
        </div>
    )
}


