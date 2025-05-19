'use client';

import Link from 'next/link'
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	PropsWithChildren,
} from 'react'
import './button.scss'

type ButtonProps =
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({
  children,
  className = '',
  href,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const classes =
    `${className} button px-8 py-2 font-bold text-base text-white text-center
     uppercase rounded-xl skew-x-[-20deg] cursor-pointer`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className="skew-x-[20deg]">{children}</div>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <div className="skew-x-[20deg]">{children}</div>
    </button>
  );
}
