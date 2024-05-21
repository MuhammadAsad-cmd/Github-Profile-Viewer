import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1300px]">
        <div className="flex items-center h-20 mt-5 justify-between">
          <div className="">
            <Image
              width={150}
              height={150}
              unoptimized
              src="/images/hub-removebg-preview (1).png"
              alt="logo"
              className="rounded-full"
            />
          </div>
          <ul className="flex gap-8 text-[#f3f1f5] items-center justify-center">
            <li>Home</li>
            <li>
              Profile
              {/* <ul>
                  <li>Overview</li>
                  <li>Repositories</li>
                  <li>Stars</li>
                  <li>Followers</li>
                  <li>Following</li>
                </ul> */}
            </li>
            <li>Activity</li>
            <li>Search History</li>
            <li>About</li>
          </ul>
          <div>
            <form className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#f3f1f5]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-4 px-10 h-10 text-sm text-[#f3f1f5] placeholder:text-[#f3f1f5] border bg-[#2f2f2f] border-[#f3f1f5] rounded-lg outline-none"
                  placeholder="Enter GitHub Username"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
