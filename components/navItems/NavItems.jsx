import Link from "next/link";

const NavItems = ({ cls, setOpen, open }) => {
  return (
    <ul className={`flex ${cls} gap-3 xl:gap-5 text-medium xl:text-nav`}>
      {[
        ["Home", "#hero"],
        ["Roadmap", "#roadmap"],
        ["Team", "#team"],
        ["Community", "#community"],
        ["FAQ", "#faq"],
        ["Mint", "https://mint.fastapespeedclub.com"],
      ].map(([title, url]) => (
        <li
          onClick={() => setOpen(!open)}
          className="transition duration-300 hover:text-[color:var(--color-secondary)]"
          key={title}
        >
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
