import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <div className="container mx-auto">
      <div className="flex gap-8 items-center">
        <Link href="/">
          <div className={`heading font-bold text-4xl`}>
            Your <span className="text-red-600">Nepali</span> Tutor
          </div>
        </Link>
        <div className="nav-links flex gap-16 font-light flex-grow justify-center text-xl">
          <Link href="/blogs">
            <div className={`${pathname === "/blogs" ? "bg-red-500" : ""}`}>
              Blogs
            </div>
          </Link>
          <div>Tutorials</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
