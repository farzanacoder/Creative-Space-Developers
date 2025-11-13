"use client";

import Link from "next/link";

const CommonButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href,
  to,
  target,
  ...props
}) => {

  
  const baseClasses = 'px-6 py-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

const variants = {
  primary:
    "bg-brand text-white hover:bg-white hover:text-brand cursor-pointer duration-300 text-sm rounded-[40px]",
  secondary:
    "bg-white text-brand hover:bg-brand hover:text-white cursor-pointer duration-300 text-sm rounded-[40px]",
  outline:
    "border border-[#D1D5DC] text-primary hover:bg-brand hover:text-white duration-300 text-sm rounded-[40px] cursor-pointer",
};

  const sizes = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base',
    lg: 'text-lg px-8 py-3',
    xl: 'text-xl px-10 py-4',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim();

  
  if (to) {
    return (
      <Link
        href={to}
        className={buttonClasses}
        target={target}
        {...props}
      >
        {children}
      </Link>
    );
  }

 
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

 
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;