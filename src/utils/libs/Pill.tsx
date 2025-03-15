import React from 'react'

interface pillProps{
    children : React.ReactNode;
}

const Title :React.FC<pillProps> = ({ children }) => {
  return (
    <span className='border border-fade-gray-label rounded-full text-[16px] font-Manrope text-center px-4 h-[30px] place-content-center'>
      {children}
    </span>
  )
}

export default Title
