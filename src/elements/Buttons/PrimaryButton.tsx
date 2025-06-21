"use client";

import { BUTTON_TYPES } from "@/src/Utils/types";

type PrimaryButtonProps = {
  isLoading: boolean;
  onClick?: () => void;
  buttonText: string;
  className?: string;
  type?: keyof typeof BUTTON_TYPES;
};

export const PrimaryButton = ({
  isLoading,
  className,
  onClick,
  buttonText,
  type,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      aria-disabled={isLoading}
      className={`border-green w-auto rounded-[1.625rem] border bg-white px-[28px] py-[4px] text-base font-normal ${className} cursor-pointer`}
      onClick={() => onClick && onClick()}
    >
      {isLoading ? "Searching" : buttonText}
    </button>
  );
};
