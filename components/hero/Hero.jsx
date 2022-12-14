import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaDiscord } from "react-icons/fa";
import hero1 from "../../public/images/hero/hero1-min.png";
import hero2 from "../../public/images/hero/hero2-min.png";
import hero3 from "../../public/images/hero/hero3-min.png";
import hero4 from "../../public/images/hero/hero4-min.png";
import hero5 from "../../public/images/hero/hero5.webp";
import hero5a from "../../public/images/hero/hero5a-min.png";
import herob from "../../public/images/hero/nftlogo2-min.png";

import hero6 from "../../public/images/hero/hero6-min.png";

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero-frame-1 animate-pulse">
      <Image src={hero1} objectFit="fill" alt="hero one" />
    </div>
    <div className="hero-frame-2 animate-pulse">
      <Image src={hero2} objectFit="fill" alt="hero two" />
    </div>
    <div className="hero-frame-3 animate-pulse">
      <Image src={hero3} objectFit="fill" alt="hero three" />
    </div>
    <div className="hero-frame-4 animate-pulse">
      <Image src={hero4} objectFit="fill" alt="hero four" />
    </div>
    <div className="hero-frame-5 animate-pulse">
      <Image src={hero5a} objectFit="fill" alt="hero five" />
    </div>
    <div className="hero-frame-6 animate-pulse">
      <Image src={hero6} objectFit="fill" alt="hero six" />
    </div>

    <div className="container m-auto pt-[160px] pb-[60px] md:pt-[200px] md:pb-[100px] lg:pt-[250px] lg:pb-[150px] xl:pt-[358px] xl:pb-[258px] z-[1] relative hero-content">
      <div className="w-10/12 sm:w-7/12 text-center m-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:gap-[30px] mt-[35px]">
      <p className="mt-5">
         Minting Now as seen on
        </p>
      <Link href="https://nftcalendar.io/">
      <Image src={hero5} objectFit="fill" alt="hero six" height={100} width={100}  />
          </Link>
        
          </div>
        <h1 className="heading-1 mt-3">
          Fast Ape Speed Club{" "}
          <span className="text-[color:var(--color-secondary)]">
            Get ready for the race
          </span>
        </h1>

        <p className="mt-5">
          FASC is a collection of 3836 unique avatars on the Solana Blockchain
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:gap-[30px] mt-[35px]">
          <Link href="https://magiceden.io/marketplace/fast_ape_speed_club/">
            <a className="btn__primary btn-gradient gap-[10px] border border-transparent">
              View on Magic Eden
              <FaArrowRight />
            </a>
          </Link>
          <Link href="https://discord.gg/BcUtGEKYAz">
            <a className="btn__primary gap-[10px] border-round-gradient">
              <span className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#5C6AC0]">
                <FaDiscord />
              </span>
              Join Discord
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
