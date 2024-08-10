import React, { useState } from 'react'

const Home = (props) => {
  const [value,setValue] = useState(0);
  const handleInput = (e) =>{
    setValue(e.target.value);
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleInput} />
      <p>
        this is parapraph {props.brand}
      </p>
      <p>{value}</p>
    </div>
  )
}

export default Home
