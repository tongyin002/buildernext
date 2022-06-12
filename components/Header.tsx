import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-end bg-gray-50">
      <Link href="/login">
        <a style={{ margin: "0px 20px 0px auto" }} className="underline">
          Log in
        </a>
      </Link>
    </div>
  );
};

export default Header;
