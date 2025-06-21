import Image from "next/image";

import LoaderIcon from "../../../public/loader.png";

export const Loader = () => {
  return (
    <div className="h-[2.625rem] w-[2.625rem]">
      <Image
        width={42}
        height={42}
        alt="Loader"
        src={LoaderIcon}
        className="animate-spin"
      />
    </div>
  );
};
