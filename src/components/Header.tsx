import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/logo.svg";

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 flex items-center justify-center bg-white p-[1.563rem] px-2 sm:px-[1.563rem]">
      <nav className="bg-light-blue flex w-full max-w-[100rem] items-center justify-between gap-4 rounded-[2.813rem] p-4 text-white shadow shadow-slate-300 backdrop-blur-3xl sm:px-8">
        <Link className="relative h-[1.1rem] w-[4.75rem]" href="/">
          <Image
            priority
            alt="Logo"
            src={Logo}
            width={76}
            height={18}
            className="h-full w-full"
          />
        </Link>
        <h2 className="text-center text-xl">Weather App</h2>
        <div className="ring-gray relative h-[2.625rem] w-[2.625rem] rounded-full ring">
          <Image
            priority
            width={42}
            height={42}
            alt="Avatar"
            src="/me.png"
            className="h-full w-full rounded-full"
          />
        </div>
      </nav>
    </div>
  );
};
