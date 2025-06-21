"use client";

import { CloseIconButton } from "../Buttons/CloseIconButton";
import CustomText from "../Text/CustomText";
import { PiEmptyDuotone } from "react-icons/pi";

type NoResultsViewProps = {
  text: string;
  onClose?: () => void;
};

export const NoResultsView = ({ text, onClose }: NoResultsViewProps) => {
  return (
    <div className="relative flex grow flex-col items-center justify-center">
      {onClose && (
        <div className="absolute top-0 right-0">
          <CloseIconButton onClick={onClose} />
        </div>
      )}

      <div className="h-[4.625rem] w-[4.625rem]">
        <PiEmptyDuotone className="text-orange h-full w-full" />
      </div>
      <CustomText
        textLabel={text}
        fontWeight="font-light"
        fontSize="text-[18px]"
        fontColor={`text-color-blue`}
        customClass="md:block"
      />
    </div>
  );
};
