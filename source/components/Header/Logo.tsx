import React from 'react';

export default function Logo(): JSX.Element {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img
        alt="Company logo"
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </a>
  );
}
