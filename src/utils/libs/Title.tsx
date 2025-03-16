import React from 'react'

interface titleProps{
    children : React.ReactNode;
}

const Title :React.FC<titleProps> = ({ children }) => {
  return (
    <span className='border border-fade-gray rounded-full bg-red-blue-400 text-[16px] from-fade-gray/50 to-[#232A3E1A] bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] text-white font-Manrope text-center px-4 py-3 place-content-center'>
      {children}
    </span>
  )
}

export default Title
