import React, { useState, useEffect } from 'react'

const App = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDoggies = async () => {
    const res = await fetch('/api/allDogs');
    const resjson = await res.json();
    console.log(resjson)
    setDogs(resjson)
  }

  useEffect(() => {
    fetchDoggies();
  }, [])

  
  return (
    <div>
      Hello World
      {dogs.map(d => (
        <>
        <p key={d._id}>{d.name}</p>
        <img src={d.image._meta.url} alt={d.name} />
        </>
      ))}
    </div>
  )
}

export default App

