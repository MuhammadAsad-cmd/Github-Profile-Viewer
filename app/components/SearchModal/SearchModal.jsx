"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleSearch = async (query) => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    const data = await response.json();
    setResults(data.items || []);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      handleSearch(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleUserClick = (username) => {
    setIsOpen(false);
    router.push(`/${username}`);
  };

  return (
    <>
      <form onClick={togglePopup} className="max-w-md mx-auto">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            readOnly
            className="lg:w-full w-5 p-4 lg:px-10 h-10 cursor-pointer text-sm text-[#f3f1f5] placeholder:text-[#f3f1f5] border bg-[#2f2f2f] border-[#f3f1f5] rounded-lg outline-none"
            placeholder="Enter GitHub Username"
          />
        </div>
      </form>
      {isOpen && (
        <div className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-[#5F5F5F] bg-opacity-80">
          <div
            ref={popupRef}
            className="rounded-xl w-[430px] overflow-y-auto h-[550px] bg-[#2f2f2f] border border-[#9b9b9b] p-5 shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#f3f1f5]">
                  Search
                </h2>
              </div>
              <div
                onClick={togglePopup}
                className="CUcontactModalbtn flex h-[50px] w-[50px] cursor-pointer items-center justify-center duration-300 ease-in-out"
              >
                <RxCross1 className="text-3xl text-[#f3f1f5] opacity-40" />
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between">
                <div>
                  <input
                    type="search"
                    id="default-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-4 h-10 text-sm text-[#f3f1f5] placeholder:text-[#f3f1f5] border bg-[#2f2f2f] border-[#f3f1f5] rounded-lg outline-none"
                    placeholder="Enter GitHub Username"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center border border-[#f3f1f5] w-[100px] text-[#f3f1f5] h-10 bg-[#444] rounded-lg"
                >
                  Filter By
                </button>
              </div>
            </form>

            <div className="mt-5">
              {results.length > 0 ? (
                <ul>
                  {results.map((user) => (
                    <div
                      key={user.id}
                      className="mb-2 flex items-center cursor-pointer"
                      onClick={() => handleUserClick(user.login)}
                    >
                      <div className="mr-3">
                        <img
                          src={user.avatar_url}
                          alt={user.login}
                          className="w-16 h-16 rounded-xl"
                        />
                      </div>
                      <span className="text-[#f3f1f5] hover:underline">
                        {user.login}
                      </span>
                    </div>
                  ))}
                </ul>
              ) : (
                <p className="text-[#f3f1f5]"></p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
