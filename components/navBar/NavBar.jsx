import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/Logo.png";
import NavItems from "../navItems/NavItems";
import Social from "../social/Social";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50 py-[25px] backdrop-blur-xl">
      {/* navbar brand */}
      <div className="px-4 xl:mx-[55px] 2xl:mx-[120px] flex flex-row tablet:flex-col items-center tablet:items-start gap-7 xl:gap-[45px] 2xl:gap-[84px] relative">
        <div className="w-[126px] h-[32px]">
          <Link href="/">
            <Image src={Logo} objectFit="fill" alt="Nav Bar logo" width={180} height={90} />
          </Link>
        </div>

        <div
          tabIndex={0}
          onClick={() => setOpen(!open)}
          className="absolute right-4 border-round-gradient rounded p-1 hidden tablet:block"
        >
          <FaBars className="text-xl" />
        </div>

        <div
          className={`flex flex-row tablet:flex-col items-center tablet:items-start justify-between w-full ${
            open ? "tablet:block" : "tablet:hidden"
          }`}
        >
          {/* nav items */}
          <div className="pb-0 tablet:pb-6">
            <NavItems
              open={open}
              setOpen={setOpen}
              cls="flex-row tablet:flex-col"
            />
          </div>
          {/* right side items */}
          <div className="flex flex-row tablet:flex-col items-center tablet:items-start gap-5 xl:gap-8 2xl:gap-12">
            {/* Social icons */}
            <Social />
            {/* button */}
            <Link href="https://magiceden.io/marketplace/fast_ape_speed_club/">
              <a className="btn__primary btn-gradient">View on ME</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
