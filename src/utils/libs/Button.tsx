import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='px-8 h-[58px] bg-secondary text-fade-white hover:bg-fade-white hover:text-secondary transition-colors duration-300 ease-in-out font-Manrope font-medium font-base rounded-lg max-w-[205px]'>
      {children}
    </button>
  );
};

export default Button;
