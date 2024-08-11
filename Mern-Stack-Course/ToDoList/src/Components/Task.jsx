import React, { useState } from 'react'
import deleteIcon from '../Images/deleteIcon.png';
import editIcon from '../Images/EditIcon.png';
import saveIcon from '../Images/saveIcon.png';

function Task({id,handleDelete,value,OnTaskValueChanged}) {

    const [isEditing, setisEditing] = useState(false)
    function handleIsEditing()
    {
        setisEditing(!isEditing)
        
        OnTaskValueChanged(id,inputValue)
    }
    
    const [inputValue, setinputValue] = useState(value)
    function handleChange(e)
    {
        setinputValue(e.target.value);
<<<<<<< HEAD

    }
  
=======
        console.log(e.target.value)
    }
  
    
    
>>>>>>> 1aac80a (Weather On React Added)
  return (
    <div>
       <div className='my-5 flex flex-row flex-erap'>
        
<<<<<<< HEAD
        {isEditing ? <>      
=======
        {isEditing ? 
        <>      
>>>>>>> 1aac80a (Weather On React Added)
        <input type='text' value={inputValue} onChange={handleChange}  
        className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2.5'
        />
        <button onClick={handleIsEditing} className='ml-2 bg-[#1adb4e] p-2.5  rounded-xl'> <img src={saveIcon} alt='Edit Icon' className='w-[25px] h-auto' /> </button>
        </>
        :
        <>
        <input type='text' value={inputValue} onChange={handleChange}  
        className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2.5' disabled
        />
        <button onClick={handleIsEditing} className='ml-2 bg-[#1adb4e] p-2.5  rounded-xl'> <img src={editIcon} alt='Edit Icon' className='w-[25px] h-auto' /> </button>
        </>
        }
        
        <button className='ml-2 bg-[#1adb4e] p-2.5  rounded-xl' onClick={() => handleDelete(id)}> <img src={deleteIcon} alt='Delete Icon' className='w-[25px] h-auto' /> </button>
        </div>
    </div>
  )
}

<<<<<<< HEAD
export default Task
=======
export default  React.memo(Task)
>>>>>>> 1aac80a (Weather On React Added)
