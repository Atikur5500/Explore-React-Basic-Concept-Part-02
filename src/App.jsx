import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import UseEffect from './UseEffect'
import User from './User'
import Posts from './Posts'
import Card from './components/Card'


const App = () => {
  const buttonClick = () =>{
    alert('Button Clicked!')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
  ];
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <UseEffect></UseEffect> */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <Card name="Shoes"></Card>
        <Card name="Badhon"></Card>
        <Card name="product"></Card>
      </div>
      {/* <Posts></Posts> */}
      
      {/* <h1>React Core Conceptf</h1>
      <p>Hi I am new at react Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, quia dignissimos sint hic nihil quasi minus? Tenetur veniam totam repellat.</p> */}


      {/* <button onClick={buttonClick}>Click Me</button>
      <button onClick={() => addToFive(35)}>Add +5</button> */}

    </div>
  )
}















export default App