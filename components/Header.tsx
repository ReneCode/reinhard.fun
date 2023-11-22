import type { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>reinhard.fun Blog</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
