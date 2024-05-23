"use client";
import Image from "next/image";
import SearchModal from "../SearchModal/SearchModal";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="container mx-auto">
        6
        <div className="flex items-center px-5 h-20 mt-5 justify-between">
          <div>
            <Link href="/">
              <Image
                width={150}
                height={150}
                unoptimized
                src="/images/hub-removebg-preview (1).png"
                alt="logo"
                className="rounded-full"
              />
            </Link>
          </div>

          <div>
            <SearchModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
