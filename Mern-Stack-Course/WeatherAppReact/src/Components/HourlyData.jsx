import React from 'react'

function HourlyData({hour,temp,imgUrl}) {
  return (
    <>
      <p>{hour}</p>
      <div className='flex flex-row justify-center items-center'>
      <img src={imgUrl}/>
        <p>{temp}</p>      
      </div>
    </>
  )
}

export default React.memo(HourlyData)
