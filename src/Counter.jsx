// import { useState } from "react"

import { useState } from "react";
import './index.css'

// export default function Counter(){
//     const [count, setCount] = useState(0)

//     const counterHandler = () =>{
//         const newCount = count + 1;
//         setCount(newCount)
//     }

//     const reduceHandler = () =>{
//         const reduce = count - 1;
//         setCount(reduce)
//     }

//     return (
//         <div style={{border:'2px solid red', padding: '20px'}}>
//             <h2>Counter: {count}</h2>
//             <button style={{marginRight:'10px', backgroundColor: 'tomato', color:'white'}} onClick={counterHandler}>count</button>
//             <button style={{ marginRight: '10px', backgroundColor: 'tomato', color:'white' }} onClick={reduceHandler}>reduce</button>
//         </div>
//     )
// }






export default function Counter(){
    const [count, setCount] = useState(0);
    const plusCounter = () =>{
        setCount(count + 1)
      
    }
    const minusCounter = () =>{
        const reduce = count - 1;
        setCount(reduce)
    }
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button className="button" onClick={plusCounter}>Count</button>
            <button className="button" onClick={minusCounter}>Reduce</button>
        </div>
    )

}













