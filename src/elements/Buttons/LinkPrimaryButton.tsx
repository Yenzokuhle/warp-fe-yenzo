"use client";
import Link from "next/link";

type LinkPrimaryButtonProps = {
  onClick?: () => void;
  buttonText: string;
  href: string;
  className?: string;
};

export const LinkPrimaryButton = ({
  className,
  onClick,
  buttonText,
  href,
}: LinkPrimaryButtonProps) => {
  return (
    <Link
      href={href}
      className={`border-green w-fit rounded-[1.625rem] border bg-white px-4 text-base font-normal ${className}`}
      onClick={() => onClick && onClick()}
    >
      {buttonText}
    </Link>
  );
};
