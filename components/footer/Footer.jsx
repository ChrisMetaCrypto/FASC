import Image from "next/image";
import Link from "next/link";
import NavItems from "../navItems/NavItems";
import Social from "../social/Social";

const Footer = () => (
  <div className="mt-[60px] lg:mt-[120px]">
    <div className="border-y border-[color:var(--border)] py-[25px]">
      <footer className="container m-auto px-4 sm:px-0">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/images/Logo.png"
                width="180"
                height="90"
                alt="Logo"
              />
            </a>
          </Link>

          {/* Nav items  */}
          <div className="pb-0">
            <NavItems cls="flex-wrap justify-center" />
          </div>
          {/* Social icons */}
          <Social />
        </div>
      </footer>
    </div>

    {/* <div className="container m-auto my-[20px] px-4 sm:px-0 flex items-center justify-between">
      <p className="leading-[23px]">© 2022. NFTPO</p>
      <p className="leading-[23px]">
        Design By{" "}
        <Link href="/">
          <a className="text-[color:var(--color-secondary)]">Softivus</a>
        </Link>
      </p>
    </div> */}
  </div>
);

export default Footer;
