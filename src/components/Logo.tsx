import React from 'react';

interface LogoProps {
  variant?: 'color' | 'white' | 'black';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'color',
  className = 'h-11 w-auto',
}) => {
  const srcMap = {
    color: './logos/logo-cores.svg',
    white: './logos/logo-white.svg',
    black: './logos/logo-black.svg',
  };

  return (
    <img
      src={srcMap[variant]}
      alt="Naturale Colchões"
      className={`${className} object-contain select-none`}
    />
  );
};
