import Link from "next/link";

const Header = () => {
  return (
    <h1 className="header">
      <Link href="/">
        <a>reinhard.fun</a>
      </Link>
    </h1>
  );
};

export default Header;
