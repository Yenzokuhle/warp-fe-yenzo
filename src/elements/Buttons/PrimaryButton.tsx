"use client";

type PrimaryButtonProps = {
  isLoading: boolean;
  onClick?: () => void;
  buttonText: string;
  className?: string;
};

export const PrimaryButton = ({
  isLoading,
  className,
  onClick,
  buttonText,
}: PrimaryButtonProps) => {
  return (
    <div
      aria-disabled={isLoading}
      className={`border-green w-auto rounded-[1.625rem] border bg-white px-[28px] py-[4px] text-base font-normal ${className} cursor-pointer`}
      onClick={() => onClick && onClick()}
    >
      {isLoading ? "Searching" : buttonText}
    </div>
  );
};
