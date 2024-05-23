"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCodeFork, FaRegStar } from "react-icons/fa6";

const ProfilePage = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (username) {
      const fetchRepos = async () => {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        const data = await response.json();
        const sortedRepos = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sortedRepos);
      };

      fetchRepos();
    }
  }, [username]);

  return (
    <>
      <div>
        <p className="text-base font-medium leading-6 text-[#f3f1f5]">
          Popular repositories
        </p>
        <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-5">
          {repos.slice(0, 6).map((repo) => (
            <div
              key={repo.id}
              className="p-4 border h-full flex-col flex justify-between w-full lg:max-w-[440px] border-[#f3f1f5] bg-[#444] rounded-lg"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-2xl text-[#f3f1f5] font-bold cursor-pointer hover:underline"
                  onClick={() => window.open(repo.html_url, "_blank")}
                >
                  {repo.name}
                </h3>
                <p className="text-[#f3f1f5] h-5 w-12 text-xs font-medium flex items-center justify-center border rounded-3xl">
                  {repo.private ? "Private" : "Public"}
                </p>
              </div>
              {repo.description && (
                <p className="text-[#c0c0c0] text-base leading-6 mt-2">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-6 mt-2">
                <div className="flex text-[#c0c0c0] text-sm items-center gap-2 mt-2">
                  <p className=" h-3 w-3 rounded-full bg-[#E34C26]"></p>
                  <span className="">{repo.language || "N/A"}</span>
                </div>
                <div className="flex text-[#c0c0c0] hover:text-[#4493f8] cursor-pointer items-center text-base gap-2 mt-2">
                  <FaRegStar />
                  <span className="">{repo.stargazers_count}</span>
                </div>
                <div className="flex text-[#c0c0c0] hover:text-[#4493f8] cursor-pointer text-base items-center gap-2 mt-2">
                  <FaCodeFork />
                  <span className="">{repo.forks_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
