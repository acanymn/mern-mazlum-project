import React, { useState } from 'react'
import { TextInput, Button } from 'flowbite-react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Sign = () => {
  const [isVisible,setIsVisible] = useState(false);

  function handleVisiblitiy(){
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  return (
<div className='min-h-screen'>
  <form className='flex items-center justify-center h-screen'>
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex flex-row items-center'>
        <div className='relative'>
          <TextInput type={isVisible ? "text" : "password"} placeholder='Parola' id='password' className='p-4 text-lg rounded border border-gray-300 w-64' />
        </div>
        <div onClick={handleVisiblitiy} className='ml-2 flex items-center'>
          {isVisible ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        </div>
      </div>
      <Button className='p-4 bg-gray-500 text-white rounded-3 hover:bg-black text-lg w-64'>Giriş</Button> {/* Adjusted width */}
    </div>
  </form>
</div>




  )
}
