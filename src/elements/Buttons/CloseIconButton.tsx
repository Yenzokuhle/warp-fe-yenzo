"use client";
import { IoCloseOutline } from "react-icons/io5";

import { cn } from "@/src/lib/utils";

type CloseProps = {
  className?: string;
  onClick?: () => void;
};

export const CloseIconButton = ({ className, onClick }: CloseProps) => {
  return (
    <button
      className={cn(
        "h-[2.125rem] w-[2.125rem] cursor-pointer rounded-full border text-black",
        className,
      )}
      onClick={onClick}
    >
      <IoCloseOutline className="h-full w-full" />
    </button>
  );
};
