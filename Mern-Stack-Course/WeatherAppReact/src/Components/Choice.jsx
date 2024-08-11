import React from 'react'

function Choice({key,PlaceSelected,choice}) {
    console.log("Choice.jsx")
    console.log(choice);
  return (
    <>
      <button className='pt-[3px] pb-[3px] text-white w-full' onClick={() => PlaceSelected(choice)} >{choice.key}</button>
    </>
  )
}

export default Choice
