import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white flex items-center h-16 px-4">
      <Link href="/login">
        <a className="mr-0 ml-auto text-blue-400">Log in</a>
      </Link>
    </div>
  );
};

export default Header;
