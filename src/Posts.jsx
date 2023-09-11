import { useEffect, useState } from "react"
import Post from "./Post";
export default function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    },[])
    return(
        <div>
          
            <h3>Post:{posts.length}</h3>
            {
                posts.map(item => <Post post={item}></Post>)
            }
        </div>
    )
}