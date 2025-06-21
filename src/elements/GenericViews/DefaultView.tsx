"use client";

import CustomText from "../Text/CustomText";

type DefaultViewProps = {
  text: string;
};

export const DefaultView = ({ text }: DefaultViewProps) => {
  return (
    <div className="flex grow items-center justify-center">
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
