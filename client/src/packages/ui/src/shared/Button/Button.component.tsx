import Link from 'next/link';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

interface IDetailedButtonProps
	  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
    
  }
  interface IButtonProps extends PropsWithChildren<IDetailedButtonProps> {
    url?: string
  }

const Button: React.FC<IButtonProps> = ({ url, children, ...props }) => {
  return (
    <>
      {url && (
        <Link href={url}>{children}</Link>
      ) }
      {!url && (
        <button {...props}> {children} </button>
      )}
    </>
  );
};

export default Button;





